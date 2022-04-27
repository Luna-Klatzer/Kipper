/**
 * Declaration statements in the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import { CompilableParseToken, eligibleParentToken } from "./parse-token";
import {
	CompoundStatementContext,
	DeclarationContext,
	DeclaratorContext,
	FunctionDeclarationContext,
	InitDeclaratorContext,
	InitializerContext,
	ParameterDeclarationContext,
	ParameterTypeListContext,
	SingleItemTypeSpecifierContext,
	StorageTypeSpecifierContext,
} from "../parser";
import { KipperStorageType, KipperType } from "../logic";
import { CompoundStatement } from "./statements";
import { KipperProgramContext } from "../program-ctx";
import { UnableToDetermineMetadataError } from "../../errors";

/**
 * Every antlr4 definition ctx type
 */
export type antlrDefinitionCtxType = FunctionDeclarationContext | ParameterDeclarationContext | DeclarationContext;

/**
 * Fetches the handler for the specified {@link antlrDefinitionCtxType}.
 * @param antlrCtx The context instance that the handler class should be fetched for.
 * @param parent The file context class that will be assigned to the instance.
 * @param scope The scope of the definition. (This is only used for {@link VariableDeclaration variables}.
 */
export function getDefinitionInstance(
	antlrCtx: antlrDefinitionCtxType,
	parent: eligibleParentToken,
	scope: KipperProgramContext | CompoundStatement,
): Declaration {
	if (antlrCtx instanceof FunctionDeclarationContext) {
		return new FunctionDeclaration(antlrCtx, parent);
	} else if (antlrCtx instanceof ParameterDeclarationContext) {
		return new ParameterDeclaration(antlrCtx, parent);
	} else {
		return new VariableDeclaration(antlrCtx, parent, scope);
	}
}

/**
 * Base Declaration class that represents a value or function declaration or definition in Kipper and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export abstract class Declaration extends CompilableParseToken {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: antlrDefinitionCtxType;

	protected abstract readonly _identifier: string;

	protected constructor(antlrCtx: antlrDefinitionCtxType, parent: eligibleParentToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): antlrDefinitionCtxType {
		return this._antlrCtx;
	}

	/**
	 * The identifier of the declaration.
	 */
	public get identifier(): string {
		return this._identifier;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	public abstract translateCtxAndChildren(): Promise<Array<Array<string>>>;
}

/**
 * Declaration of a parameter inside a {@link FunctionDeclaration}.
 * @since 0.1.2
 */
export class ParameterDeclaration extends Declaration {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: ParameterDeclarationContext;

	protected override readonly _identifier: string;

	protected readonly _type: KipperType;

	constructor(antlrCtx: ParameterDeclarationContext, parent: eligibleParentToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;

		// TODO! Fetch valid identifier
		this._identifier = "";
		this._type = "void";
	}

	/**
	 * The type of the argument
	 */
	public get type(): KipperType {
		return this._type;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): ParameterDeclarationContext {
		return this._antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	public async translateCtxAndChildren(): Promise<Array<Array<string>>> {
		// TODO!
		return [[]];
	}
}

/**
 * Function definition class, which represents the definition of a function in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 *
 * Functions will always be global and unlike {@link VariableDeclaration variables} therefore have no scope.
 *
 * @todo Implement support for arguments using {@link ParameterDeclaration}.
 * @since 0.1.2
 */
export class FunctionDeclaration extends Declaration {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: FunctionDeclarationContext;

	protected override readonly _identifier: string;

	protected readonly _isDefined: boolean;

	protected readonly _returnType: KipperType;

	protected readonly _args: Array<ParameterDeclaration>;

	constructor(antlrCtx: FunctionDeclarationContext, parent: eligibleParentToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;

		// Fetching the metadata from the antlr4 context
		const metadata = this.getMetadata();
		this._isDefined = metadata.isDefined;
		this._identifier = metadata.identifier;
		this._returnType = metadata.returnType;
		this._args = metadata.args;
	}

	/**
	 * Fetch the metadata for the function definition.
	 * @private
	 */
	private getMetadata(): {
		isDefined: boolean;
		identifier: string;
		args: Array<ParameterDeclaration>;
		returnType: KipperType;
	} {
		// Fetch context instances
		let declaratorCtx = <DeclaratorContext | undefined>(
			this.antlrCtx.children?.find((val) => val instanceof DeclaratorContext)
		);
		let paramListCtx = <ParameterTypeListContext | undefined>(
			this.antlrCtx.children?.find((val) => val instanceof ParameterTypeListContext)
		);
		let returnTypeCtx = <SingleItemTypeSpecifierContext | undefined>(
			this.antlrCtx.children?.find((val) => val instanceof SingleItemTypeSpecifierContext)
		);

		// Throw an error if no children or not enough children are present - This should never happen
		if (!this.antlrCtx.children || !declaratorCtx || !returnTypeCtx) {
			throw new UnableToDetermineMetadataError();
		}

		return {
			isDefined: this.antlrCtx.children?.find((val) => val instanceof CompoundStatementContext) !== undefined,
			identifier: this.tokenStream.getText(declaratorCtx.sourceInterval),
			returnType: <KipperType>this.tokenStream.getText(returnTypeCtx.sourceInterval),
			args: paramListCtx ? [] : [], // TODO! Implement arg fetching
		};
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): FunctionDeclarationContext {
		return this._antlrCtx;
	}

