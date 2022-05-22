// Generated from ./Kipper.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

export class KipperLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly Const = 6;
	public static readonly Var = 7;
	public static readonly As = 8;
	public static readonly Switch = 9;
	public static readonly Case = 10;
	public static readonly Default = 11;
	public static readonly Break = 12;
	public static readonly Continue = 13;
	public static readonly Do = 14;
	public static readonly While = 15;
	public static readonly If = 16;
	public static readonly Else = 17;
	public static readonly For = 18;
	public static readonly Enum = 19;
	public static readonly DefFunc = 20;
	public static readonly Return = 21;
	public static readonly CallFunc = 22;
	public static readonly Struct = 23;
	public static readonly Typeof = 24;
	public static readonly LeftParen = 25;
	public static readonly RightParen = 26;
	public static readonly LeftBracket = 27;
	public static readonly RightBracket = 28;
	public static readonly LeftBrace = 29;
	public static readonly RightBrace = 30;
	public static readonly Plus = 31;
	public static readonly PlusPlus = 32;
	public static readonly Minus = 33;
	public static readonly MinusMinus = 34;
	public static readonly Star = 35;
	public static readonly Div = 36;
	public static readonly Mod = 37;
	public static readonly PowerTo = 38;
	public static readonly AndAnd = 39;
	public static readonly OrOr = 40;
	public static readonly Not = 41;
	public static readonly Comma = 42;
	public static readonly Assign = 43;
	public static readonly StarAssign = 44;
	public static readonly DivAssign = 45;
	public static readonly ModAssign = 46;
	public static readonly PlusAssign = 47;
	public static readonly MinusAssign = 48;
	public static readonly Equal = 49;
	public static readonly NotEqual = 50;
	public static readonly Less = 51;
	public static readonly LessEqual = 52;
	public static readonly Greater = 53;
	public static readonly GreaterEqual = 54;
	public static readonly Dot = 55;
	public static readonly Identifier = 56;
	public static readonly IntegerConstant = 57;
	public static readonly FloatingConstant = 58;
	public static readonly DigitSequence = 59;
	public static readonly CharacterConstant = 60;
	public static readonly FStringLiteral = 61;
	public static readonly StringLiteral = 62;
	public static readonly WS = 63;
	public static readonly Whitespace = 64;
	public static readonly BlockComment = 65;
	public static readonly Newline = 66;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = ["DEFAULT_MODE"];

	public static readonly ruleNames: string[] = [
		"T__0",
		"T__1",
		"T__2",
		"T__3",
		"T__4",
		"Const",
		"Var",
		"As",
		"Switch",
		"Case",
		"Default",
		"Break",
		"Continue",
		"Do",
		"While",
		"If",
		"Else",
		"For",
		"Enum",
		"DefFunc",
		"Return",
		"CallFunc",
		"Struct",
		"Typeof",
		"LeftParen",
		"RightParen",
		"LeftBracket",
		"RightBracket",
		"LeftBrace",
		"RightBrace",
		"Plus",
		"PlusPlus",
		"Minus",
		"MinusMinus",
		"Star",
		"Div",
		"Mod",
		"PowerTo",
		"AndAnd",
		"OrOr",
		"Not",
		"Comma",
		"Assign",
		"StarAssign",
		"DivAssign",
		"ModAssign",
		"PlusAssign",
		"MinusAssign",
		"Equal",
		"NotEqual",
		"Less",
		"LessEqual",
		"Greater",
		"GreaterEqual",
		"Dot",
		"Identifier",
		"ExtensionTaskBlock",
		"IdentifierNondigit",
		"Nondigit",
		"Digit",
		"UniversalCharacterName",
		"HexQuad",
		"IntegerConstant",
		"BinaryConstant",
		"DecimalConstant",
		"OctalConstant",
		"HexadecimalConstant",
		"HexadecimalPrefix",
		"NonzeroDigit",
		"OctalDigit",
		"HexadecimalDigit",
		"IntegerSuffix",
		"UnsignedSuffix",
		"LongSuffix",
		"LongLongSuffix",
		"FloatingConstant",
		"DecimalFloatingConstant",
		"HexadecimalFloatingConstant",
		"FractionalConstant",
		"ExponentPart",
		"Sign",
		"DigitSequence",
		"HexadecimalFractionalConstant",
		"BinaryExponentPart",
		"HexadecimalDigitSequence",
		"FloatingSuffix",
		"CharacterConstant",
		"CCharSequence",
		"CChar",
		"EscapeSequence",
		"SimpleEscapeSequence",
		"OctalEscapeSequence",
		"HexadecimalEscapeSequence",
		"FStringLiteral",
		"StringLiteral",
		"SCharSequence",
		"SChar",
		"WS",
		"Whitespace",
		"BlockComment",
		"Newline",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined,
		"'->'",
		"';'",
		"'?'",
		"':'",
		"'...'",
		"'const'",
		"'var'",
		"'as'",
		"'switch'",
		"'case'",
		"'default'",
		"'break'",
		"'continue'",
		"'do'",
		"'while'",
		"'if'",
		"'else'",
		"'for'",
		"'enum'",
		"'def'",
		"'return'",
		"'call'",
		"'struct'",
		"'typeof'",
		"'('",
		"')'",
		"'['",
		"']'",
		"'{'",
		"'}'",
		"'+'",
		"'++'",
		"'-'",
		"'--'",
		"'*'",
		"'/'",
		"'%'",
		"'**'",
		"'&&'",
		"'||'",
		"'!'",
		"','",
		"'='",
		"'*='",
		"'/='",
		"'%='",
		"'+='",
		"'-='",
		"'=='",
		"'!='",
		"'<'",
		"'<='",
		"'>'",
		"'>='",
		"'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		"Const",
		"Var",
		"As",
		"Switch",
		"Case",
		"Default",
		"Break",
		"Continue",
		"Do",
		"While",
		"If",
		"Else",
		"For",
		"Enum",
		"DefFunc",
		"Return",
		"CallFunc",
		"Struct",
		"Typeof",
		"LeftParen",
		"RightParen",
		"LeftBracket",
		"RightBracket",
		"LeftBrace",
		"RightBrace",
		"Plus",
		"PlusPlus",
		"Minus",
		"MinusMinus",
		"Star",
		"Div",
		"Mod",
		"PowerTo",
		"AndAnd",
		"OrOr",
		"Not",
		"Comma",
		"Assign",
		"StarAssign",
		"DivAssign",
		"ModAssign",
		"PlusAssign",
		"MinusAssign",
		"Equal",
		"NotEqual",
		"Less",
		"LessEqual",
		"Greater",
		"GreaterEqual",
		"Dot",
		"Identifier",
		"IntegerConstant",
		"FloatingConstant",
		"DigitSequence",
		"CharacterConstant",
		"FStringLiteral",
		"StringLiteral",
		"WS",
		"Whitespace",
		"BlockComment",
		"Newline",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
		KipperLexer._LITERAL_NAMES,
		KipperLexer._SYMBOLIC_NAMES,
		[],
	);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return KipperLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(KipperLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string {
		return "Kipper.g4";
	}

	// @Override
	public get ruleNames(): string[] {
		return KipperLexer.ruleNames;
	}

	// @Override
	public get serializedATN(): string {
		return KipperLexer._serializedATN;
	}

	// @Override
	public get channelNames(): string[] {
		return KipperLexer.channelNames;
	}

	// @Override
	public get modeNames(): string[] {
		return KipperLexer.modeNames;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02D\u02AE\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		'\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t' +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
		'\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!\x03"\x03"\x03#\x03#\x03#\x03$' +
		"\x03$\x03%\x03%\x03&\x03&\x03'\x03'\x03'\x03(\x03(\x03(\x03)\x03)\x03" +
		")\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03.\x03/\x03" +
		"/\x03/\x030\x030\x030\x031\x031\x031\x032\x032\x032\x033\x033\x033\x03" +
		"4\x034\x035\x035\x035\x036\x036\x037\x037\x037\x038\x038\x039\x039\x03" +
		"9\x079\u0192\n9\f9\x0E9\u0195\v9\x03:\x03:\x07:\u0199\n:\f:\x0E:\u019C" +
		"\v:\x03:\x03:\x03;\x03;\x05;\u01A2\n;\x03<\x03<\x03=\x03=\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u01B2\n>\x03?\x03?\x03?\x03" +
		"?\x03?\x03@\x03@\x05@\u01BB\n@\x03@\x03@\x05@\u01BF\n@\x03@\x03@\x05@" +
		"\u01C3\n@\x03@\x05@\u01C6\n@\x03A\x03A\x03A\x06A\u01CB\nA\rA\x0EA\u01CC" +
		"\x03B\x03B\x07B\u01D1\nB\fB\x0EB\u01D4\vB\x03C\x03C\x07C\u01D8\nC\fC\x0E" +
		"C\u01DB\vC\x03D\x03D\x06D\u01DF\nD\rD\x0ED\u01E0\x03E\x03E\x03E\x03F\x03" +
		"F\x03G\x03G\x03H\x03H\x03I\x03I\x05I\u01EE\nI\x03I\x03I\x03I\x03I\x03" +
		"I\x05I\u01F5\nI\x03I\x03I\x05I\u01F9\nI\x05I\u01FB\nI\x03J\x03J\x03K\x03" +
		"K\x03L\x03L\x03L\x03L\x05L\u0205\nL\x03M\x03M\x05M\u0209\nM\x03N\x03N" +
		"\x05N\u020D\nN\x03N\x05N\u0210\nN\x03N\x03N\x03N\x05N\u0215\nN\x05N\u0217" +
		"\nN\x03O\x03O\x03O\x05O\u021C\nO\x03O\x03O\x05O\u0220\nO\x03P\x05P\u0223" +
		"\nP\x03P\x03P\x03P\x03P\x03P\x05P\u022A\nP\x03Q\x03Q\x05Q\u022E\nQ\x03" +
		"Q\x03Q\x03R\x03R\x03S\x06S\u0235\nS\rS\x0ES\u0236\x03T\x05T\u023A\nT\x03" +
		"T\x03T\x03T\x03T\x03T\x05T\u0241\nT\x03U\x03U\x05U\u0245\nU\x03U\x03U" +
		"\x03V\x06V\u024A\nV\rV\x0EV\u024B\x03W\x03W\x03X\x03X\x03X\x03X\x03Y\x06" +
		"Y\u0255\nY\rY\x0EY\u0256\x03Z\x03Z\x05Z\u025B\nZ\x03[\x03[\x03[\x03[\x05" +
		"[\u0261\n[\x03\\\x03\\\x03\\\x03]\x03]\x03]\x05]\u0269\n]\x03]\x05]\u026C" +
		"\n]\x03^\x03^\x03^\x03^\x06^\u0272\n^\r^\x0E^\u0273\x03_\x03_\x03_\x05" +
		"_\u0279\n_\x03_\x03_\x03`\x03`\x05`\u027F\n`\x03`\x03`\x03a\x06a\u0284" +
		"\na\ra\x0Ea\u0285\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x05b\u028F\nb\x03" +
		"c\x03c\x03d\x06d\u0294\nd\rd\x0Ed\u0295\x03e\x03e\x03e\x03e\x07e\u029C" +
		"\ne\fe\x0Ee\u029F\ve\x03e\x03e\x03e\x03e\x03e\x03f\x03f\x05f\u02A8\nf" +
		"\x03f\x05f\u02AB\nf\x03f\x03f\x03\u029D\x02\x02g\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v" +
		"\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!" +
		"\x02\x12#\x02\x13%\x02\x14'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x19" +
		"1\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02" +
		"\"C\x02#E\x02$G\x02%I\x02&K\x02'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-" +
		"Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x02" +
		"9q\x02:s\x02\x02u\x02\x02w\x02\x02y\x02\x02{\x02\x02}\x02\x02\x7F\x02" +
		";\x81\x02\x02\x83\x02\x02\x85\x02\x02\x87\x02\x02\x89\x02\x02\x8B\x02" +
		"\x02\x8D\x02\x02\x8F\x02\x02\x91\x02\x02\x93\x02\x02\x95\x02\x02\x97\x02" +
		"\x02\x99\x02<\x9B\x02\x02\x9D\x02\x02\x9F\x02\x02\xA1\x02\x02\xA3\x02" +
		"\x02\xA5\x02=\xA7\x02\x02\xA9\x02\x02\xAB\x02\x02\xAD\x02\x02\xAF\x02" +
		">\xB1\x02\x02\xB3\x02\x02\xB5\x02\x02\xB7\x02\x02\xB9\x02\x02\xBB\x02" +
		"\x02\xBD\x02?\xBF\x02@\xC1\x02\x02\xC3\x02\x02\xC5\x02A\xC7\x02B\xC9\x02" +
		"C\xCB\x02D\x03\x02\x15\x03\x02\x02\x00\x05\x02C\\aac|\x03\x022;\x04\x02" +
		"DDdd\x03\x0223\x04\x02ZZzz\x03\x023;\x03\x0229\x05\x022;CHch\x04\x02W" +
		"Www\x04\x02NNnn\x04\x02GGgg\x04\x02--//\x04\x02RRrr\x06\x02HHNNhhnn\x06" +
		"\x02\f\f\x0F\x0F))^^\f\x02$$))AA^^cdhhppttvvxx\x06\x02\f\f\x0F\x0F$$^" +
		'^\x04\x02\v\v""\x02\u02C1\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02' +
		"\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
		"\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
		"\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02" +
		"\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02" +
		"\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02" +
		"%\x03\x02\x02\x02\x02'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03" +
		"\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02" +
		"\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x02" +
		"9\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02" +
		"\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02" +
		"\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03" +
		"\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02" +
		"\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02" +
		"[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02" +
		"\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02" +
		"\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03" +
		"\x02\x02\x02\x02q\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x99\x03" +
		"\x02\x02\x02\x02\xA5\x03\x02\x02\x02\x02\xAF\x03\x02\x02\x02\x02\xBD\x03" +
		"\x02\x02\x02\x02\xBF\x03\x02\x02\x02\x02\xC5\x03\x02\x02\x02\x02\xC7\x03" +
		"\x02\x02\x02\x02\xC9\x03\x02\x02\x02\x02\xCB\x03\x02\x02\x02\x03\xCD\x03" +
		"\x02\x02\x02\x05\xD0\x03\x02\x02\x02\x07\xD2\x03\x02\x02\x02\t\xD4\x03" +
		"\x02\x02\x02\v\xD6\x03\x02\x02\x02\r\xDA\x03\x02\x02\x02\x0F\xE0\x03\x02" +
		"\x02\x02\x11\xE4\x03\x02\x02\x02\x13\xE7\x03\x02\x02\x02\x15\xEE\x03\x02" +
		"\x02\x02\x17\xF3\x03\x02\x02\x02\x19\xFB\x03\x02\x02\x02\x1B\u0101\x03" +
		"\x02\x02\x02\x1D\u010A\x03\x02\x02\x02\x1F\u010D\x03\x02\x02\x02!\u0113" +
		"\x03\x02\x02\x02#\u0116\x03\x02\x02\x02%\u011B\x03\x02\x02\x02'\u011F" +
		"\x03\x02\x02\x02)\u0124\x03\x02\x02\x02+\u0128\x03\x02\x02\x02-\u012F" +
		"\x03\x02\x02\x02/\u0134\x03\x02\x02\x021\u013B\x03\x02\x02\x023\u0142" +
		"\x03\x02\x02\x025\u0144\x03\x02\x02\x027\u0146\x03\x02\x02\x029\u0148" +
		"\x03\x02\x02\x02;\u014A\x03\x02\x02\x02=\u014C\x03\x02\x02\x02?\u014E" +
		"\x03\x02\x02\x02A\u0150\x03\x02\x02\x02C\u0153\x03\x02\x02\x02E\u0155" +
		"\x03\x02\x02\x02G\u0158\x03\x02\x02\x02I\u015A\x03\x02\x02\x02K\u015C" +
		"\x03\x02\x02\x02M\u015E\x03\x02\x02\x02O\u0161\x03\x02\x02\x02Q\u0164" +
		"\x03\x02\x02\x02S\u0167\x03\x02\x02\x02U\u0169\x03\x02\x02\x02W\u016B" +
		"\x03\x02\x02\x02Y\u016D\x03\x02\x02\x02[\u0170\x03\x02\x02\x02]\u0173" +
		"\x03\x02\x02\x02_\u0176\x03\x02\x02\x02a\u0179\x03\x02\x02\x02c\u017C" +
		"\x03\x02\x02\x02e\u017F\x03\x02\x02\x02g\u0182\x03\x02\x02\x02i\u0184" +
		"\x03\x02\x02\x02k\u0187\x03\x02\x02\x02m\u0189\x03\x02\x02\x02o\u018C" +
		"\x03\x02\x02\x02q\u018E\x03\x02\x02\x02s\u0196\x03\x02\x02\x02u\u01A1" +
		"\x03\x02\x02\x02w\u01A3\x03\x02\x02\x02y\u01A5\x03\x02\x02\x02{\u01B1" +
		"\x03\x02\x02\x02}\u01B3\x03\x02\x02\x02\x7F\u01C5\x03\x02\x02\x02\x81" +
		"\u01C7\x03\x02\x02\x02\x83\u01CE\x03\x02\x02\x02\x85\u01D5\x03\x02\x02" +
		"\x02\x87\u01DC\x03\x02\x02\x02\x89\u01E2\x03\x02\x02\x02\x8B\u01E5\x03" +
		"\x02\x02\x02\x8D\u01E7\x03\x02\x02\x02\x8F\u01E9\x03\x02\x02\x02\x91\u01FA" +
		"\x03\x02\x02\x02\x93\u01FC\x03\x02\x02\x02\x95\u01FE\x03\x02\x02\x02\x97" +
		"\u0204\x03\x02\x02\x02\x99\u0208\x03\x02\x02\x02\x9B\u0216\x03\x02\x02" +
		"\x02\x9D\u0218\x03\x02\x02\x02\x9F\u0229\x03\x02\x02\x02\xA1\u022B\x03" +
		"\x02\x02\x02\xA3\u0231\x03\x02\x02\x02\xA5\u0234\x03\x02\x02\x02\xA7\u0240" +
		"\x03\x02\x02\x02\xA9\u0242\x03\x02\x02\x02\xAB\u0249\x03\x02\x02\x02\xAD" +
		"\u024D\x03\x02\x02\x02\xAF\u024F\x03\x02\x02\x02\xB1\u0254\x03\x02\x02" +
		"\x02\xB3\u025A\x03\x02\x02\x02\xB5\u0260\x03\x02\x02\x02\xB7\u0262\x03" +
		"\x02\x02\x02\xB9\u0265\x03\x02\x02\x02\xBB\u026D\x03\x02\x02\x02\xBD\u0275" +
		"\x03\x02\x02\x02\xBF\u027C\x03\x02\x02\x02\xC1\u0283\x03\x02\x02\x02\xC3" +
		"\u028E\x03\x02\x02\x02\xC5\u0290\x03\x02\x02\x02\xC7\u0293\x03\x02\x02" +
		"\x02\xC9\u0297\x03\x02\x02\x02\xCB\u02AA\x03\x02\x02\x02\xCD\xCE\x07/" +
		"\x02\x02\xCE\xCF\x07@\x02\x02\xCF\x04\x03\x02\x02\x02\xD0\xD1\x07=\x02" +
		"\x02\xD1\x06\x03\x02\x02\x02\xD2\xD3\x07A\x02\x02\xD3\b\x03\x02\x02\x02" +
		"\xD4\xD5\x07<\x02\x02\xD5\n\x03\x02\x02\x02\xD6\xD7\x070\x02\x02\xD7\xD8" +
		"\x070\x02\x02\xD8\xD9\x070\x02\x02\xD9\f\x03\x02\x02\x02\xDA\xDB\x07e" +
		"\x02\x02\xDB\xDC\x07q\x02\x02\xDC\xDD\x07p\x02\x02\xDD\xDE\x07u\x02\x02" +
		"\xDE\xDF\x07v\x02\x02\xDF\x0E\x03\x02\x02\x02\xE0\xE1\x07x\x02\x02\xE1" +
		"\xE2\x07c\x02\x02\xE2\xE3\x07t\x02\x02\xE3\x10\x03\x02\x02\x02\xE4\xE5" +
		"\x07c\x02\x02\xE5\xE6\x07u\x02\x02\xE6\x12\x03\x02\x02\x02\xE7\xE8\x07" +
		"u\x02\x02\xE8\xE9\x07y\x02\x02\xE9\xEA\x07k\x02\x02\xEA\xEB\x07v\x02\x02" +
		"\xEB\xEC\x07e\x02\x02\xEC\xED\x07j\x02\x02\xED\x14\x03\x02\x02\x02\xEE" +
		"\xEF\x07e\x02\x02\xEF\xF0\x07c\x02\x02\xF0\xF1\x07u\x02\x02\xF1\xF2\x07" +
		"g\x02\x02\xF2\x16\x03\x02\x02\x02\xF3\xF4\x07f\x02\x02\xF4\xF5\x07g\x02" +
		"\x02\xF5\xF6\x07h\x02\x02\xF6\xF7\x07c\x02\x02\xF7\xF8\x07w\x02\x02\xF8" +
		"\xF9\x07n\x02\x02\xF9\xFA\x07v\x02\x02\xFA\x18\x03\x02\x02\x02\xFB\xFC" +
		"\x07d\x02\x02\xFC\xFD\x07t\x02\x02\xFD\xFE\x07g\x02\x02\xFE\xFF\x07c\x02" +
		"\x02\xFF\u0100\x07m\x02\x02\u0100\x1A\x03\x02\x02\x02\u0101\u0102\x07" +
		"e\x02\x02\u0102\u0103\x07q\x02\x02\u0103\u0104\x07p\x02\x02\u0104\u0105" +
		"\x07v\x02\x02\u0105\u0106\x07k\x02\x02\u0106\u0107\x07p\x02\x02\u0107" +
		"\u0108\x07w\x02\x02\u0108\u0109\x07g\x02\x02\u0109\x1C\x03\x02\x02\x02" +
		"\u010A\u010B\x07f\x02\x02\u010B\u010C\x07q\x02\x02\u010C\x1E\x03\x02\x02" +
		"\x02\u010D\u010E\x07y\x02\x02\u010E\u010F\x07j\x02\x02\u010F\u0110\x07" +
		"k\x02\x02\u0110\u0111\x07n\x02\x02\u0111\u0112\x07g\x02\x02\u0112 \x03" +
		'\x02\x02\x02\u0113\u0114\x07k\x02\x02\u0114\u0115\x07h\x02\x02\u0115"' +
		"\x03\x02\x02\x02\u0116\u0117\x07g\x02\x02\u0117\u0118\x07n\x02\x02\u0118" +
		"\u0119\x07u\x02\x02\u0119\u011A\x07g\x02\x02\u011A$\x03\x02\x02\x02\u011B" +
		"\u011C\x07h\x02\x02\u011C\u011D\x07q\x02\x02\u011D\u011E\x07t\x02\x02" +
		"\u011E&\x03\x02\x02\x02\u011F\u0120\x07g\x02\x02\u0120\u0121\x07p\x02" +
		"\x02\u0121\u0122\x07w\x02\x02\u0122\u0123\x07o\x02\x02\u0123(\x03\x02" +
		"\x02\x02\u0124\u0125\x07f\x02\x02\u0125\u0126\x07g\x02\x02\u0126\u0127" +
		"\x07h\x02\x02\u0127*\x03\x02\x02\x02\u0128\u0129\x07t\x02\x02\u0129\u012A" +
		"\x07g\x02\x02\u012A\u012B\x07v\x02\x02\u012B\u012C\x07w\x02\x02\u012C" +
		"\u012D\x07t\x02\x02\u012D\u012E\x07p\x02\x02\u012E,\x03\x02\x02\x02\u012F" +
		"\u0130\x07e\x02\x02\u0130\u0131\x07c\x02\x02\u0131\u0132\x07n\x02\x02" +
		"\u0132\u0133\x07n\x02\x02\u0133.\x03\x02\x02\x02\u0134\u0135\x07u\x02" +
		"\x02\u0135\u0136\x07v\x02\x02\u0136\u0137\x07t\x02\x02\u0137\u0138\x07" +
		"w\x02\x02\u0138\u0139\x07e\x02\x02\u0139\u013A\x07v\x02\x02\u013A0\x03" +
		"\x02\x02\x02\u013B\u013C\x07v\x02\x02\u013C\u013D\x07{\x02\x02\u013D\u013E" +
		"\x07r\x02\x02\u013E\u013F\x07g\x02\x02\u013F\u0140\x07q\x02\x02\u0140" +
		"\u0141\x07h\x02\x02\u01412\x03\x02\x02\x02\u0142\u0143\x07*\x02\x02\u0143" +
		"4\x03\x02\x02\x02\u0144\u0145\x07+\x02\x02\u01456\x03\x02\x02\x02\u0146" +
		"\u0147\x07]\x02\x02\u01478\x03\x02\x02\x02\u0148\u0149\x07_\x02\x02\u0149" +
		":\x03\x02\x02\x02\u014A\u014B\x07}\x02\x02\u014B<\x03\x02\x02\x02\u014C" +
		"\u014D\x07\x7F\x02\x02\u014D>\x03\x02\x02\x02\u014E\u014F\x07-\x02\x02" +
		"\u014F@\x03\x02\x02\x02\u0150\u0151\x07-\x02\x02\u0151\u0152\x07-\x02" +
		"\x02\u0152B\x03\x02\x02\x02\u0153\u0154\x07/\x02\x02\u0154D\x03\x02\x02" +
		"\x02\u0155\u0156\x07/\x02\x02\u0156\u0157\x07/\x02\x02\u0157F\x03\x02" +
		"\x02\x02\u0158\u0159\x07,\x02\x02\u0159H\x03\x02\x02\x02\u015A\u015B\x07" +
		"1\x02\x02\u015BJ\x03\x02\x02\x02\u015C\u015D\x07'\x02\x02\u015DL\x03" +
		"\x02\x02\x02\u015E\u015F\x07,\x02\x02\u015F\u0160\x07,\x02\x02\u0160N" +
		"\x03\x02\x02\x02\u0161\u0162\x07(\x02\x02\u0162\u0163\x07(\x02\x02\u0163" +
		"P\x03\x02\x02\x02\u0164\u0165\x07~\x02\x02\u0165\u0166\x07~\x02\x02\u0166" +
		"R\x03\x02\x02\x02\u0167\u0168\x07#\x02\x02\u0168T\x03\x02\x02\x02\u0169" +
		"\u016A\x07.\x02\x02\u016AV\x03\x02\x02\x02\u016B\u016C\x07?\x02\x02\u016C" +
		"X\x03\x02\x02\x02\u016D\u016E\x07,\x02\x02\u016E\u016F\x07?\x02\x02\u016F" +
		"Z\x03\x02\x02\x02\u0170\u0171\x071\x02\x02\u0171\u0172\x07?\x02\x02\u0172" +
		"\\\x03\x02\x02\x02\u0173\u0174\x07'\x02\x02\u0174\u0175\x07?\x02\x02" +
		"\u0175^\x03\x02\x02\x02\u0176\u0177\x07-\x02\x02\u0177\u0178\x07?\x02" +
		"\x02\u0178`\x03\x02\x02\x02\u0179\u017A\x07/\x02\x02\u017A\u017B\x07?" +
		"\x02\x02\u017Bb\x03\x02\x02\x02\u017C\u017D\x07?\x02\x02\u017D\u017E\x07" +
		"?\x02\x02\u017Ed\x03\x02\x02\x02\u017F\u0180\x07#\x02\x02\u0180\u0181" +
		"\x07?\x02\x02\u0181f\x03\x02\x02\x02\u0182\u0183\x07>\x02\x02\u0183h\x03" +
		"\x02\x02\x02\u0184\u0185\x07>\x02\x02\u0185\u0186\x07?\x02\x02\u0186j" +
		"\x03\x02\x02\x02\u0187\u0188\x07@\x02\x02\u0188l\x03\x02\x02\x02\u0189" +
		"\u018A\x07@\x02\x02\u018A\u018B\x07?\x02\x02\u018Bn\x03\x02\x02\x02\u018C" +
		"\u018D\x070\x02\x02\u018Dp\x03\x02\x02\x02\u018E\u0193\x05u;\x02\u018F" +
		"\u0192\x05u;\x02\u0190\u0192\x05y=\x02\u0191\u018F\x03\x02\x02\x02\u0191" +
		"\u0190\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193\u0191\x03\x02" +
		"\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194r\x03\x02\x02\x02\u0195\u0193" +
		"\x03\x02\x02\x02\u0196\u019A\x07}\x02\x02\u0197\u0199\t\x02\x02\x02\u0198" +
		"\u0197\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02" +
		"\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019D\x03\x02\x02\x02\u019C" +
		"\u019A\x03\x02\x02\x02\u019D\u019E\x07\x7F\x02\x02\u019Et\x03\x02\x02" +
		"\x02\u019F\u01A2\x05w<\x02\u01A0\u01A2\x05{>\x02\u01A1\u019F\x03\x02\x02" +
		"\x02\u01A1\u01A0\x03\x02\x02\x02\u01A2v\x03\x02\x02\x02\u01A3\u01A4\t" +
		"\x03\x02\x02\u01A4x\x03\x02\x02\x02\u01A5\u01A6\t\x04\x02\x02\u01A6z\x03" +
		"\x02\x02\x02\u01A7\u01A8\x07^\x02\x02\u01A8\u01A9\x07w\x02\x02\u01A9\u01AA" +
		"\x03\x02\x02\x02\u01AA\u01B2\x05}?\x02\u01AB\u01AC\x07^\x02\x02\u01AC" +
		"\u01AD\x07W\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AF\x05}?\x02" +
		"\u01AF\u01B0\x05}?\x02\u01B0\u01B2\x03\x02\x02\x02\u01B1\u01A7\x03\x02" +
		"\x02\x02\u01B1\u01AB\x03\x02\x02\x02\u01B2|\x03\x02\x02\x02\u01B3\u01B4" +
		"\x05\x8FH\x02\u01B4\u01B5\x05\x8FH\x02\u01B5\u01B6\x05\x8FH\x02\u01B6" +
		"\u01B7\x05\x8FH\x02\u01B7~\x03\x02\x02\x02\u01B8\u01BA\x05\x83B\x02\u01B9" +
		"\u01BB\x05\x91I\x02\u01BA\u01B9\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02" +
		"\x02\u01BB\u01C6\x03\x02\x02\x02\u01BC\u01BE\x05\x85C\x02\u01BD\u01BF" +
		"\x05\x91I\x02\u01BE\u01BD\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02" +
		"\u01BF\u01C6\x03\x02\x02\x02\u01C0\u01C2\x05\x87D\x02\u01C1\u01C3\x05" +
		"\x91I\x02\u01C2\u01C1\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3" +
		"\u01C6\x03\x02\x02\x02\u01C4\u01C6\x05\x81A\x02\u01C5\u01B8\x03\x02\x02" +
		"\x02\u01C5\u01BC\x03\x02\x02\x02\u01C5\u01C0\x03\x02\x02\x02\u01C5\u01C4" +
		"\x03\x02\x02\x02\u01C6\x80\x03\x02\x02\x02\u01C7\u01C8\x072\x02\x02\u01C8" +
		"\u01CA\t\x05\x02\x02\u01C9\u01CB\t\x06\x02\x02\u01CA\u01C9\x03\x02\x02" +
		"\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CA\x03\x02\x02\x02\u01CC\u01CD" +
		"\x03\x02\x02\x02\u01CD\x82\x03\x02\x02\x02\u01CE\u01D2\x05\x8BF\x02\u01CF" +
		"\u01D1\x05y=\x02\u01D0\u01CF\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02" +
		"\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\x84\x03" +
		"\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5\u01D9\x072\x02\x02\u01D6" +
		"\u01D8\x05\x8DG\x02\u01D7\u01D6\x03\x02\x02\x02\u01D8\u01DB\x03\x02\x02" +
		"\x02\u01D9\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\x86" +
		"\x03\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DC\u01DE\x05\x89E\x02" +
		"\u01DD\u01DF\x05\x8FH\x02\u01DE\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03" +
		"\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1" +
		"\x88\x03\x02\x02\x02\u01E2\u01E3\x072\x02\x02\u01E3\u01E4\t\x07\x02\x02" +
		"\u01E4\x8A\x03\x02\x02\x02\u01E5\u01E6\t\b\x02\x02\u01E6\x8C\x03\x02\x02" +
		"\x02\u01E7\u01E8\t\t\x02\x02\u01E8\x8E\x03\x02\x02\x02\u01E9\u01EA\t\n" +
		"\x02\x02\u01EA\x90\x03\x02\x02\x02\u01EB\u01ED\x05\x93J\x02\u01EC\u01EE" +
		"\x05\x95K\x02\u01ED\u01EC\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02" +
		"\u01EE\u01FB\x03\x02\x02\x02\u01EF\u01F0\x05\x93J\x02\u01F0\u01F1\x05" +
		"\x97L\x02\u01F1\u01FB\x03\x02\x02\x02\u01F2\u01F4\x05\x95K\x02\u01F3\u01F5" +
		"\x05\x93J\x02\u01F4\u01F3\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02" +
		"\u01F5\u01FB\x03\x02\x02\x02\u01F6\u01F8\x05\x97L\x02\u01F7\u01F9\x05" +
		"\x93J\x02\u01F8\u01F7\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9" +
		"\u01FB\x03\x02\x02\x02\u01FA\u01EB\x03\x02\x02\x02\u01FA\u01EF\x03\x02" +
		"\x02\x02\u01FA\u01F2\x03\x02\x02\x02\u01FA\u01F6\x03\x02\x02\x02\u01FB" +
		"\x92\x03\x02\x02\x02\u01FC\u01FD\t\v\x02\x02\u01FD\x94\x03\x02\x02\x02" +
		"\u01FE\u01FF\t\f\x02\x02\u01FF\x96\x03\x02\x02\x02\u0200\u0201\x07n\x02" +
		"\x02\u0201\u0205\x07n\x02\x02\u0202\u0203\x07N\x02\x02\u0203\u0205\x07" +
		"N\x02\x02\u0204\u0200\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0205" +
		"\x98\x03\x02\x02\x02\u0206\u0209\x05\x9BN\x02\u0207\u0209\x05\x9DO\x02" +
		"\u0208\u0206\x03\x02\x02\x02\u0208\u0207\x03\x02\x02\x02\u0209\x9A\x03" +
		"\x02\x02\x02\u020A\u020C\x05\x9FP\x02\u020B\u020D\x05\xA1Q\x02\u020C\u020B" +
		"\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u020F\x03\x02\x02\x02" +
		"\u020E\u0210\x05\xADW\x02\u020F\u020E\x03\x02\x02\x02\u020F\u0210\x03" +
		"\x02\x02\x02\u0210\u0217\x03\x02\x02\x02\u0211\u0212\x05\xA5S\x02\u0212" +
		"\u0214\x05\xA1Q\x02\u0213\u0215\x05\xAD";
	private static readonly _serializedATNSegment1: string =
		"W\x02\u0214\u0213\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0217" +
		"\x03\x02\x02\x02\u0216\u020A\x03\x02\x02\x02\u0216\u0211\x03\x02\x02\x02" +
		"\u0217\x9C\x03\x02\x02\x02\u0218\u021B\x05\x89E\x02\u0219\u021C\x05\xA7" +
		"T\x02\u021A\u021C\x05\xABV\x02\u021B\u0219\x03\x02\x02\x02\u021B\u021A" +
		"\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021F\x05\xA9U\x02" +
		"\u021E\u0220\x05\xADW\x02\u021F\u021E\x03\x02\x02\x02\u021F\u0220\x03" +
		"\x02\x02\x02\u0220\x9E\x03\x02\x02\x02\u0221\u0223\x05\xA5S\x02\u0222" +
		"\u0221\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0224\x03\x02" +
		"\x02\x02\u0224\u0225\x070\x02\x02\u0225\u022A\x05\xA5S\x02\u0226\u0227" +
		"\x05\xA5S\x02\u0227\u0228\x070\x02\x02\u0228\u022A\x03\x02\x02\x02\u0229" +
		"\u0222\x03\x02\x02\x02\u0229\u0226\x03\x02\x02\x02\u022A\xA0\x03\x02\x02" +
		"\x02\u022B\u022D\t\r\x02\x02\u022C\u022E\x05\xA3R\x02\u022D\u022C\x03" +
		"\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F" +
		"\u0230\x05\xA5S\x02\u0230\xA2\x03\x02\x02\x02\u0231\u0232\t\x0E\x02\x02" +
		"\u0232\xA4\x03\x02\x02\x02\u0233\u0235\x05y=\x02\u0234\u0233\x03\x02\x02" +
		"\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0234\x03\x02\x02\x02\u0236\u0237" +
		"\x03\x02\x02\x02\u0237\xA6\x03\x02\x02\x02\u0238\u023A\x05\xABV\x02\u0239" +
		"\u0238\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A\u023B\x03\x02" +
		"\x02\x02\u023B\u023C\x070\x02\x02\u023C\u0241\x05\xABV\x02\u023D\u023E" +
		"\x05\xABV\x02\u023E\u023F\x070\x02\x02\u023F\u0241\x03\x02\x02\x02\u0240" +
		"\u0239\x03\x02\x02\x02\u0240\u023D\x03\x02\x02\x02\u0241\xA8\x03\x02\x02" +
		"\x02\u0242\u0244\t\x0F\x02\x02\u0243\u0245\x05\xA3R\x02\u0244\u0243\x03" +
		"\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246" +
		"\u0247\x05\xA5S\x02\u0247\xAA\x03\x02\x02\x02\u0248\u024A\x05\x8FH\x02" +
		"\u0249\u0248\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u0249\x03" +
		"\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\xAC\x03\x02\x02\x02\u024D" +
		"\u024E\t\x10\x02\x02\u024E\xAE\x03\x02\x02\x02\u024F\u0250\x07)\x02\x02" +
		"\u0250\u0251\x05\xB3Z\x02\u0251\u0252\x07)\x02\x02\u0252\xB0\x03\x02\x02" +
		"\x02\u0253\u0255\x05\xB3Z\x02\u0254\u0253\x03\x02\x02\x02\u0255\u0256" +
		"\x03\x02\x02\x02\u0256\u0254\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02" +
		"\u0257\xB2\x03\x02\x02\x02\u0258\u025B\n\x11\x02\x02\u0259\u025B\x05\xB5" +
		"[\x02\u025A\u0258\x03\x02\x02\x02\u025A\u0259\x03\x02\x02\x02\u025B\xB4" +
		"\x03\x02\x02\x02\u025C\u0261\x05\xB7\\\x02\u025D\u0261\x05\xB9]\x02\u025E" +
		"\u0261\x05\xBB^\x02\u025F\u0261\x05{>\x02\u0260\u025C\x03\x02\x02\x02" +
		"\u0260\u025D\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0260\u025F\x03" +
		"\x02\x02\x02\u0261\xB6\x03\x02\x02\x02\u0262\u0263\x07^\x02\x02\u0263" +
		"\u0264\t\x12\x02\x02\u0264\xB8\x03\x02\x02\x02\u0265\u0266\x07^\x02\x02" +
		"\u0266\u0268\x05\x8DG\x02\u0267\u0269\x05\x8DG\x02\u0268\u0267\x03\x02" +
		"\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026B\x03\x02\x02\x02\u026A" +
		"\u026C\x05\x8DG\x02\u026B\u026A\x03\x02\x02\x02\u026B\u026C\x03\x02\x02" +
		"\x02\u026C\xBA\x03\x02\x02\x02\u026D\u026E\x07^\x02\x02\u026E\u026F\x07" +
		"z\x02\x02\u026F\u0271\x03\x02\x02\x02\u0270\u0272\x05\x8FH\x02\u0271\u0270" +
		"\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02" +
		"\u0273\u0274\x03\x02\x02\x02\u0274\xBC\x03\x02\x02\x02\u0275\u0276\x07" +
		"h\x02\x02\u0276\u0278\x07$\x02\x02\u0277\u0279\x05\xC1a\x02\u0278\u0277" +
		"\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02" +
		"\u027A\u027B\x07$\x02\x02\u027B\xBE\x03\x02\x02\x02\u027C\u027E\x07$\x02" +
		"\x02\u027D\u027F\x05\xC1a\x02\u027E\u027D\x03\x02\x02\x02\u027E\u027F" +
		"\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0281\x07$\x02\x02" +
		"\u0281\xC0\x03\x02\x02\x02\u0282\u0284\x05\xC3b\x02\u0283\u0282\x03\x02" +
		"\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0283\x03\x02\x02\x02\u0285" +
		"\u0286\x03\x02\x02\x02\u0286\xC2\x03\x02\x02\x02\u0287\u028F\n\x13\x02" +
		"\x02\u0288\u028F\x05\xB5[\x02\u0289\u028A\x07^\x02\x02\u028A\u028F\x07" +
		"\f\x02\x02\u028B\u028C\x07^\x02\x02\u028C\u028D\x07\x0F\x02\x02\u028D" +
		"\u028F\x07\f\x02\x02\u028E\u0287\x03\x02\x02\x02\u028E\u0288\x03\x02\x02" +
		"\x02\u028E\u0289\x03\x02\x02\x02\u028E\u028B\x03\x02\x02\x02\u028F\xC4" +
		"\x03\x02\x02\x02\u0290\u0291\x05\xC7d\x02\u0291\xC6\x03\x02\x02\x02\u0292" +
		"\u0294\t\x14\x02\x02\u0293\u0292\x03\x02\x02\x02\u0294\u0295\x03\x02\x02" +
		"\x02\u0295\u0293\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296\xC8" +
		"\x03\x02\x02\x02\u0297\u0298\x071\x02\x02\u0298\u0299\x07,\x02\x02\u0299" +
		"\u029D\x03\x02\x02\x02\u029A\u029C\v\x02\x02\x02\u029B\u029A\x03\x02\x02" +
		"\x02\u029C\u029F\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029D\u029B" +
		"\x03\x02\x02\x02\u029E\u02A0\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02" +
		"\u02A0\u02A1\x07,\x02\x02\u02A1\u02A2\x071\x02\x02\u02A2\u02A3\x03\x02" +
		"\x02\x02\u02A3\u02A4\be\x02\x02\u02A4\xCA\x03\x02\x02\x02\u02A5\u02A7" +
		"\x07\x0F\x02\x02\u02A6\u02A8\x07\f\x02\x02\u02A7\u02A6\x03\x02\x02\x02" +
		"\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02AB\x03\x02\x02\x02\u02A9\u02AB\x07" +
		"\f\x02\x02\u02AA\u02A5\x03\x02\x02\x02\u02AA\u02A9\x03\x02\x02\x02\u02AB" +
		"\u02AC\x03\x02\x02\x02\u02AC\u02AD\bf\x02\x02\u02AD\xCC\x03\x02\x02\x02" +
		"2\x02\u0191\u0193\u019A\u01A1\u01B1\u01BA\u01BE\u01C2\u01C5\u01CC\u01D2" +
		"\u01D9\u01E0\u01ED\u01F4\u01F8\u01FA\u0204\u0208\u020C\u020F\u0214\u0216" +
		"\u021B\u021F\u0222\u0229\u022D\u0236\u0239\u0240\u0244\u024B\u0256\u025A" +
		"\u0260\u0268\u026B\u0273\u0278\u027E\u0285\u028E\u0295\u029D\u02A7\u02AA" +
		"\x03\b\x02\x02";
	public static readonly _serializedATN: string = Utils.join(
		[KipperLexer._serializedATNSegment0, KipperLexer._serializedATNSegment1],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KipperLexer.__ATN) {
			KipperLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(KipperLexer._serializedATN));
		}

		return KipperLexer.__ATN;
	}
}