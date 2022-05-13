/**
 * Standalone implementation, which makes the kipper module available globally using browserify.
 *
 * This file depends on the DOM!
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 */
// Including the core kipper module
import * as kipper from "../src";

// Try to determine the global scope
// @ts-ignore
// eslint-disable-next-line no-undef
const globalScope =
	typeof globalThis !== "undefined"
		? // eslint-disable-next-line no-undef
		  globalThis
		: // @ts-ignore
		typeof window !== "undefined"
		? // @ts-ignore
		  window
		: typeof global !== "undefined"
		? global
		: // @ts-ignore
		typeof self !== "undefined"
		? // @ts-ignore
		  self
		: {};

// @ts-ignore
(<any>globalScope.Kipper) = (<any>globalScope).Kipper || kipper;

// Validating integrity of the module
(() => {
	let calledProperly: boolean = false;
	const emitHandler = () => (calledProperly = true);
	const logger: kipper.KipperLogger = new kipper.KipperLogger(emitHandler);
	const compiler: kipper.KipperCompiler = new kipper.KipperCompiler(logger);

	// Testing basic integrity
	compiler.logger.info("Test message");
	if (!calledProperly) {
		throw new Error("Failed integrity check for Kipper!");
	}
})();
