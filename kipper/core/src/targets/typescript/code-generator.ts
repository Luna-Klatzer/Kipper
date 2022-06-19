/**
 * The TypeScript target-specific code generator for translating Kipper into TypeScript.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import {
	AdditiveExpression,
	ArraySpecifierExpression,
	AssignmentExpression,
	BoolPrimaryExpression,
	CastOrConvertExpression,
	CharacterPrimaryExpression,
	CompoundStatement,
	ConditionalExpression,
	EqualityExpression,
	ExpressionStatement,
	FStringPrimaryExpression,
	FunctionCallPostfixExpression,
	FunctionDeclaration,
	GenericTypeSpecifierExpression,
	IdentifierPrimaryExpression,
	IncrementOrDecrementExpression,
	IncrementOrDecrementUnaryExpression,
	IterationStatement,
	JumpStatement,
	KipperTargetCodeGenerator,
	KipperType,
	ListPrimaryExpression,
	LogicalAndExpression,
	LogicalOrExpression,
	MultiplicativeExpression,
	NumberPrimaryExpression,
	OperatorModifiedUnaryExpression,
	ParameterDeclaration,
	RelationalExpression,
	ScopeFunctionDeclaration,
	SelectionStatement,
	SingleTypeSpecifierExpression,
	StringPrimaryExpression,
	TangledPrimaryExpression,
	TranslatedCodeLine,
	TranslatedExpression,
	TypeofTypeSpecifierExpression,
	VariableDeclaration,
} from "../../compiler";
import { getTypeScriptBuiltInIdentifier, getTypeScriptType } from "./tools";
import { getConversionFunctionIdentifier } from "../../utils";

/**
 * The TypeScript target-specific code generator for translating Kipper into TypeScript.
 * @since 0.8.0
 */
export class TypeScriptTargetCodeGenerator extends KipperTargetCodeGenerator {
	/**
	 * Translates a {@link CompoundStatement} into the typescript language.
	 */
	compoundStatement = async (node: CompoundStatement): Promise<Array<TranslatedCodeLine>> => {
		let childCode: Array<TranslatedCodeLine> = [];
		for (let child of node.children) {
			childCode = [...childCode, ...(await child.translateCtxAndChildren())];
		}
		return [["{"], ...childCode, ["}"]];
	};

