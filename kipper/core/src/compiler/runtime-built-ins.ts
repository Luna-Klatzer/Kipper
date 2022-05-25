/**
 * Built-Ins file, which provides the blueprints for the Kipper built-in functions and variables.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */

import { KipperType } from "./semantics";

/**
 * Interface representation of an argument of a {@link BuiltInFunction}.
 * @since 0.1.0
 */
export interface BuiltInFunctionArgument {
	/**
	 * The identifier of the argument inside the function
	 *
	 * This value does not affect the behaviour of the language, as named-arguments are not implemented in Kipper. This
	 * only serves the purpose of readability and allowing easier differentiation.
	 * @since 0.6.0
	 */
	identifier: string;
	/**
	 * The type of the argument inside the function
	 *
	 * @example
	 *  def func(x: num, y: str) -> void {}
	 *
	 *  // x is of type 'num'
	 *  // y is of type 'str'
	 */
	type: KipperType;
}

/**
 * Interface representation of a {@link BuiltInFunction}, which is available inside a Kipper program using the specified
 * metadata.
 * @since 0.1.0
 */
export interface BuiltInFunction {
	/**
	 * The identifier of the global function that should be available inside the program.
	 *
	 * The identifier may only contain default numbers and alphabet characters!
	 * @example
	 *  call print(); // 'print' is the global function identifier
	 */
	identifier: string;
	/**
	 * The args that are accepted inside this function. These are represented using {@link BuiltInFunctionArgument}.
	 *
	 * The index in the array also represent the argument position inside the function. Meaning the first item in the
	 * array maps to the first argument inside the function.
	 */
	args: Array<BuiltInFunctionArgument>;
	/**
	 * The expected return of the function. If the return type is {@link KipperVoidType void}, then the function will not
	 * return anything.
	 */
	returnType: KipperType;
}

/**
 * Contains all the built-in functions in Kipper that are available per default in every program.
 *
 * This contains *every* builtin that also must be implemented by every target in the {@link }
 * @since 0.7.0
 */
export const kipperRuntimeBuiltIns: Record<string, BuiltInFunction> = {
	print: {
		identifier: "print",
		args: [
			{
				identifier: "msg",
				type: "str",
			},
		],
		returnType: "void",
	},
};