/**
 * A scope in a Kipper program, which contains {@link ScopeVariableDeclaration variables} and
 * {@link ScopeFunctionDeclaration functions}.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import { ScopeVariableDeclaration, ScopeFunctionDeclaration } from "./scope-declaration";
import type { FunctionDeclaration, VariableDeclaration } from "./semantics";

/**
 * A scope in a Kipper program, which can contain {@link ScopeVariableDeclaration variables} and
 * {@link ScopeFunctionDeclaration functions}.
 * @since 0.8.0
 */
export abstract class Scope {
	private readonly _localFunctions: Array<ScopeFunctionDeclaration>;
	private readonly _localVariables: Array<ScopeVariableDeclaration>;

	public constructor() {
		this._localFunctions = [];
		this._localVariables = [];
	}

	/**
	 * All local functions in this scope.
	 *
	 * This will be always empty for {@link CompoundStatement compound statement scopes}, as local functions are not
	 * implemented in the Kipper Parser yet.
	 * @since 0.8.0
	 */
	public get localFunctions(): Array<ScopeFunctionDeclaration> {
		return this._localFunctions;
	}

	/**
	 * All local variables in this scope.
	 * @since 0.8.0
	 */
	public get localVariables(): Array<ScopeVariableDeclaration> {
		return this._localVariables;
	}

	/**
	 * Searches for a function or variable with the specific identifier from the {@link localVariables} and
	 * {@link localFunctions}.
	 *
	 * If the identifier is unknown, this function will return undefined.
	 * @param identifier The identifier to search for.
	 * @since 0.8.0
	 */
	public getDeclaration(identifier: string): ScopeFunctionDeclaration | ScopeVariableDeclaration | undefined {
		return this.getFunction(identifier) ?? this.getVariable(identifier);
	}

	/**
	 * Adds a new variable declaration to the {@link localVariables}.
	 * @param declaration The declaration to add.
	 * @returns The generated {@link ScopeVariableDeclaration scope declaration}.
	 * @since 0.8.0
	 */
	public abstract addVariable(declaration: VariableDeclaration): ScopeVariableDeclaration;

	/**
	 * Searches for a variable with the specific {@link identifier} from the {@link localVariables}.
	 *
	 * If the identifier is unknown, this function will return undefined.
	 * @param identifier The identifier to search for.
	 * @since 0.8.0
	 */
	public abstract getVariable(identifier: string): ScopeVariableDeclaration | undefined;

	/**
	 * Adds a new function declaration to the {@link localFunctions}.
	 * @param declaration The declaration to add.
	 * @returns The generated {@link ScopeFunctionDeclaration scope declaration}.
	 * @since 0.8.0
	 */
	public abstract addFunction(declaration: FunctionDeclaration): ScopeFunctionDeclaration;

	/**
	 * Searches for a function with the specific {@link identifier} from the {@link localFunctions}.
	 *
	 * If the identifier is unknown, this function will return undefined.
	 * @param identifier The identifier to search for.
	 * @since 0.8.0
	 */
	public abstract getFunction(identifier: string): ScopeFunctionDeclaration | undefined;
}