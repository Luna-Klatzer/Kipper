/**
 * The primary statements that make up the Kipper language.
 *
 * Statements:
 * - Compound statement
 * - Selection statement
 * - Expression statement
 * - Iteration statement
 * - Jump statement (Only valid in functions or loops)
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import type { compilableNodeChild, compilableNodeParent } from "../../parser/";
import {
	CompoundStatementContext,
	ExpressionStatementContext,
	IterationStatementContext,
	JumpStatementContext,
	SelectionStatementContext,
} from "../../parser";
import { determineScope } from "../../../utils";
import { ScopeVariableDeclaration } from "../../scope-declaration";
import type { KipperScope, TranslatedCodeLine } from "../const";
import type { VariableDeclaration } from "./definitions";
import type { Expression } from "./expressions";
import type { TargetASTNodeCodeGenerator } from "../../translation";
import type { TargetASTNodeSemanticAnalyser } from "../target-semantic-analyser";
import { CompilableASTNode } from "../../parser";

/**
 * Every antlr4 statement ctx type
 */
export type antlrStatementCtxType =
	| CompoundStatementContext
	| SelectionStatementContext
	| ExpressionStatementContext
	| IterationStatementContext
	| JumpStatementContext;

/**
 * Fetches the handler for the specified {@link antlrStatementCtxType}.
 * @param antlrCtx The context instance that the handler class should be fetched for.
 * @param parent The file context class that will be assigned to the instance.
 */
export function getStatementInstance(antlrCtx: antlrStatementCtxType, parent: compilableNodeParent): Statement<any> {
	if (antlrCtx instanceof CompoundStatementContext) {
		return new CompoundStatement(antlrCtx, parent);
	} else if (antlrCtx instanceof SelectionStatementContext) {
		return new SelectionStatement(antlrCtx, parent);
	} else if (antlrCtx instanceof ExpressionStatementContext) {
		return new ExpressionStatement(antlrCtx, parent);
	} else if (antlrCtx instanceof IterationStatementContext) {
		return new IterationStatement(antlrCtx, parent);
	} else {
		// Can only be {@link JumpStatementContext}
		return new JumpStatement(antlrCtx, parent);
	}
}

/**
 * Base Statement class, which represents a statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export abstract class Statement<Semantics> extends CompilableASTNode<Semantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: antlrStatementCtxType;

	protected constructor(antlrCtx: antlrStatementCtxType, parent: compilableNodeParent) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;

		// Manually add the child to the parent
		parent.addNewChild(this);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): antlrStatementCtxType {
		return this._antlrRuleCtx;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	public async translateCtxAndChildren(): Promise<Array<TranslatedCodeLine>> {
		return await this.targetCodeGenerator(this);
	}

	public abstract targetCodeGenerator: TargetASTNodeCodeGenerator<any, Array<TranslatedCodeLine>>;
}

/**
 * Compound statement class, which represents a compound statement containing other items in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 */
export class CompoundStatement extends Statement<{ scope: KipperScope }> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: CompoundStatementContext;

	protected readonly _children: Array<Statement<any>>;

	private readonly _localScope: Array<ScopeVariableDeclaration>;

	constructor(antlrCtx: CompoundStatementContext, parent: compilableNodeParent) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
		this._localScope = [];
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Statement<any>> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): CompoundStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Returns the local variables that are exclusively accessible inside this compound statement.
	 */
	public get localScope(): Array<ScopeVariableDeclaration> {
		return this._localScope;
	}

	/**
	 * Adds a new local variable to this scope.
	 * @param token The {@link VariableDeclaration} token.
	 * @param identifier The identifier of the local variable.
	 */
	public async addLocalVariable(token: VariableDeclaration, identifier: string): Promise<ScopeVariableDeclaration> {
		// Make sure the identifier is available
		this.programCtx.semanticCheck(token).variableIdentifierNotDeclared(identifier, this);

		// Add new declaration or definition
		const declaration = new ScopeVariableDeclaration(token);
		this._localScope.push(declaration);
		return declaration;
	}

	/**
	 * Tries to fetch the passed identifier in the current scope.
	 * @since 0.6.0
	 */
	public getLocalVariable(identifier: string): ScopeVariableDeclaration | undefined {
		return this.localScope.find((val) => val.identifier === identifier);
	}

	/**
	 * Tries to fetch the passed identifier in the current scope and all parent scopes recursively.
	 * @since 0.6.0
	 */
	public getVariableRecursively(identifier: string): ScopeVariableDeclaration | undefined {
		const localVar = this.getLocalVariable(identifier);
		if (!localVar) {
			if (this.scope instanceof CompoundStatement) {
				return this.scope.getVariableRecursively(identifier);
			} else {
				return this.scope.getGlobalVariable(identifier);
			}
		}
		return localVar;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			scope: determineScope(this),
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<CompoundStatement> = this.semanticAnalyser.compoundStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<CompoundStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.compoundStatement;
}

/**
 * Selection statement class, which represents a selection statement in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class SelectionStatement extends Statement<{ scope: KipperScope }> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: SelectionStatementContext;

	protected readonly _children: Array<Statement<any>>;

	constructor(antlrCtx: SelectionStatementContext, parent: compilableNodeParent) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
		this._children = [];
	}

	/**
	 * The children of this AST node.
	 */
	public get children(): Array<Statement<any>> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): SelectionStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			scope: determineScope(this),
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<SelectionStatement> = this.semanticAnalyser.selectionStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<SelectionStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.selectionStatement;
}

/**
 * Expression statement class, which represents a statement made up of an expression in the Kipper language.
 */
export class ExpressionStatement extends Statement<{ scope: KipperScope }> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ExpressionStatementContext;

	protected readonly _children: Array<Expression<any>>;

	constructor(antlrCtx: ExpressionStatementContext, parent: compilableNodeParent) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Expression<any>> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): ExpressionStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			scope: determineScope(this),
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<ExpressionStatement> =
		this.semanticAnalyser.expressionStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<ExpressionStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.expressionStatement;
}

/**
 * Iteration statement class, which represents an iteration/loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
export class IterationStatement extends Statement<{ scope: KipperScope }> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IterationStatementContext;

	protected readonly _children: Array<compilableNodeChild>;

	constructor(antlrCtx: IterationStatementContext, parent: compilableNodeParent) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<compilableNodeChild> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): IterationStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			scope: determineScope(this),
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<IterationStatement> = this.semanticAnalyser.iterationStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<IterationStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.iterationStatement;
}

/**
 * Jump statement class, which represents a jump/break statement in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class JumpStatement extends Statement<{ scope: KipperScope }> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: JumpStatementContext;

	protected readonly _children: Array<Expression<any>>;

	constructor(antlrCtx: JumpStatementContext, parent: compilableNodeParent) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Expression<any>> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): JumpStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			scope: determineScope(this),
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<JumpStatement> = this.semanticAnalyser.jumpStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<JumpStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.jumpStatement;
}