	/**
	 * The identifier of the function definition.
	 */
	public get identifier(): string {
		return this._identifier;
	}

	/**
	 * The return type of this function.
	 */
	public get returnType(): KipperType {
		return this._returnType;
	}

	/**
	 * The {@link ParameterDeclaration parameter/arguments} of this function definition.
	 */
	public get args(): Array<ParameterDeclaration> {
		return this._args;
	}

	/**
	 * Returns whether the function declaration is defined and has a function body.
	 */
	public get isDefined(): boolean {
		return this._isDefined;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// Assert that the variable type exists
		this.programCtx.assert(this).assertTypeExists(this.returnType);

		// Add function definition to the global scope
		this.programCtx.addNewGlobalScopeEntry(this);
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	public async translateCtxAndChildren(): Promise<Array<Array<string>>> {
		// TODO!
		return [[]];
	}
}

/**
 * Variable declaration class, which represents the declaration and or definition of a variable in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 *
 * In case that {@link scope} is of type {@link KipperProgramContext}, then the scope is defined as global
 * (accessible for the entire program).
 */
export class VariableDeclaration extends Declaration {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: DeclarationContext;

	protected override readonly _identifier: string;

	protected readonly _storageType: KipperStorageType;

	protected readonly _valueType: KipperType;

	protected _isDefined: boolean;

	protected _scope: KipperProgramContext | CompoundStatement;

	constructor(
		antlrCtx: DeclarationContext,
		parent: eligibleParentToken,
		scope: KipperProgramContext | CompoundStatement,
	) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;

		// Fetching the metadata from the antlr4 context
		const metadata = this.getMetadata();
		this._isDefined = metadata.isDefined;
		this._identifier = metadata.identifier;
		this._storageType = metadata.storageType;
		this._valueType = metadata.valueType;
		this._scope = scope;
	}

	private getMetadata(): {
		isDefined: boolean;
		identifier: string;
		storageType: KipperStorageType;
		valueType: KipperType;
	} {
		let storageTypeCtx = <StorageTypeSpecifierContext | undefined>(
			this.antlrCtx.children?.find((val) => val instanceof StorageTypeSpecifierContext)
		);
		let initDeclaratorCtx = <InitDeclaratorContext | undefined>(
			this.antlrCtx.children?.find((val) => val instanceof InitDeclaratorContext)
		);
		let declaratorCtx = <DeclaratorContext | undefined>(
			initDeclaratorCtx?.children?.find((val) => val instanceof DeclaratorContext)
		);
		let typeSpecifier = <SingleItemTypeSpecifierContext | undefined>(
			initDeclaratorCtx?.children?.find((val) => val instanceof SingleItemTypeSpecifierContext)
		);

		// Throw an error if no children or not enough children are present - This should never happen
		if (!this.antlrCtx.children || !storageTypeCtx || !initDeclaratorCtx || !declaratorCtx || !typeSpecifier) {
			throw new UnableToDetermineMetadataError();
		}

		return {
			isDefined: initDeclaratorCtx?.children?.find((val) => val instanceof InitializerContext) !== undefined,
			identifier: this.tokenStream.getText(declaratorCtx.sourceInterval),
			storageType: <KipperStorageType>this.tokenStream.getText(storageTypeCtx.sourceInterval),
			valueType: <KipperType>this.tokenStream.getText(typeSpecifier.sourceInterval),
		};
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): DeclarationContext {
		return this._antlrCtx;
	}

	/**
	 * The identifier of the variable declaration.
	 */
	public get identifier(): string {
		return this._identifier;
	}

	/**
	 * Returns the storage type of this variable.
	 */
	public get storageType(): KipperStorageType {
		return this._storageType;
	}

	/**
	 * Returns the scope where this variable is registered in.
	 */
	public get scope(): KipperProgramContext | CompoundStatement {
		return this._scope;
	}

	/**
	 * Returns the value type of this variable.
	 */
	public get valueType(): KipperType {
		return this._valueType;
	}

	/**
	 * Returns whether the variable declaration is defined and has a value set.
	 */
	public get isDefined(): boolean {
		return this._isDefined;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// Assert that the variable type exists
		this.programCtx.assert(this).assertTypeExists(this.valueType);

		// Load variable into global scope, if the assigned scope is of type {@link KipperProgramContext}
		if (this.scope instanceof KipperProgramContext) {
			this.scope.addNewGlobalScopeEntry(this);
		} else {
			this.scope.addNewLocalVariable(this);
		}
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	public async translateCtxAndChildren(): Promise<Array<Array<string>>> {
		// TODO!
		return [[]];
	}
}