	/**
	 * Translates a {@link SelectionStatement} into the typescript language.
	 */
	selectionStatement = async (node: SelectionStatement): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link ExpressionStatement} into the typescript language.
	 */
	expressionStatement = async (node: ExpressionStatement): Promise<Array<TranslatedCodeLine>> => {
		let childCode: Array<TranslatedCodeLine> = [];
		for (let child of node.children) {
			// Expression lists (expression statements) will be evaluated per each expression, meaning every expression
			// can be considered a single line of code.
			childCode = [...childCode, [...(await child.translateCtxAndChildren()), ";"]];
		}
		return childCode;
	};

	/**
	 * Translates a {@link IterationStatement} into the typescript language.
	 */
	iterationStatement = async (node: IterationStatement): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link JumpStatement} into the typescript language.
	 */
	jumpStatement = async (node: JumpStatement): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link ParameterDeclaration} into the typescript language.
	 */
	parameterDeclaration = async (node: ParameterDeclaration): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link FunctionDeclaration} into the typescript language.
	 */
	functionDeclaration = async (node: FunctionDeclaration): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link VariableDeclaration} into the typescript language.
	 */
	variableDeclaration = async (node: VariableDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();

		const storage = semanticData.storageType === "const" ? "const" : "let";
		const tsType = getTypeScriptType(semanticData.valueType);
		const assign = semanticData.value ? await semanticData.value.translateCtxAndChildren() : [];

		// Only add ' = EXP' if assignValue is defined
		return [
			[
				storage,
				" ",
				semanticData.identifier,
				":",
				" ",
				tsType,
				...(assign.length > 0 ? [" ", "=", " ", ...assign] : []),
				";",
			],
		];
	};

	/**
	 * Translates a {@link NumberPrimaryExpression} into the typescript language.
	 */
	numberPrimaryExpression = async (node: NumberPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();

		return [
			semanticData.value, // Simply get the constant value
		];
	};

	/**
	 * Translates a {@link CharacterPrimaryExpression} into the typescript language.
	 */
	characterPrimaryExpression = async (node: CharacterPrimaryExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link ListPrimaryExpression} into the typescript language.
	 */
	listPrimaryExpression = async (node: ListPrimaryExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link IdentifierPrimaryExpression} into the typescript language.
	 */
	identifierPrimaryExpression = async (node: IdentifierPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();

		// Get the identifier of the reference
		let identifier = semanticData.identifier;

		// If the identifier is not found in the global scope, assume it's a built-in function and format the identifier
		// accordingly.
		if (!node.programCtx.globalScope.getDeclaration(identifier)) {
			identifier = getTypeScriptBuiltInIdentifier(identifier);
		}

		return [identifier];
	};

	/**
	 * Translates a {@link SingleTypeSpecifierExpression} into the typescript language.
	 */
	singleTypeSpecifierExpression = async (node: SingleTypeSpecifierExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link GenericTypeSpecifierExpression} into the typescript language.
	 */
	genericTypeSpecifierExpression = async (node: GenericTypeSpecifierExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link TypeofTypeSpecifierExpression} into the typescript language.
	 */
	typeofTypeSpecifierExpression = async (node: TypeofTypeSpecifierExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link StringPrimaryExpression} into the typescript language.
	 */
	stringPrimaryExpression = async (node: StringPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();

		return [`"${semanticData.value}"`];
	};

	/**
	 * Translates a {@link FStringPrimaryExpression} into the typescript language.
	 */
	fStringPrimaryExpression = async (node: FStringPrimaryExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link BoolPrimaryExpression} into the typescript language.
	 */
	boolPrimaryExpression = async (node: BoolPrimaryExpression): Promise<TranslatedExpression> => {
		return [node.getSemanticData().value];
	};

	/**
	 * Translates a {@link TangledPrimaryExpression} into the typescript language.
	 */
	tangledPrimaryExpression = async (node: TangledPrimaryExpression): Promise<TranslatedExpression> => {
		// Tangled expressions always contain only a single child (Enforced by Parser)
		return ["(", ...(await node.children[0].translateCtxAndChildren()), ")"];
	};

	/**
	 * Translates a {@link ArraySpecifierExpression} into the typescript language.
	 */
	arraySpecifierExpression = async (node: ArraySpecifierExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link IncrementOrDecrementExpression} into the typescript language.
	 */
	incrementOrDecrementExpression = async (node: IncrementOrDecrementExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link FunctionCallPostfixExpression} into the typescript language.
	 */
	functionCallPostfixExpression = async (node: FunctionCallPostfixExpression): Promise<TranslatedExpression> => {
		// Get the function and semantic data
		const semanticData = node.getSemanticData();
		const func = node.programCtx.semanticCheck(node).getExistingFunction(semanticData.identifier);

		// Get the proper identifier for the function
		const identifier =
			func instanceof ScopeFunctionDeclaration ? func.identifier : getTypeScriptBuiltInIdentifier(func.identifier);

		// Generate the arguments
		let args: TranslatedExpression = [];
		for (const i of semanticData.args) {
			// Generating the code for each expression and adding a whitespace for primitive formatting
			args = [...args, ...(await i.translateCtxAndChildren()), " "];
		}
		args = args.slice(0, args.length - 1); // Removing last whitespace before ')'

		// Return the compiled function call
		return [identifier, "(", ...args, ")"];
	};

	/**
	 * Translates a {@link IncrementOrDecrementUnaryExpression} into the typescript language.
	 */
	incrementOrDecrementUnaryExpression = async (
		node: IncrementOrDecrementUnaryExpression,
	): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link OperatorModifiedUnaryExpression} into the typescript language.
	 */
	operatorModifiedUnaryExpression = async (node: OperatorModifiedUnaryExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link CastOrConvertExpression} into the typescript language.
	 */
	castOrConvertExpression = async (node: CastOrConvertExpression): Promise<TranslatedExpression> => {
		// Get the semantic data
		const semanticData = node.getSemanticData();

		const exp: TranslatedExpression = await semanticData.exp.translateCtxAndChildren();
		const originalType: KipperType = semanticData.exp.getSemanticData().evaluatedType;
		const destType: KipperType = semanticData.type;

		if (originalType === destType) {
			// If both types are the same we will only return the translated expression to avoid useless conversions.
			return exp;
		} else {
			const func: string = getTypeScriptBuiltInIdentifier(getConversionFunctionIdentifier(originalType, destType));
			return [func, "(", ...exp, ")"];
		}
	};

	/**
	 * Translates a {@link MultiplicativeExpression} into the typescript language.
	 */
	multiplicativeExpression = async (node: MultiplicativeExpression): Promise<TranslatedExpression> => {
		// Get the semantic data
		const semanticData = node.getSemanticData();

		const exp1: TranslatedExpression = await semanticData.exp1.translateCtxAndChildren();
		const exp2: TranslatedExpression = await semanticData.exp2.translateCtxAndChildren();
		return [...exp1, " ", semanticData.operator, " ", ...exp2];
	};

	/**
	 * Translates a {@link AdditiveExpression} into the typescript language.
	 */
	additiveExpression = async (node: AdditiveExpression): Promise<TranslatedExpression> => {
		// Get the semantic data
		const semanticData = node.getSemanticData();

		const exp1: TranslatedExpression = await semanticData.exp1.translateCtxAndChildren();
		const exp2: TranslatedExpression = await semanticData.exp2.translateCtxAndChildren();
		return [...exp1, " ", semanticData.operator, " ", ...exp2];
	};

	/**
	 * Translates a {@link RelationalExpression} into the typescript language.
	 */
	relationalExpression = async (node: RelationalExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link EqualityExpression} into the typescript language.
	 */
	equalityExpression = async (node: EqualityExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link LogicalAndExpression} into the typescript language.
	 */
	logicalAndExpression = async (node: LogicalAndExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link LogicalOrExpression} into the typescript language.
	 */
	logicalOrExpression = async (node: LogicalOrExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link ConditionalExpression} into the typescript language.
	 */
	conditionalExpression = async (node: ConditionalExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link AssignmentExpression} into the typescript language.
	 */
	assignmentExpression = async (node: AssignmentExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();

		// Get the identifier of the reference
		let identifier = semanticData.identifier.getSemanticData().identifier;

		// If the identifier is not found in the global scope, assume it's a built-in function and format the identifier
		// accordingly.
		if (!node.programCtx.globalScope.getDeclaration(identifier)) {
			identifier = getTypeScriptBuiltInIdentifier(identifier);
		}

		// The expression that is assigned to the reference
		const assignExp = await semanticData.value.translateCtxAndChildren();

		// Only add ' = EXP' if assignExpression is defined
		return [identifier, " ", "=", " ", ...assignExp];
	};
}
