/**
 * Compilable AST Node that can be semantically analysed and translated into a target language.
 * @since 0.8.0
 */
import type { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import type {
	CompoundStatement,
	KipperTargetSemanticAnalyser,
	TargetASTNodeSemanticAnalyser,
	TranslatedCodeLine,
} from "../semantics";
import type { KipperParser } from "./index";
import type { KipperProgramContext } from "../program-ctx";
import type { TokenStream } from "antlr4ts/TokenStream";
import type { KipperCompileTarget } from "../compile-target";
import type { KipperTargetCodeGenerator, TargetASTNodeCodeGenerator } from "../translation";
import type { RootASTNode } from "./root-ast-node";
import type { SemanticData } from "./ast-node";
import { ParserASTNode } from "./ast-node";
import type { Scope } from "../scope";

/**
 * An eligible parent for a compilable node.
 * @since 0.8.0
 */
export type compilableNodeParent = CompilableASTNode<any> | RootASTNode;

/**
 * An eligible child for a compilable node.
 * @since 0.8.0
 */
export type compilableNodeChild = CompilableASTNode<any>;

/**
 * Compilable AST Node that can be semantically analysed and translated into a target language.
 * @since 0.8.0
 */
export abstract class CompilableASTNode<Semantics extends SemanticData> extends ParserASTNode<Semantics> {
	public _scopeCtx: CompoundStatement | KipperProgramContext | undefined;

	protected _parent: compilableNodeParent;

	protected _children: Array<compilableNodeChild>;

	protected constructor(antlrCtx: ParserRuleContext, parent: compilableNodeParent) {
		super(antlrCtx, parent);
		this._parent = parent;
		this._children = [];
	}

	/**
	 * Returns the {@link CompilableASTNode parent} that has this node as a child.
	 * @since 0.8.0
	 */
	public get parent(): compilableNodeParent {
		return this._parent;
	}

	/**
	 * The children of this AST node.
	 * @since 0.8.0
	 */
	public get children(): Array<compilableNodeChild> {
		return this._children;
	}

	/**
	 * Adds new child ctx item to this AST node. The child item should be in the order that they appeared in the
	 * {@link this.antlrCtx} parse tree.
	 *
	 * This will also automatically set the parent of {@link newChild} to this instance.
	 * @since 0.8.0
	 */
	public addNewChild(newChild: compilableNodeChild) {
		this._children.push(newChild);
	}

	/**
	 * Returns the semantic data of this token.
	 * @since 0.8.0
	 */
	public get semanticData(): Semantics | undefined {
		return this._semanticData;
	}

	/**
	 * Sets the semantic data of this item.
	 * @param value The semantic data that should be written onto this item.
	 * @since 0.8.0
	 */
	protected override set semanticData(value: Semantics | undefined) {
		super.semanticData = value;
	}

	/**
	 * The parser that generated the parse tree and {@link antlrRuleCtx antlr rule context}.
	 * @since 0.8.0
	 */
	public get parser(): KipperParser {
		return this.programCtx.parser;
	}

	/**
	 * The file context instance containing the metadata for the listener and this parse token.
	 * @since 0.8.0
	 */
	public get programCtx(): KipperProgramContext {
		return this.parent.programCtx;
	}

	/**
	 * Returns the token stream source for this token.
	 * @since 0.8.0
	 */
	public get tokenStream(): TokenStream {
		return this.programCtx.tokenStream;
	}

	/**
	 * The compilation translation for this specific token.
	 * @since 0.8.0
	 */
	public get target(): KipperCompileTarget {
		return this.programCtx.target;
	}

	/**
	 * The code generator, which will generate the code for this specific token into the
	 * {@link this.target target language}.
	 * @since 0.8.0
	 */
	public get codeGenerator(): KipperTargetCodeGenerator {
		return this.target.codeGenerator;
	}

	/**
	 * The {@link scope} of this AST node.
	 * @since 0.8.0
	 */
	public get scope(): Scope {
		if ("localScope" in this.scopeCtx) {
			return this.scopeCtx.localScope;
		} else {
			return this.scopeCtx.globalScope;
		}
	}

	/**
	 * The context / AST node of the {@link scope}.
	 * @since 0.8.0
	 */
	public get scopeCtx(): CompoundStatement | KipperProgramContext {
		if (this._scopeCtx) {
			return this._scopeCtx;
		}

		let parent: compilableNodeParent = this.parent;
		while (parent.parent !== undefined && !("localScope" in parent)) {
			parent = parent.parent;
		}

		// If there is no parent -> root node, return the program context
		if (parent.parent === undefined) {
			return parent.programCtx;
		}
		// Return the local scope (Compound statement) ctx.
		return parent;
	}

	/**
	 * The translation-specific semantic analyser, which will perform semantic analysis specific for the
	 * {@link this.target target language}.
	 * @since 0.8.0
	 */
	public get semanticAnalyser(): KipperTargetSemanticAnalyser {
		return this.target.semanticAnalyser;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 * @since 0.8.0
	 */
	public async translateCtxAndChildren(): Promise<TranslatedCodeLine | Array<TranslatedCodeLine>> {
		return await this.targetCodeGenerator(this);
	}

	/**
	 * Semantically analyses the code inside this AST node.
	 *
	 * This function will recursively call itself on the {@link this.children} instances and analyse the deepest children
	 * nodes first, working up as the tokens get more complex. This way the parent tokens can access the semantics of
	 * the children and properly process itself.
	 * @since 0.8.0
	 */
	public async semanticAnalysis(): Promise<void> {
		// Start with the children, and then work upwards as the structures get more complex
		for (let child of this.children) {
			// The child will likely also have its own children, which need to be also called first before the parent node
			// can be processed.
			await child.semanticAnalysis();
		}

		// Finally, check if this node is semantically valid
		await this.primarySemanticAnalysis();
		await this.semanticTypeChecking();
		await this.targetSemanticAnalysis(this);

		// Check for warnings after the semantic analysis has been completed
		if (this.programCtx.reportWarnings) {
			await this.checkForWarnings();
		}
	}

	/**
	 * Semantically analyses the code inside this AST node.
	 * @throws KipperError if the code is not valid.
	 * @since 0.8.0
	 */
	public abstract primarySemanticAnalysis(): Promise<void>;

	/**
	 * Type checks the code inside this AST node.
	 * @throws TypeError When a type mismatch or invalid usage is encountered.
	 * @since 0.8.0
	 */
	public abstract semanticTypeChecking(): Promise<void>;

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public abstract checkForWarnings(): Promise<void>;

	/**
	 * Semantic analyser function that is specific for the {@link KipperCompileTarget target}.
	 *
	 * This only should perform logical analysis and not interpret the code/modify
	 * the {@link semanticData} field.
	 * @since 0.8.0
	 */
	protected abstract targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<any>;

	/**
	 * Code generator function that is specific for the {@link KipperCompileTarget target}.
	 * @since 0.8.0
	 */
	protected abstract targetCodeGenerator: TargetASTNodeCodeGenerator<
		any,
		TranslatedCodeLine | Array<TranslatedCodeLine>
	>;
}
