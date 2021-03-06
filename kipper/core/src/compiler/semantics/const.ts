/**
 * Constant values for Kipper.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.3.0
 */
import type { ScopeFunctionDeclaration, ScopeVariableDeclaration } from "../scope-declaration";
import type { BuiltInFunction } from "../runtime-built-ins";

/**
 * If this variable is true, then this environment is assumed to be inside a browser and special browser support should
 * be applied.
 * @since 0.6.0
 */
// @ts-ignore
// eslint-disable-next-line no-undef
export const isBrowser = typeof window !== "undefined" && {}.toString.call(window) === "[object Window]";

/**
 * Function type in Kipper.
 * @since 0.6.0
 */
export type KipperFuncType = "func";

/**
 * Function type in Kipper.
 * @since 0.6.0
 */
export const kipperFuncType: KipperFuncType = "func";

/**
 * Void type in Kipper.
 * @since 0.5.0
 * @example
 * void
 */
export type KipperVoidType = "void";

/**
 * Void type in Kipper.
 * @since 0.5.0
 * @example
 * void
 */
export const kipperVoidType: KipperVoidType = "void";

/**
 * Numeric type in Kipper.
 * @since 0.5.0
 * @example
 * num
 */
export type KipperNumType = "num";

/**
 * Numeric type in Kipper.
 * @since 0.5.0
 * @example
 * num
 */
export const kipperNumType: KipperNumType = "num";

/**
 * String type in Kipper.
 * @since 0.5.0
 * @example
 * str
 */
export type KipperStrType = "str";

/**
 * String type in Kipper.
 * @since 0.5.0
 * @example
 * str
 */
export const kipperStrType: KipperStrType = "str";

/**
 * Char type in Kipper.
 * @since 0.5.0
 * @example
 * char
 */
export type KipperCharType = "char";

/**
 * Char type in Kipper.
 * @since 0.5.0
 * @example
 * char
 */
export const kipperCharType: KipperCharType = "char";

/**
 * Boolean type in Kipper.
 * @since 0.5.0
 * @example
 * bool
 */
export type KipperBoolType = "bool";

/**
 * Literal names for a Kipper boolean.
 * @since 0.8.0
 * @example
 * var x: bool = true;
 */
export type KipperBoolTypeLiterals = "true" | "false";

/**
 * Boolean type in Kipper.
 * @since 0.5.0
 * @example
 * bool
 */
export const kipperBoolType: KipperBoolType = "bool";

/**
 * List type in Kipper. {@link KipperType ValueType} represents the type of the list content and only serves as a
 * type checking generic type, it will not change the type itself.
 * @since 0.5.0
 * @example
 * list<T>
 */
// eslint-disable-next-line no-unused-vars
export type KipperListType<ValueType extends KipperType> = "list";

/**
 * List type in Kipper. {@link KipperType ValueType} represents the type of the list content and only serves as a
 * type checking generic type, it will not change the type itself.
 * @since 0.5.0
 * @example
 * list<T>
 */
export const kipperListType: KipperListType<any> = "list";

/**
 * Represents the meta type in Kipper, which itself is used represents a type e.g. this is the type of a
 * type.
 * @since 0.8.0
 */
export type KipperMetaType = "type";

/**
 * Represents the meta type in Kipper, which itself is used represents a type e.g. this is the type of a
 * type.
 * @since 0.8.0
 */
export const kipperMetaType: KipperMetaType = "type";

/**
 * String-like types that include both char and string.
 * @since 0.6.0
 */
export type KipperStrLikeTypes = KipperStrType | KipperCharType;

/**
 * String-like types that include both char and string.
 * @since 0.6.0
 */
export const kipperStrLikeTypes: Array<KipperStrLikeTypes> = [kipperStrType, kipperCharType];

/**
 * All primitive types inside Kipper.
 * @since 0.6.0
 */
export type KipperPrimitiveType = KipperVoidType | KipperNumType | KipperStrType | KipperCharType | KipperBoolType;

/**
 * All primitive types inside Kipper.
 * @since 0.6.0
 */
export const kipperPrimitiveTypes = [kipperVoidType, kipperNumType, kipperStrType, kipperCharType, kipperBoolType];

/**
 * All available variable types inside Kipper.
 */
export type KipperType = KipperMetaType | KipperFuncType | KipperPrimitiveType | KipperListType<any>;

/**
 * All available variable types inside Kipper.
 */
export const kipperTypes: Array<string> = [kipperMetaType, kipperFuncType, ...kipperPrimitiveTypes, kipperListType];

/**
 * Types that may be returned by a function.
 * @since 0.6.0
 */
export type KipperReturnType = KipperPrimitiveType | KipperListType<any>;

