/**
 * CLI related errors that base on {@link KipperError}
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */

import { KipperError } from "@kipper/base/lib";
import { ParserRuleContext } from "antlr4ts";

/**
 * A Kipper CLI error that extends from {@link KipperError} and represents any error that is unique to the CLI.
 * @since 0.1.0
 */
export abstract class KipperCLIError extends KipperError {
	protected constructor(msg: string, token?: ParserRuleContext) {
		super(msg, token);
	}
}

/**
 * Represents an error that is thrown when an unsupported encoding is used.
 * @since 0.1.0
 */
export class KipperUnsupportedEncodingError extends KipperCLIError {
	constructor(encoding: string) {
		super(`Unsupported encoding '${encoding}'.`);
	}
}

/**
 * Represents a file access error in the CLI.
 * @since 0.1.0
 */
export class KipperFileAccessError extends KipperCLIError {
	constructor(filePath: string) {
		super(`Failed to access file '${filePath}'. Make sure the file exists and it is readable.`);
	}
}

/**
 * Represents a file write error in the CLI.
 * @since 0.1.0
 */
export class KipperFileWriteError extends KipperCLIError {
	constructor(filePath: string) {
		super(`Failed to write file '${filePath}'.`);
	}
}