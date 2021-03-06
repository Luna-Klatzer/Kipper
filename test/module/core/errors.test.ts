import { KipperCompiler, KipperError, KipperParseStream, KipperProgramContext, KipperSyntaxError } from "@kipper/core";
import { assert } from "chai";

describe("Kipper errors", () => {
	describe("KipperSyntaxError", () => {
		it("LexerError", async () => {
			try {
				await new KipperCompiler().compile("var x: num = 4; \nvar x: num = 5; \\\\D");
			} catch (e) {
				assert((<KipperSyntaxError<any>>e).constructor.name === "KipperSyntaxError", "Expected proper error");
				assert((<KipperSyntaxError<any>>e).line != undefined, "Expected existing 'line' meta field");
				assert((<KipperSyntaxError<any>>e).col != undefined, "Expected existing 'col' meta field");
				assert((<KipperSyntaxError<any>>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
				assert((<KipperSyntaxError<any>>e).filePath != undefined, "Expected existing 'filePath' meta field");
				return;
			}
			assert(false, "Expected 'KipperSyntaxError'");
		});

		it("ParserError", async () => {
			try {
				await new KipperCompiler().compile("var x: num = 4; \nvar x: num = 5");
			} catch (e) {
				assert((<KipperSyntaxError<any>>e).constructor.name === "KipperSyntaxError", "Expected proper error");
				assert((<KipperSyntaxError<any>>e).line != undefined, "Expected existing 'line' meta field");
				assert((<KipperSyntaxError<any>>e).col != undefined, "Expected existing 'col' meta field");
				assert((<KipperSyntaxError<any>>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
				assert((<KipperSyntaxError<any>>e).filePath != undefined, "Expected existing 'filePath' meta field");
				return;
			}
			assert(false, "Expected 'KipperSyntaxError'");
		});
	});

	describe("Compilation errors", () => {
		it("GetTraceback", async () => {
			try {
				await new KipperCompiler().compile('var i: str = "4";\n var i: str = "4";');
			} catch (e) {
				assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError", "Expected proper error");
				assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
				assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
				assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
				assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
				return;
			}
			assert(false, "Expected 'IdentifierAlreadyUsedByVariableError'");
		});

		it("UnknownTypeError", async () => {
			try {
				await new KipperCompiler().compile("var invalid: UNKNOWN = 4;");
			} catch (e) {
				assert((<KipperError>e).constructor.name === "UnknownTypeError", "Expected proper error");
				assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
				assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
				assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
				assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
				return;
			}
			assert(false, "Expected 'UnknownTypeError'");
		});

		it("InvalidGlobalError", async () => {
			try {
				const programCtx: KipperProgramContext = await new KipperCompiler().parse(
					new KipperParseStream("var i: num = 4;"),
				);

				// Duplicate identifier
				programCtx.registerBuiltIns({ identifier: "i", args: [], returnType: "void" });
				programCtx.registerBuiltIns({ identifier: "i", args: [], returnType: "void" });
			} catch (e) {
				assert((<KipperError>e).constructor.name === "InvalidGlobalError", "Expected proper error");
				assert((<KipperError>e).line !== undefined, "Expected existing 'line' meta field");
				assert((<KipperError>e).col !== undefined, "Expected existing 'col' meta field");

				// Token src should not exist, since this is a configuration error!
				assert((<KipperError>e).tokenSrc === undefined, "Expected non-existing 'tokenSrc' meta field");
				assert((<KipperError>e).filePath !== undefined, "Expected existing 'filePath' meta field");
				return;
			}
			assert(false, "Expected 'InvalidGlobalError'");
		});

		it("BuiltInOverwriteError", async () => {
			try {
				const programCtx: KipperProgramContext = await new KipperCompiler().parse(
					new KipperParseStream("var i: num = 4;"),
				);

				// Register new global
				programCtx.registerBuiltIns({ identifier: "i", args: [], returnType: "void" });
				await programCtx.compileProgram();
			} catch (e) {
				assert((<KipperError>e).constructor.name === "BuiltInOverwriteError", "Expected proper error");
				assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
				assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
				assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
				assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
				return;
			}
			assert(false, "Expected 'BuiltInOverwriteError'");
		});

		it("IdentifierAlreadyUsedByFunctionError", async () => {
			try {
				await new KipperCompiler().compile(new KipperParseStream("def x() -> void; var x: num = 4;"));
			} catch (e) {
				assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByFunctionError", "Expected proper error");
				assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
				assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
				assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
				assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
				return;
			}
			assert(false, "Expected 'IdentifierAlreadyUsedByFunctionError'");
		});

		describe("IdentifierAlreadyUsedByVariableError", () => {
			it("Variable redeclaration", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("var x: num; \nvar x: num = 5;"));
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'IdentifierAlreadyUsedByVariableError'");
			});

			it("Variable redefinition", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("var x: num = 5; \nvar x: num = 5;"));
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'IdentifierAlreadyUsedByVariableError'");
			});

			it("Function redeclaration", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("var x: num; def x() -> void;"));
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'IdentifierAlreadyUsedByVariableError'");
			});
		});

		it("FunctionDefinitionAlreadyExistsError", async () => {
			try {
				await new KipperCompiler().compile(new KipperParseStream("def x() -> void {} def x() -> void {}"));
			} catch (e) {
				assert((<KipperError>e).constructor.name === "FunctionDefinitionAlreadyExistsError", "Expected proper error");
				assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
				assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
				assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
				assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
				return;
			}
			assert(false, "Expected 'FunctionDefinitionAlreadyExistsError'");
		});

		describe("UnknownIdentifierError", () => {
			it("Simple reference", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("x;"));
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UnknownIdentifierError", "Expected proper error");
					assert((<KipperError>e).name === "UnknownIdentifierError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'UnknownIdentifierError'");
			});

			it("Function Call", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream('var x: num = call pr("pr");'));
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UnknownIdentifierError", "Expected proper error");
					assert((<KipperError>e).name === "UnknownIdentifierError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'UnknownIdentifierError'");
			});

			it("Arithmetics", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("var x: num = y + y;"));
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UnknownIdentifierError", "Expected proper error");
					assert((<KipperError>e).name === "UnknownIdentifierError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'UnknownIdentifierError'");
			});

			it("Nested reference", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("{ { { { x; } } } }"));
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UnknownIdentifierError", "Expected proper error");
					assert((<KipperError>e).name === "UnknownIdentifierError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'UnknownIdentifierError'");
			});
		});

		describe("InvalidReturnTypeError", () => {
			describe("Error", () => {
				it("func", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> func {}"));
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidReturnTypeError", "Expected proper error");
						assert((<KipperError>e).name === "InvalidReturnTypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidReturnTypeError'");
				});
			});

			describe("NoError", () => {
				it("void", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> void {}"));
					} catch (e) {
						assert(false, "Expected no 'InvalidReturnTypeError'");
					}
				});

				it("num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> num {}"));
					} catch (e) {
						assert(false, "Expected no 'InvalidReturnTypeError'");
					}
				});

				it("str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> str {}"));
					} catch (e) {
						assert(false, "Expected no 'InvalidReturnTypeError'");
					}
				});

				it("char", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> char {}"));
					} catch (e) {
						assert(false, "Expected no 'InvalidReturnTypeError'");
					}
				});

				it("bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> bool {}"));
					} catch (e) {
						assert(false, "Expected no 'InvalidReturnTypeError'");
					}
				});

				it("list", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> list {}"));
					} catch (e) {
						assert(false, "Expected no 'InvalidReturnTypeError'");
					}
				});
			});
		});

		describe("InvalidAmountOfArgumentsError", () => {
			describe("Error", () => {
				it("One too many", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('call print("x", "x");'));
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
						assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidAmountOfArgumentsError'");
				});

				it("Two too many", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('call print("x", "x", "x");'));
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
						assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidAmountOfArgumentsError'");
				});

				it("Three too many", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('call print("x", "x", "x", "x");'));
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
						assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidAmountOfArgumentsError'");
				});

				it("Too little", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("call print();"));
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
						assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidAmountOfArgumentsError'");
				});
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream('call print("x");'));
				} catch (e) {
					assert(false, "Expected no 'InvalidAmountOfArgumentsError'");
				}
			});
		});

		describe("InvalidArithmeticOperationTypeError", () => {
			describe("Error", () => {
				it("str+num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" + 4;'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("str-num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" - 4;'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("str*num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" * 4;'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("str**num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" ** 4;'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("str/num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" / 4;'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("str%num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" % 4;'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("num+str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('4 + "3";'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("num-str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('4 - "3";'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("num*str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('4 * "3";'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("num**str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('4 ** "3";'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("num/str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('4 / "3";'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("num%str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('4 % "3";'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("str+bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" + true;'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("str-bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" - true;'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("str*bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" * true;'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("str**bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" ** true;'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("str/bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" / true;'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("str%bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"3" % true;'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("bool+str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('true + "3";'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("bool-str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('true - "3";'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("bool*str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('true * "3";'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("bool**str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('true ** "3";'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("bool/str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('true / "3";'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});

				it("bool%str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('true % "3";'));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "InvalidArithmeticOperationTypeError",
							"Expected proper error",
						);
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidArithmeticOperationTypeError'");
				});
			});

			describe("NoError", () => {
				describe("+", () => {
					it("str", async () => {
						try {
							await new KipperCompiler().compile('"3" + "3";');
						} catch (e) {
							assert(false, "Expected no 'InvalidArithmeticOperationTypeError'");
						}
					});

					it("num", async () => {
						try {
							await new KipperCompiler().compile("3 + 3;");
						} catch (e) {
							assert(false, "Expected no 'InvalidArithmeticOperationTypeError'");
						}
					});
				});
			});
		});

		describe("InvalidAssignmentError", () => {
			describe("Error", () => {
				it("NumberConstant", async () => {
					try {
						await new KipperCompiler().compile("5 = 5;");
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAssignmentError", "Expected proper error");
						assert((<KipperError>e).name === "InvalidAssignmentError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidAssignmentError'");
				});

				it("StringConstant", async () => {
					try {
						await new KipperCompiler().compile('"4" = "4";');
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidAssignmentError", "Expected proper error");
						assert((<KipperError>e).name === "InvalidAssignmentError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidAssignmentError'");
				});
			});

			describe("NoError", () => {
				it("identifier", async () => {
					try {
						await new KipperCompiler().compile("var x: num = 0; x = 3 + 3;");
					} catch (e) {
						assert(false, "Expected no 'InvalidAssignmentError'");
					}
				});
			});
		});

		describe("TypeError", () => {
			describe("Error", () => {
				describe("Definition", () => {
					it("num = str", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream('var x: num = "5";'));
						} catch (e) {
							assert((<KipperError>e).constructor.name === "TypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'TypeError'");
					});

					it("str = num", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream("var x: str = 5;"));
						} catch (e) {
							assert((<KipperError>e).constructor.name === "TypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'TypeError'");
					});
				});

				describe("Assignment", () => {
					it("num = str", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream('var x: num; x = "5";'));
						} catch (e) {
							assert((<KipperError>e).constructor.name === "InvalidAssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'TypeError'");
					});

					it("str = num", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream("var x: str; x = 5;"));
						} catch (e) {
							assert((<KipperError>e).constructor.name === "InvalidAssignmentTypeError", "Expected proper error");
							assert((<KipperError>e).name === "TypeError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'TypeError'");
					});
				});
			});

			describe("NoError", () => {
				it("str = str", async () => {
					try {
						await new KipperCompiler().compile('var x: str = "3";');
					} catch (e) {
						assert(false, "Expected no 'TypeError'");
					}
				});

				it("num = num", async () => {
					try {
						await new KipperCompiler().compile("var x: num = 3;");
					} catch (e) {
						assert(false, "Expected no 'TypeError'");
					}
				});
			});
		});

		describe("InvalidConversionTypeError", () => {
			describe("Error", () => {
				it("str as func", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream('"5" as func;'));
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidConversionTypeError'");
				});

				it("num as func", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("5 as func;"));
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidConversionTypeError'");
				});

				it("bool as func", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("true as func;"));
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidConversionTypeError'");
				});

				it("func as str", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("print as str;"));
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidConversionTypeError'");
				});

				it("func as num", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("print as bool;"));
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidConversionTypeError'");
				});

				it("func as bool", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("print as bool;"));
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidConversionTypeError", "Expected proper error");
						assert((<KipperError>e).name === "TypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidConversionTypeError'");
				});
			});

			describe("NoError", () => {
				it("num as str", async () => {
					try {
						await new KipperCompiler().compile("5 as str;");
					} catch (e) {
						assert(false, "Expected no 'InvalidConversionTypeError'");
					}
				});

				it("str as num", async () => {
					try {
						await new KipperCompiler().compile('"5" as num;');
					} catch (e) {
						assert(false, "Expected no 'InvalidConversionTypeError'");
					}
				});

				it("bool as str", async () => {
					try {
						await new KipperCompiler().compile("true as str;");
					} catch (e) {
						assert(false, "Expected no 'InvalidConversionTypeError'");
					}
				});

				it("bool as num", async () => {
					try {
						await new KipperCompiler().compile("true as num;");
					} catch (e) {
						assert(false, "Expected no 'InvalidConversionTypeError'");
					}
				});
			});
		});

		describe("ReservedIdentifierOverwriteError", () => {
			it("Error", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream("var instanceof: str; x = 5;"));
				} catch (e) {
					assert((<KipperError>e).constructor.name === "ReservedIdentifierOverwriteError", "Expected proper error");
					assert((<KipperError>e).name === "IdentifierError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'ReservedIdentifierOverwriteError'");
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile('var valid: str = "3";');
				} catch (e) {
					assert(false, "Expected no 'ReservedIdentifierOverwriteError'");
				}
			});
		});

		describe("ReadOnlyAssignmentTypeError", () => {
			it("Error", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream(`const invalid: str = "3"; invalid = "5";`));
				} catch (e) {
					assert((<KipperError>e).constructor.name === "ReadOnlyAssignmentTypeError", "Expected proper error");
					assert((<KipperError>e).name === "TypeError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'ReadOnlyAssignmentTypeError'");
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile('var valid: str = "3"; valid = "5";');
				} catch (e) {
					assert(false, "Expected no 'ReadOnlyAssignmentTypeError'");
				}
			});
		});

		describe("UndefinedConstantError", () => {
			it("Error", async () => {
				try {
					await new KipperCompiler().compile(new KipperParseStream(`const invalid: str;`));
				} catch (e) {
					assert((<KipperError>e).constructor.name === "UndefinedConstantError", "Expected proper error");
					assert((<KipperError>e).name === "UndefinedConstantError", "Expected proper error");
					assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
					assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
					assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
					assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
					return;
				}
				assert(false, "Expected 'UndefinedConstantError'");
			});

			it("NoError", async () => {
				try {
					await new KipperCompiler().compile('const valid: str = "3";');
				} catch (e) {
					assert(false, "Expected no 'UndefinedConstantError'");
				}
			});
		});
	});
});