/**
 * Types that may be returned by a function.
 * @since 0.6.0
 */
export const kipperReturnTypes: Array<string> = [...kipperPrimitiveTypes, "list"];

/**
 * List of all supported variable type conversions that can be performed in a Kipper program.
 *
 * For each translation, there will have to be a corresponding {@link KipperTargetBuiltInGenerator generator function},
 * which generates for each conversion the translator function in the specific target.
 * @since 0.8.0
 */
export const kipperSupportedConversions: Array<[KipperType, KipperType]> = [
	["num", "str"],
	["str", "num"],
	["bool", "str"],
	["bool", "num"],
];

/**
 * All available storage types inside Kipper, which define how a variable is stored/can be accessed.
 */
export type KipperStorageType = "var" | "const";

/**
 * All available storage types inside Kipper, which define how a variable is stored/can be accessed.
 * @since 0.6.0
 */
export const kipperStorageTypes: Array<KipperStorageType> = ["var", "const"];

/**
 * The logical-and operator, which can be used to combine multiple conditions and return true if all conditions are true.
 * @example
 * EXP && EXP;
 * @since 0.9.0
 */
export type KipperLogicalAndOperator = "&&";

/**
 * The logical-and operator, which can be used to combine multiple conditions and return true if all conditions are true.
 * @example
 * EXP && EXP;
 * @since 0.9.0
 */
export const kipperLogicalAndOperator: KipperLogicalAndOperator = "&&";

/**
 * The logical-or operator, which can be used to combine multiple conditions and return true if at least one condition
 * is true.
 * @example
 * EXP || EXP;
 * @since 0.9.0
 */
export type KipperLogicalOrOperator = "||";

/**
 * The logical-or operator, which can be used to combine multiple conditions and return true if at least one condition
 * is true.
 * @example
 * EXP || EXP;
 * @since 0.9.0
 */
export const kipperLogicalOrOperator: KipperLogicalOrOperator = "||";

/**
 * All available logical operators inside Kipper, which can be used to compare or combine two expressions.
 * @since 0.9.0
 */
export type KipperLogicalOperator = KipperLogicalAndOperator | KipperLogicalOrOperator;

/**
 * All available logical operators inside Kipper, which can be used to compare two expressions against each other.
 * @since 0.9.0
 */
export const kipperLogicalOperator: Array<KipperLogicalOperator> = ["&&", "||"];

/**
 * All available equality operators inside Kipper, which can be used to compare two expressions against each other.
 * @since 0.9.0
 */
export type KipperEqualityOperator = "==" | "!=";

/**
 * All available equality operators inside Kipper, which can be used to compare two expressions against each other.
 * @since 0.9.0
 */
export const kipperEqualityOperators: Array<KipperEqualityOperator> = ["==", "!="];

/**
 * All available relational operators inside Kipper, which can be used to compare two expressions against each other.
 * @since 0.9.0
 */
export type KipperRelationalOperator = "<" | ">" | "<=" | ">=";

/**
 * All available relational operators inside Kipper, which can be used to compare two expressions against each other.
 * @since 0.9.0
 */
export const kipperRelationalOperators: Array<KipperRelationalOperator> = ["<", ">", "<=", ">="];

/**
 * All available comparative operators inside Kipper, which can be used to compare two expressions against each other.
 * @since 0.9.0
 */
export type KipperComparativeOperator = KipperEqualityOperator | KipperRelationalOperator;

/**
 * All available comparative operators inside Kipper, which can be used to compare two expressions against each other.
 * @since 0.9.0
 */
export const kipperComparativeOperators: Array<KipperComparativeOperator> = [
	...kipperEqualityOperators,
	...kipperRelationalOperators,
];

/**
 * The plus operator.
 * @since 0.6.0
 */
export type KipperPlusOperator = "+";

/**
 * The plus operator.
 * @since 0.6.0
 */
export const kipperPlusOperator: KipperPlusOperator = "+";

/**
 * The minus operator.
 * @since 0.6.0
 */
export type KipperMinusOperator = "-";

/**
 * The minus operator.
 * @since 0.6.0
 */
export const kipperMinusOperator: KipperMinusOperator = "-";

/**
 * All available additive operations inside Kipper.
 * @since 0.6.0
 */
export type KipperAdditiveOperator = KipperMinusOperator | KipperPlusOperator;

/**
 * All available sign operators inside Kipper, which can be used to modify the value of a numeric expression.
 * @since 0.9.0
 */
export type KipperSignOperator = "+" | "-";

/**
 * All available sign operators inside Kipper, which can be used to modify the value of a numeric expression.
 * @since 0.9.0
 */
