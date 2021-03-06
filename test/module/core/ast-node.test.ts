import { assert } from "chai";
import { promises as fs } from "fs";
import { CompilableASTNode, KipperParseStream } from "@kipper/core";
import { KipperProgramContext } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { RootASTNode } from "@kipper/core";
import { TranslatedCodeLine } from "@kipper/core";
import { TargetASTNodeCodeGenerator } from "@kipper/core/";
import { TargetASTNodeSemanticAnalyser } from "@kipper/core";
import { compilableNodeParent } from "@kipper/core";
import { ParserRuleContext } from "antlr4ts";
import * as path from "path";

const fileLocation: string = path.resolve(`${__dirname}/../../kipper-files/main.kip`);

describe("Parse-Tokens", () => {
	describe("CompilableASTNode", () => {
		// Example class for testing purposes
		class ExampleNode extends CompilableASTNode<any> {
			constructor(antlrCtx: ParserRuleContext, parent: compilableNodeParent) {
				super(antlrCtx, parent);
			}

			primarySemanticAnalysis(): Promise<void> {
				return Promise.resolve(undefined);
			}

			targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<ExampleNode> = () => {
				return Promise.resolve(undefined);
			};

			targetCodeGenerator: TargetASTNodeCodeGenerator<ExampleNode, TranslatedCodeLine> = async () => {
				return <TranslatedCodeLine>[];
			};

			semanticTypeChecking(): Promise<void> {
				return Promise.resolve(undefined);
			}

			checkForWarnings(): Promise<void> {
				return Promise.resolve(undefined);
			}
		}

		describe("sourceCode", () => {
			it("Validating integrity of content", async () => {
				let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
				let stream: KipperParseStream = new KipperParseStream(fileContent);
				let programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

				assert(stream.name === "anonymous-script");
				assert(stream.stringContent === fileContent);
				assert(stream.charStream.sourceName === "anonymous-script");
				assert(stream.charStream.toString() === fileContent);

				let parenToken = new RootASTNode(programCtx, programCtx.antlrParseTree);
				let node = new ExampleNode(programCtx.antlrParseTree, parenToken);
				assert(node.sourceCode === fileContent.trim(), "Source code and fileContent must match!");
				assert(node.programCtx === programCtx, "Expected 'programCtx' to match");
				assert(node.parent === parenToken, "Expected 'parent' to match");
				assert(node.parent.programCtx === programCtx, "Expected 'parent' to match");
			});
		});
	});
});
