/**
 * Antlr4 Error listener handling Antlr4 errors and reporting them.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.2
 */
import { ANTLRErrorListener } from "antlr4ts/ANTLRErrorListener";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { Recognizer } from "antlr4ts/Recognizer";
import { KipperLogger, LogLevel } from "../logger";
import { KipperSyntaxError } from "../errors";
import { KipperParseStream } from "./parse-stream";
import { Interval } from "antlr4ts/misc/Interval";
import { CommonToken } from "antlr4ts";

/**
 * The Error Handler for the Kipper implementation of {@link ANTLRErrorListener}
 */
export class KipperAntlrErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol> {
	public readonly logger: KipperLogger;

	public readonly parseStream: KipperParseStream;

	constructor(logger: KipperLogger, parseStream: KipperParseStream) {
		this.logger = logger;
		this.parseStream = parseStream;
	}

	/**
	 * Fetches the source code for the specific {@link CommonToken symbol}.
	 *
	 * This function returns {@link undefined} if {@link CommonToken.inputStream} is {@link undefined}.
	 * @param symbol The token/symbol to check for.
	 * @protected
	 * @since 0.4.0
	 */
	protected getSourceCode(symbol: CommonToken): string | undefined {
		const col: number = symbol.charPositionInLine;

		// Determine start and stop
		let start: number = (() => {
			// Try to get as much of the original line as possible
			// First try to get the line by doing:
			//   symbol.stopIndex - charPositionInLine
			let calcStart = symbol.stopIndex - col;

			// Avoid negative values
			let start = calcStart < 0 ? 0 : calcStart;
			if (symbol.startIndex < start) start = symbol.startIndex;
			return start;
		})();
		let stop = symbol.stopIndex;

		// Get the source line
		return symbol.inputStream?.getText(new Interval(start, stop)).trim();
	}

	/**
	 * Gets a line of code from the original {@link this.parseStream}.
	 * @param line The line of code to fetch.
	 * @protected
	 * @since 0.4.0
	 */
	protected getLineOfCode(line: number): string {
		const cleanLineEndings = (str: string) => {
			return str.replace("\r\n", "\n").replace("\r", "\n");
		};

		// Get the line ending by splitting using a common line ending
		return cleanLineEndings(this.parseStream.stringContent).split("\n")[line - 1];
	}

	/**
	 * Default handler for Antlr4 syntax errors.
	 * @param recognizer The recognizer which usually represents a {@link KipperParser}.
	 * @param offendingSymbol The symbol/token that caused the error. In most cases, this is of type {@link CommonToken}.
	 * @param line The line where the syntax error occurred.
	 * @param charPositionInLine The column where the syntax error occurred.
	 * @param msg The message generated by Antlr4.
	 * @param e The exception that was initialised. This may be {@link undefined}.
	 */
	syntaxError<T extends TSymbol>(
		recognizer: Recognizer<T, any>,
		offendingSymbol: T | undefined,
		line: number,
		charPositionInLine: number,
		msg: string,
		e: RecognitionException | undefined,
	) {
		// Capitalising the error message
		msg = msg.charAt(0).toUpperCase() + msg.slice(1);

		/**
		 * The source code. This may be undefined, if fetching the source code failed or the symbol is not of a known type.
		 */
		let src: string | undefined =
			offendingSymbol instanceof CommonToken ? this.getSourceCode(offendingSymbol) : undefined;

		// Create new error and add traceback metadata
		const err = new KipperSyntaxError<T>(recognizer, offendingSymbol, line, charPositionInLine, msg, e);
		err.setMetadata({
			location: { line: line, col: charPositionInLine },
			filePath: this.parseStream.filePath,
			tokenSrc: src,
		});

		// Log the error
		this.logger.reportError(LogLevel.ERROR, err);

		// Throw the error
		throw err;
	}
}