export const kipperSignOperators: Array<KipperSignOperator> = [kipperPlusOperator, kipperMinusOperator];

/**
 * Negate operator, which can be used to negate a boolean expression. It evaluates to the opposite boolean
 * representation of the original expression.
 * @example
 * !true; // false
 * !false; // true
 * !1; // false
 * !0; // true
 * @since 0.9.0
 */
export type KipperNegateOperator = "!";

/**
 * Negate operator, which can be used to negate a boolean expression. It evaluates to the opposite boolean
 * representation of the original expression.
 * @example
 * !true; // false
 * !false; // true
 * !1; // false
 * !0; // true
 * @since 0.9.0
 */
export const kipperNegateOperator: KipperNegateOperator = "!";

/**
 * All available increment and decrement operators, which can be used to modify the value of an expression.
 * @since 0.9.0
 */
export type KipperIncrementOrDecrementOperator = "++" | "--";

/**
 * Increment and decrement operators, which can be used to modify the value of an expression.
 * @since 0.9.0
 */
export const kipperIncrementOrDecrementOperators: Array<KipperIncrementOrDecrementOperator> = ["++", "--"];

/**
 * Modifier Unary operators, which can be used to modify the value of an expression.
 *
 * This type specifically exists for the {@link OperatorModifiedUnaryExpression}.
 * @since 0.9.0
 */
export type KipperUnaryModifierOperator = KipperNegateOperator | KipperSignOperator;

/**
 * Modifier Unary operators, which are used to modify the value of an expression.
 *
 * This type specifically exists for the {@link OperatorModifiedUnaryExpression}.
 * @since 0.9.0
 */
export const kipperUnaryModifierOperators: Array<KipperUnaryModifierOperator> = [
	kipperNegateOperator,
	...kipperSignOperators,
];

/**
 * All available unary operators in Kipper, which can be used to modify the value of an expression.
 * @since 0.9.0
 */
export type KipperUnaryOperator = KipperUnaryModifierOperator | KipperIncrementOrDecrementOperator;

/**
 * All available unary operators in Kipper, which can be used to modify the value of an expression.
 * @since 0.9.0
 */
export const kipperUnaryOperators: Array<KipperUnaryOperator> = [
	...kipperUnaryModifierOperators,
	...kipperIncrementOrDecrementOperators,
];

/**
 * All available multiplicative operators inside Kipper.
 * @since 0.6.0
 */
export type KipperMultiplicativeOperator = "*" | "**" | "/" | "%";

/**
 * All available multiplicative operators inside Kipper.
 * @since 0.6.0
 */
export const kipperMultiplicativeOperators = ["*", "**", "/", "%"];

/**
 * All available additive operations inside Kipper.
 * @since 0.6.0
 */
export const kipperAdditiveOperators = [kipperMinusOperator, kipperPlusOperator];

/**
 * All available arithmetic operations inside Kipper.
 * @since 0.3.0
 */
export type KipperArithmeticOperator = KipperAdditiveOperator | KipperMultiplicativeOperator;

/**
 * All available arithmetic operations inside Kipper.
 * @since 0.6.0
 */
export const kipperArithmeticOperators = [...kipperMultiplicativeOperators, ...kipperAdditiveOperators];

/**
 * All available arithmetic assignment operations inside Kipper.
 * @since 0.3.0
 */
export type KipperArithmeticAssignOperator = "+=" | "-=" | "*=" | "/=";

/**
 * All available arithmetic assignment operations inside Kipper.
 * @since 0.6.0
 */
export const kipperArithmeticAssignOperators = ["+=", "-=", "*=", "/="];

/**
 * Represents a single token of translated Kipper code. This is usually used without a {@link TranslatedCodeLine}, which
 * represents a whole translated line of code.
 * @since 0.5.0
 */
export type TranslatedCodeToken = string;

/**
 * Represents a single translated Kipper expression. This is usually used to represent multiple expression inside a
 * single {@link TranslatedCodeLine}.
 */
export type TranslatedExpression = Array<TranslatedCodeToken>;

/**
 * Represents a single line of translated Kipper code.
 * @since 0.5.0
 */
export type TranslatedCodeLine = Array<TranslatedCodeToken>;

/**
 * Represents a Kipper function that can be either declared or defined.
 * @since 0.6.0
 */
export type KipperFunction = BuiltInFunction | ScopeFunctionDeclaration;

/**
 * Represents a Kipper variable that can be either declared or defined.
 */
export type KipperVariable = ScopeVariableDeclaration;

/**
 * Represents a reference that can be used as an identifier.
 * @since 0.6.0
 */
export type KipperRef = KipperFunction | KipperVariable;
