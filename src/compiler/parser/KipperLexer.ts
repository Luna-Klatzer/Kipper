// Generated from Kipper.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly AndAnd = 38;
	public static readonly OrOr = 39;
	public static readonly Not = 40;
	public static readonly Comma = 41;
	public static readonly Assign = 42;
	public static readonly StarAssign = 43;
	public static readonly DivAssign = 44;
	public static readonly ModAssign = 45;
	public static readonly PlusAssign = 46;
	public static readonly MinusAssign = 47;
	public static readonly Equal = 48;
	public static readonly NotEqual = 49;
	public static readonly Less = 50;
	public static readonly LessEqual = 51;
	public static readonly Greater = 52;
	public static readonly GreaterEqual = 53;
	public static readonly Dot = 54;
	public static readonly Identifier = 55;
	public static readonly Constant = 56;
	public static readonly DigitSequence = 57;
	public static readonly StringLiteral = 58;
	public static readonly Directive = 59;
	public static readonly WS = 60;
	public static readonly Whitespace = 61;
	public static readonly BlockComment = 62;
	public static readonly Newline = 63;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "Const", "Var", "As", "Switch", 
		"Case", "Default", "Break", "Continue", "Do", "While", "If", "Else", "For", 
		"Enum", "DefFunc", "Return", "CallFunc", "Struct", "Typeof", "LeftParen", 
		"RightParen", "LeftBracket", "RightBracket", "LeftBrace", "RightBrace", 
		"Plus", "PlusPlus", "Minus", "MinusMinus", "Star", "Div", "Mod", "AndAnd", 
		"OrOr", "Not", "Comma", "Assign", "StarAssign", "DivAssign", "ModAssign", 
		"PlusAssign", "MinusAssign", "Equal", "NotEqual", "Less", "LessEqual", 
		"Greater", "GreaterEqual", "Dot", "Identifier", "ExtensionTaskBlock", 
		"IdentifierNondigit", "Nondigit", "Digit", "UniversalCharacterName", "HexQuad", 
		"Constant", "IntegerConstant", "BinaryConstant", "DecimalConstant", "OctalConstant", 
		"HexadecimalConstant", "HexadecimalPrefix", "NonzeroDigit", "OctalDigit", 
		"HexadecimalDigit", "IntegerSuffix", "UnsignedSuffix", "LongSuffix", "LongLongSuffix", 
		"FloatingConstant", "DecimalFloatingConstant", "HexadecimalFloatingConstant", 
		"FractionalConstant", "ExponentPart", "Sign", "DigitSequence", "HexadecimalFractionalConstant", 
		"BinaryExponentPart", "HexadecimalDigitSequence", "FloatingSuffix", "CharacterConstant", 
		"CCharSequence", "CChar", "EscapeSequence", "SimpleEscapeSequence", "OctalEscapeSequence", 
		"HexadecimalEscapeSequence", "StringLiteral", "EncodingPrefix", "SCharSequence", 
		"SChar", "Directive", "WS", "Whitespace", "BlockComment", "Newline",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'->'", "';'", "'?'", "':'", "'...'", "'const'", "'var'", "'as'", 
		"'switch'", "'case'", "'default'", "'break'", "'continue'", "'do'", "'while'", 
		"'if'", "'else'", "'for'", "'enum'", "'def'", "'return'", "'call'", "'struct'", 
		"'typeof'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'+'", "'++'", "'-'", 
		"'--'", "'*'", "'/'", "'%'", "'&&'", "'||'", "'!'", "','", "'='", "'*='", 
		"'/='", "'%='", "'+='", "'-='", "'=='", "'!='", "'<'", "'<='", "'>'", 
		"'>='", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "Const", 
		"Var", "As", "Switch", "Case", "Default", "Break", "Continue", "Do", "While", 
		"If", "Else", "For", "Enum", "DefFunc", "Return", "CallFunc", "Struct", 
		"Typeof", "LeftParen", "RightParen", "LeftBracket", "RightBracket", "LeftBrace", 
		"RightBrace", "Plus", "PlusPlus", "Minus", "MinusMinus", "Star", "Div", 
		"Mod", "AndAnd", "OrOr", "Not", "Comma", "Assign", "StarAssign", "DivAssign", 
		"ModAssign", "PlusAssign", "MinusAssign", "Equal", "NotEqual", "Less", 
		"LessEqual", "Greater", "GreaterEqual", "Dot", "Identifier", "Constant", 
		"DigitSequence", "StringLiteral", "Directive", "WS", "Whitespace", "BlockComment", 
		"Newline",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(KipperLexer._LITERAL_NAMES, KipperLexer._SYMBOLIC_NAMES, []);

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
	public get grammarFileName(): string { return "Kipper.g4"; }

	// @Override
	public get ruleNames(): string[] { return KipperLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return KipperLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return KipperLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return KipperLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02A\u02D0\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x03\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!\x03\"\x03\"\x03#\x03#\x03" +
		"#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03)" +
		"\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03" +
		".\x03/\x03/\x03/\x030\x030\x030\x031\x031\x031\x032\x032\x032\x033\x03" +
		"3\x034\x034\x034\x035\x035\x036\x036\x036\x037\x037\x038\x038\x038\x07" +
		"8\u0191\n8\f8\x0E8\u0194\v8\x039\x039\x079\u0198\n9\f9\x0E9\u019B\v9\x03" +
		"9\x039\x03:\x03:\x05:\u01A1\n:\x03;\x03;\x03<\x03<\x03=\x03=\x03=\x03" +
		"=\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u01B1\n=\x03>\x03>\x03>\x03>\x03" +
		">\x03?\x03?\x03?\x05?\u01BB\n?\x03@\x03@\x05@\u01BF\n@\x03@\x03@\x05@" +
		"\u01C3\n@\x03@\x03@\x05@\u01C7\n@\x03@\x05@\u01CA\n@\x03A\x03A\x03A\x06" +
		"A\u01CF\nA\rA\x0EA\u01D0\x03B\x03B\x07B\u01D5\nB\fB\x0EB\u01D8\vB\x03" +
		"C\x03C\x07C\u01DC\nC\fC\x0EC\u01DF\vC\x03D\x03D\x06D\u01E3\nD\rD\x0ED" +
		"\u01E4\x03E\x03E\x03E\x03F\x03F\x03G\x03G\x03H\x03H\x03I\x03I\x05I\u01F2" +
		"\nI\x03I\x03I\x03I\x03I\x03I\x05I\u01F9\nI\x03I\x03I\x05I\u01FD\nI\x05" +
		"I\u01FF\nI\x03J\x03J\x03K\x03K\x03L\x03L\x03L\x03L\x05L\u0209\nL\x03M" +
		"\x03M\x05M\u020D\nM\x03N\x03N\x05N\u0211\nN\x03N\x05N\u0214\nN\x03N\x03" +
		"N\x03N\x05N\u0219\nN\x05N\u021B\nN\x03O\x03O\x03O\x05O\u0220\nO\x03O\x03" +
		"O\x05O\u0224\nO\x03P\x05P\u0227\nP\x03P\x03P\x03P\x03P\x03P\x05P\u022E" +
		"\nP\x03Q\x03Q\x05Q\u0232\nQ\x03Q\x03Q\x03R\x03R\x03S\x06S\u0239\nS\rS" +
		"\x0ES\u023A\x03T\x05T\u023E\nT\x03T\x03T\x03T\x03T\x03T\x05T\u0245\nT" +
		"\x03U\x03U\x05U\u0249\nU\x03U\x03U\x03V\x06V\u024E\nV\rV\x0EV\u024F\x03" +
		"W\x03W\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03" +
		"X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u026A\nX\x03Y\x06" +
		"Y\u026D\nY\rY\x0EY\u026E\x03Z\x03Z\x05Z\u0273\nZ\x03[\x03[\x03[\x03[\x05" +
		"[\u0279\n[\x03\\\x03\\\x03\\\x03]\x03]\x03]\x05]\u0281\n]\x03]\x05]\u0284" +
		"\n]\x03^\x03^\x03^\x03^\x06^\u028A\n^\r^\x0E^\u028B\x03_\x05_\u028F\n" +
		"_\x03_\x03_\x05_\u0293\n_\x03_\x03_\x03`\x03`\x03`\x05`\u029A\n`\x03a" +
		"\x06a\u029D\na\ra\x0Ea\u029E\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x05b\u02A8" +
		"\nb\x03c\x03c\x07c\u02AC\nc\fc\x0Ec\u02AF\vc\x03c\x03c\x03d\x03d\x03e" +
		"\x06e\u02B6\ne\re\x0Ee\u02B7\x03f\x03f\x03f\x03f\x07f\u02BE\nf\ff\x0E" +
		"f\u02C1\vf\x03f\x03f\x03f\x03f\x03f\x03g\x03g\x05g\u02CA\ng\x03g\x05g" +
		"\u02CD\ng\x03g\x03g\x03\u02BF\x02\x02h\x03\x02\x03\x05\x02\x04\x07\x02" +
		"\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02" +
		"\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12" +
		"#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02" +
		"\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C" +
		"\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02" +
		".[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x029q\x02" +
		"\x02s\x02\x02u\x02\x02w\x02\x02y\x02\x02{\x02\x02}\x02:\x7F\x02\x02\x81" +
		"\x02\x02\x83\x02\x02\x85\x02\x02\x87\x02\x02\x89\x02\x02\x8B\x02\x02\x8D" +
		"\x02\x02\x8F\x02\x02\x91\x02\x02\x93\x02\x02\x95\x02\x02\x97\x02\x02\x99" +
		"\x02\x02\x9B\x02\x02\x9D\x02\x02\x9F\x02\x02\xA1\x02\x02\xA3\x02\x02\xA5" +
		"\x02;\xA7\x02\x02\xA9\x02\x02\xAB\x02\x02\xAD\x02\x02\xAF\x02\x02\xB1" +
		"\x02\x02\xB3\x02\x02\xB5\x02\x02\xB7\x02\x02\xB9\x02\x02\xBB\x02\x02\xBD" +
		"\x02<\xBF\x02\x02\xC1\x02\x02\xC3\x02\x02\xC5\x02=\xC7\x02>\xC9\x02?\xCB" +
		"\x02@\xCD\x02A\x03\x02\x17\x03\x02\x02\x00\x05\x02C\\aac|\x03\x022;\x04" +
		"\x02DDdd\x03\x0223\x04\x02ZZzz\x03\x023;\x03\x0229\x05\x022;CHch\x04\x02" +
		"WWww\x04\x02NNnn\x04\x02GGgg\x04\x02--//\x04\x02RRrr\x06\x02HHNNhhnn\x06" +
		"\x02\f\f\x0F\x0F))^^\f\x02$$))AA^^cdhhppttvvxx\x05\x02NNWWww\x06\x02\f" +
		"\f\x0F\x0F$$^^\x04\x02\f\f\x0F\x0F\x04\x02\v\v\"\"\x02\u02E6\x02\x03\x03" +
		"\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03" +
		"\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02" +
		"\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02" +
		"\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02" +
		"\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02" +
		"\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03" +
		"\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02" +
		"\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02" +
		"=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02" +
		"\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02" +
		"\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03" +
		"\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02" +
		"\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02" +
		"_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02" +
		"\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02" +
		"\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\xA5" +
		"\x03\x02\x02\x02\x02\xBD\x03\x02\x02\x02\x02\xC5\x03\x02\x02\x02\x02\xC7" +
		"\x03\x02\x02\x02\x02\xC9\x03\x02\x02\x02\x02\xCB\x03\x02\x02\x02\x02\xCD" +
		"\x03\x02\x02\x02\x03\xCF\x03\x02\x02\x02\x05\xD2\x03\x02\x02\x02\x07\xD4" +
		"\x03\x02\x02\x02\t\xD6\x03\x02\x02\x02\v\xD8\x03\x02\x02\x02\r\xDC\x03" +
		"\x02\x02\x02\x0F\xE2\x03\x02\x02\x02\x11\xE6\x03\x02\x02\x02\x13\xE9\x03" +
		"\x02\x02\x02\x15\xF0\x03\x02\x02\x02\x17\xF5\x03\x02\x02\x02\x19\xFD\x03" +
		"\x02\x02\x02\x1B\u0103\x03\x02\x02\x02\x1D\u010C\x03\x02\x02\x02\x1F\u010F" +
		"\x03\x02\x02\x02!\u0115\x03\x02\x02\x02#\u0118\x03\x02\x02\x02%\u011D" +
		"\x03\x02\x02\x02\'\u0121\x03\x02\x02\x02)\u0126\x03\x02\x02\x02+\u012A" +
		"\x03\x02\x02\x02-\u0131\x03\x02\x02\x02/\u0136\x03\x02\x02\x021\u013D" +
		"\x03\x02\x02\x023\u0144\x03\x02\x02\x025\u0146\x03\x02\x02\x027\u0148" +
		"\x03\x02\x02\x029\u014A\x03\x02\x02\x02;\u014C\x03\x02\x02\x02=\u014E" +
		"\x03\x02\x02\x02?\u0150\x03\x02\x02\x02A\u0152\x03\x02\x02\x02C\u0155" +
		"\x03\x02\x02\x02E\u0157\x03\x02\x02\x02G\u015A\x03\x02\x02\x02I\u015C" +
		"\x03\x02\x02\x02K\u015E\x03\x02\x02\x02M\u0160\x03\x02\x02\x02O\u0163" +
		"\x03\x02\x02\x02Q\u0166\x03\x02\x02\x02S\u0168\x03\x02\x02\x02U\u016A" +
		"\x03\x02\x02\x02W\u016C\x03\x02\x02\x02Y\u016F\x03\x02\x02\x02[\u0172" +
		"\x03\x02\x02\x02]\u0175\x03\x02\x02\x02_\u0178\x03\x02\x02\x02a\u017B" +
		"\x03\x02\x02\x02c\u017E\x03\x02\x02\x02e\u0181\x03\x02\x02\x02g\u0183" +
		"\x03\x02\x02\x02i\u0186\x03\x02\x02\x02k\u0188\x03\x02\x02\x02m\u018B" +
		"\x03\x02\x02\x02o\u018D\x03\x02\x02\x02q\u0195\x03\x02\x02\x02s\u01A0" +
		"\x03\x02\x02\x02u\u01A2\x03\x02\x02\x02w\u01A4\x03\x02\x02\x02y\u01B0" +
		"\x03\x02\x02\x02{\u01B2\x03\x02\x02\x02}\u01BA\x03\x02\x02\x02\x7F\u01C9" +
		"\x03\x02\x02\x02\x81\u01CB\x03\x02\x02\x02\x83\u01D2\x03\x02\x02\x02\x85" +
		"\u01D9\x03\x02\x02\x02\x87\u01E0\x03\x02\x02\x02\x89\u01E6\x03\x02\x02" +
		"\x02\x8B\u01E9\x03\x02\x02\x02\x8D\u01EB\x03\x02\x02\x02\x8F\u01ED\x03" +
		"\x02\x02\x02\x91\u01FE\x03\x02\x02\x02\x93\u0200\x03\x02\x02\x02\x95\u0202" +
		"\x03\x02\x02\x02\x97\u0208\x03\x02\x02\x02\x99\u020C\x03\x02\x02\x02\x9B" +
		"\u021A\x03\x02\x02\x02\x9D\u021C\x03\x02\x02\x02\x9F\u022D\x03\x02\x02" +
		"\x02\xA1\u022F\x03\x02\x02\x02\xA3\u0235\x03\x02\x02\x02\xA5\u0238\x03" +
		"\x02\x02\x02\xA7\u0244\x03\x02\x02\x02\xA9\u0246\x03\x02\x02\x02\xAB\u024D" +
		"\x03\x02\x02\x02\xAD\u0251\x03\x02\x02\x02\xAF\u0269\x03\x02\x02\x02\xB1" +
		"\u026C\x03\x02\x02\x02\xB3\u0272\x03\x02\x02\x02\xB5\u0278\x03\x02\x02" +
		"\x02\xB7\u027A\x03\x02\x02\x02\xB9\u027D\x03\x02\x02\x02\xBB\u0285\x03" +
		"\x02\x02\x02\xBD\u028E\x03\x02\x02\x02\xBF\u0299\x03\x02\x02\x02\xC1\u029C" +
		"\x03\x02\x02\x02\xC3\u02A7\x03\x02\x02\x02\xC5\u02A9\x03\x02\x02\x02\xC7" +
		"\u02B2\x03\x02\x02\x02\xC9\u02B5\x03\x02\x02\x02\xCB\u02B9\x03\x02\x02" +
		"\x02\xCD\u02CC\x03\x02\x02\x02\xCF\xD0\x07/\x02\x02\xD0\xD1\x07@\x02\x02" +
		"\xD1\x04\x03\x02\x02\x02\xD2\xD3\x07=\x02\x02\xD3\x06\x03\x02\x02\x02" +
		"\xD4\xD5\x07A\x02\x02\xD5\b\x03\x02\x02\x02\xD6\xD7\x07<\x02\x02\xD7\n" +
		"\x03\x02\x02\x02\xD8\xD9\x070\x02\x02\xD9\xDA\x070\x02\x02\xDA\xDB\x07" +
		"0\x02\x02\xDB\f\x03\x02\x02\x02\xDC\xDD\x07e\x02\x02\xDD\xDE\x07q\x02" +
		"\x02\xDE\xDF\x07p\x02\x02\xDF\xE0\x07u\x02\x02\xE0\xE1\x07v\x02\x02\xE1" +
		"\x0E\x03\x02\x02\x02\xE2\xE3\x07x\x02\x02\xE3\xE4\x07c\x02\x02\xE4\xE5" +
		"\x07t\x02\x02\xE5\x10\x03\x02\x02\x02\xE6\xE7\x07c\x02\x02\xE7\xE8\x07" +
		"u\x02\x02\xE8\x12\x03\x02\x02\x02\xE9\xEA\x07u\x02\x02\xEA\xEB\x07y\x02" +
		"\x02\xEB\xEC\x07k\x02\x02\xEC\xED\x07v\x02\x02\xED\xEE\x07e\x02\x02\xEE" +
		"\xEF\x07j\x02\x02\xEF\x14\x03\x02\x02\x02\xF0\xF1\x07e\x02\x02\xF1\xF2" +
		"\x07c\x02\x02\xF2\xF3\x07u\x02\x02\xF3\xF4\x07g\x02\x02\xF4\x16\x03\x02" +
		"\x02\x02\xF5\xF6\x07f\x02\x02\xF6\xF7\x07g\x02\x02\xF7\xF8\x07h\x02\x02" +
		"\xF8\xF9\x07c\x02\x02\xF9\xFA\x07w\x02\x02\xFA\xFB\x07n\x02\x02\xFB\xFC" +
		"\x07v\x02\x02\xFC\x18\x03\x02\x02\x02\xFD\xFE\x07d\x02\x02\xFE\xFF\x07" +
		"t\x02\x02\xFF\u0100\x07g\x02\x02\u0100\u0101\x07c\x02\x02\u0101\u0102" +
		"\x07m\x02\x02\u0102\x1A\x03\x02\x02\x02\u0103\u0104\x07e\x02\x02\u0104" +
		"\u0105\x07q\x02\x02\u0105\u0106\x07p\x02\x02\u0106\u0107\x07v\x02\x02" +
		"\u0107\u0108\x07k\x02\x02\u0108\u0109\x07p\x02\x02\u0109\u010A\x07w\x02" +
		"\x02\u010A\u010B\x07g\x02\x02\u010B\x1C\x03\x02\x02\x02\u010C\u010D\x07" +
		"f\x02\x02\u010D\u010E\x07q\x02\x02\u010E\x1E\x03\x02\x02\x02\u010F\u0110" +
		"\x07y\x02\x02\u0110\u0111\x07j\x02\x02\u0111\u0112\x07k\x02\x02\u0112" +
		"\u0113\x07n\x02\x02\u0113\u0114\x07g\x02\x02\u0114 \x03\x02\x02\x02\u0115" +
		"\u0116\x07k\x02\x02\u0116\u0117\x07h\x02\x02\u0117\"\x03\x02\x02\x02\u0118" +
		"\u0119\x07g\x02\x02\u0119\u011A\x07n\x02\x02\u011A\u011B\x07u\x02\x02" +
		"\u011B\u011C\x07g\x02\x02\u011C$\x03\x02\x02\x02\u011D\u011E\x07h\x02" +
		"\x02\u011E\u011F\x07q\x02\x02\u011F\u0120\x07t\x02\x02\u0120&\x03\x02" +
		"\x02\x02\u0121\u0122\x07g\x02\x02\u0122\u0123\x07p\x02\x02\u0123\u0124" +
		"\x07w\x02\x02\u0124\u0125\x07o\x02\x02\u0125(\x03\x02\x02\x02\u0126\u0127" +
		"\x07f\x02\x02\u0127\u0128\x07g\x02\x02\u0128\u0129\x07h\x02\x02\u0129" +
		"*\x03\x02\x02\x02\u012A\u012B\x07t\x02\x02\u012B\u012C\x07g\x02\x02\u012C" +
		"\u012D\x07v\x02\x02\u012D\u012E\x07w\x02\x02\u012E\u012F\x07t\x02\x02" +
		"\u012F\u0130\x07p\x02\x02\u0130,\x03\x02\x02\x02\u0131\u0132\x07e\x02" +
		"\x02\u0132\u0133\x07c\x02\x02\u0133\u0134\x07n\x02\x02\u0134\u0135\x07" +
		"n\x02\x02\u0135.\x03\x02\x02\x02\u0136\u0137\x07u\x02\x02\u0137\u0138" +
		"\x07v\x02\x02\u0138\u0139\x07t\x02\x02\u0139\u013A\x07w\x02\x02\u013A" +
		"\u013B\x07e\x02\x02\u013B\u013C\x07v\x02\x02\u013C0\x03\x02\x02\x02\u013D" +
		"\u013E\x07v\x02\x02\u013E\u013F\x07{\x02\x02\u013F\u0140\x07r\x02\x02" +
		"\u0140\u0141\x07g\x02\x02\u0141\u0142\x07q\x02\x02\u0142\u0143\x07h\x02" +
		"\x02\u01432\x03\x02\x02\x02\u0144\u0145\x07*\x02\x02\u01454\x03\x02\x02" +
		"\x02\u0146\u0147\x07+\x02\x02\u01476\x03\x02\x02\x02\u0148\u0149\x07]" +
		"\x02\x02\u01498\x03\x02\x02\x02\u014A\u014B\x07_\x02\x02\u014B:\x03\x02" +
		"\x02\x02\u014C\u014D\x07}\x02\x02\u014D<\x03\x02\x02\x02\u014E\u014F\x07" +
		"\x7F\x02\x02\u014F>\x03\x02\x02\x02\u0150\u0151\x07-\x02\x02\u0151@\x03" +
		"\x02\x02\x02\u0152\u0153\x07-\x02\x02\u0153\u0154\x07-\x02\x02\u0154B" +
		"\x03\x02\x02\x02\u0155\u0156\x07/\x02\x02\u0156D\x03\x02\x02\x02\u0157" +
		"\u0158\x07/\x02\x02\u0158\u0159\x07/\x02\x02\u0159F\x03\x02\x02\x02\u015A" +
		"\u015B\x07,\x02\x02\u015BH\x03\x02\x02\x02\u015C\u015D\x071\x02\x02\u015D" +
		"J\x03\x02\x02\x02\u015E\u015F\x07\'\x02\x02\u015FL\x03\x02\x02\x02\u0160" +
		"\u0161\x07(\x02\x02\u0161\u0162\x07(\x02\x02\u0162N\x03\x02\x02\x02\u0163" +
		"\u0164\x07~\x02\x02\u0164\u0165\x07~\x02\x02\u0165P\x03\x02\x02\x02\u0166" +
		"\u0167\x07#\x02\x02\u0167R\x03\x02\x02\x02\u0168\u0169\x07.\x02\x02\u0169" +
		"T\x03\x02\x02\x02\u016A\u016B\x07?\x02\x02\u016BV\x03\x02\x02\x02\u016C" +
		"\u016D\x07,\x02\x02\u016D\u016E\x07?\x02\x02\u016EX\x03\x02\x02\x02\u016F" +
		"\u0170\x071\x02\x02\u0170\u0171\x07?\x02\x02\u0171Z\x03\x02\x02\x02\u0172" +
		"\u0173\x07\'\x02\x02\u0173\u0174\x07?\x02\x02\u0174\\\x03\x02\x02\x02" +
		"\u0175\u0176\x07-\x02\x02\u0176\u0177\x07?\x02\x02\u0177^\x03\x02\x02" +
		"\x02\u0178\u0179\x07/\x02\x02\u0179\u017A\x07?\x02\x02\u017A`\x03\x02" +
		"\x02\x02\u017B\u017C\x07?\x02\x02\u017C\u017D\x07?\x02\x02\u017Db\x03" +
		"\x02\x02\x02\u017E\u017F\x07#\x02\x02\u017F\u0180\x07?\x02\x02\u0180d" +
		"\x03\x02\x02\x02\u0181\u0182\x07>\x02\x02\u0182f\x03\x02\x02\x02\u0183" +
		"\u0184\x07>\x02\x02\u0184\u0185\x07?\x02\x02\u0185h\x03\x02\x02\x02\u0186" +
		"\u0187\x07@\x02\x02\u0187j\x03\x02\x02\x02\u0188\u0189\x07@\x02\x02\u0189" +
		"\u018A\x07?\x02\x02\u018Al\x03\x02\x02\x02\u018B\u018C\x070\x02\x02\u018C" +
		"n\x03\x02\x02\x02\u018D\u0192\x05s:\x02\u018E\u0191\x05s:\x02\u018F\u0191" +
		"\x05w<\x02\u0190\u018E\x03\x02\x02\x02\u0190\u018F\x03\x02\x02\x02\u0191" +
		"\u0194\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02" +
		"\x02\x02\u0193p\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0195\u0199" +
		"\x07}\x02\x02\u0196\u0198\t\x02\x02\x02\u0197\u0196\x03\x02\x02\x02\u0198" +
		"\u019B\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02" +
		"\x02\x02\u019A\u019C\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C" +
		"\u019D\x07\x7F\x02\x02\u019Dr\x03\x02\x02\x02\u019E\u01A1\x05u;\x02\u019F" +
		"\u01A1\x05y=\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u019F\x03\x02\x02\x02" +
		"\u01A1t\x03\x02\x02\x02\u01A2\u01A3\t\x03\x02\x02\u01A3v\x03\x02\x02\x02" +
		"\u01A4\u01A5\t\x04\x02\x02\u01A5x\x03\x02\x02\x02\u01A6\u01A7\x07^\x02" +
		"\x02\u01A7\u01A8\x07w\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01B1" +
		"\x05{>\x02\u01AA\u01AB\x07^\x02\x02\u01AB\u01AC\x07W\x02\x02\u01AC\u01AD" +
		"\x03\x02\x02\x02\u01AD\u01AE\x05{>\x02\u01AE\u01AF\x05{>\x02\u01AF\u01B1" +
		"\x03\x02\x02\x02\u01B0\u01A6\x03\x02\x02\x02\u01B0\u01AA\x03\x02\x02\x02" +
		"\u01B1z\x03\x02\x02\x02\u01B2\u01B3\x05\x8FH\x02\u01B3\u01B4\x05\x8FH" +
		"\x02\u01B4\u01B5\x05\x8FH\x02\u01B5\u01B6\x05\x8FH\x02\u01B6|\x03\x02" +
		"\x02\x02\u01B7\u01BB\x05\x7F@\x02\u01B8\u01BB\x05\x99M\x02\u01B9\u01BB" +
		"\x05\xAFX\x02\u01BA\u01B7\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02" +
		"\u01BA\u01B9\x03\x02\x02\x02\u01BB~\x03\x02\x02\x02\u01BC\u01BE\x05\x83" +
		"B\x02\u01BD\u01BF\x05\x91I\x02\u01BE\u01BD\x03\x02\x02\x02\u01BE\u01BF" +
		"\x03\x02\x02\x02\u01BF\u01CA\x03\x02\x02\x02\u01C0\u01C2\x05\x85C\x02" +
		"\u01C1\u01C3\x05\x91I\x02\u01C2\u01C1\x03\x02\x02\x02\u01C2\u01C3\x03" +
		"\x02\x02\x02\u01C3\u01CA\x03\x02\x02\x02\u01C4\u01C6\x05\x87D\x02\u01C5" +
		"\u01C7\x05\x91I\x02\u01C6\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02" +
		"\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01CA\x05\x81A\x02\u01C9\u01BC" +
		"\x03\x02\x02\x02\u01C9\u01C0\x03\x02\x02\x02\u01C9\u01C4\x03\x02\x02\x02" +
		"\u01C9\u01C8\x03\x02\x02\x02\u01CA\x80\x03\x02\x02\x02\u01CB\u01CC\x07" +
		"2\x02\x02\u01CC\u01CE\t\x05\x02\x02\u01CD\u01CF\t\x06\x02\x02\u01CE\u01CD" +
		"\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02" +
		"\u01D0\u01D1\x03\x02\x02\x02\u01D1\x82\x03\x02\x02\x02\u01D2\u01D6\x05" +
		"\x8BF\x02\u01D3\u01D5\x05w<\x02\u01D4\u01D3\x03\x02\x02\x02\u01D5\u01D8" +
		"\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02" +
		"\u01D7\x84\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01DD\x07" +
		"2\x02\x02\u01DA\u01DC\x05\x8DG\x02\u01DB\u01DA\x03\x02\x02\x02\u01DC\u01DF" +
		"\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02" +
		"\u01DE\x86\x03\x02\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01E0\u01E2\x05" +
		"\x89E\x02\u01E1\u01E3\x05\x8FH\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\u01E4" +
		"\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02" +
		"\u01E5\x88\x03\x02\x02\x02\u01E6\u01E7\x072\x02\x02\u01E7\u01E8\t\x07" +
		"\x02\x02\u01E8\x8A\x03\x02\x02\x02\u01E9\u01EA\t\b\x02\x02\u01EA\x8C\x03" +
		"\x02\x02\x02\u01EB\u01EC\t\t\x02\x02\u01EC\x8E\x03\x02\x02\x02\u01ED\u01EE" +
		"\t\n\x02\x02\u01EE\x90\x03\x02\x02\x02\u01EF\u01F1\x05\x93J\x02\u01F0" +
		"\u01F2\x05\x95K\x02\u01F1\u01F0\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02" +
		"\x02\u01F2\u01FF\x03\x02\x02\x02\u01F3\u01F4\x05\x93J\x02\u01F4\u01F5" +
		"\x05\x97L\x02\u01F5\u01FF\x03\x02\x02\x02\u01F6\u01F8\x05\x95K\x02\u01F7" +
		"\u01F9\x05\x93J\x02\u01F8\u01F7\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02" +
		"\x02\u01F9\u01FF\x03\x02\x02\x02\u01FA\u01FC\x05\x97L\x02\u01FB\u01FD" +
		"\x05\x93J\x02\u01FC\u01FB\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02" +
		"\u01FD\u01FF\x03\x02\x02\x02\u01FE\u01EF\x03\x02\x02\x02\u01FE\u01F3\x03" +
		"\x02\x02\x02\u01FE\u01F6\x03\x02\x02\x02\u01FE\u01FA\x03\x02\x02\x02\u01FF" +
		"\x92\x03\x02\x02\x02\u0200\u0201\t\v\x02\x02\u0201\x94\x03\x02\x02\x02" +
		"\u0202\u0203\t\f\x02\x02\u0203\x96\x03\x02\x02\x02\u0204\u0205\x07n\x02" +
		"\x02\u0205\u0209\x07n\x02\x02\u0206\u0207\x07N\x02\x02\u0207\u0209\x07" +
		"N\x02\x02\u0208\u0204\x03\x02\x02\x02\u0208\u0206\x03\x02\x02\x02\u0209" +
		"\x98\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u020A\u020D\x05\x9BN\x02\u020B\u020D\x05\x9DO\x02\u020C\u020A" +
		"\x03\x02\x02\x02\u020C\u020B\x03\x02\x02\x02\u020D\x9A\x03\x02\x02\x02" +
		"\u020E\u0210\x05\x9FP\x02\u020F\u0211\x05\xA1Q\x02\u0210\u020F\x03\x02" +
		"\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0213\x03\x02\x02\x02\u0212" +
		"\u0214\x05\xADW\x02\u0213\u0212\x03\x02\x02\x02\u0213\u0214\x03\x02\x02" +
		"\x02\u0214\u021B\x03\x02\x02\x02\u0215\u0216\x05\xA5S\x02\u0216\u0218" +
		"\x05\xA1Q\x02\u0217\u0219\x05\xADW\x02\u0218\u0217\x03\x02\x02\x02\u0218" +
		"\u0219\x03\x02\x02\x02\u0219\u021B\x03\x02\x02\x02\u021A\u020E\x03\x02" +
		"\x02\x02\u021A\u0215\x03\x02\x02\x02\u021B\x9C\x03\x02\x02\x02\u021C\u021F" +
		"\x05\x89E\x02\u021D\u0220\x05\xA7T\x02\u021E\u0220\x05\xABV\x02\u021F" +
		"\u021D\x03\x02\x02\x02\u021F\u021E\x03\x02\x02\x02\u0220\u0221\x03\x02" +
		"\x02\x02\u0221\u0223\x05\xA9U\x02\u0222\u0224\x05\xADW\x02\u0223\u0222" +
		"\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\x9E\x03\x02\x02\x02" +
		"\u0225\u0227\x05\xA5S\x02\u0226\u0225\x03\x02\x02\x02\u0226\u0227\x03" +
		"\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u0229\x070\x02\x02\u0229" +
		"\u022E\x05\xA5S\x02\u022A\u022B\x05\xA5S\x02\u022B\u022C\x070\x02\x02" +
		"\u022C\u022E\x03\x02\x02\x02\u022D\u0226\x03\x02\x02\x02\u022D\u022A\x03" +
		"\x02\x02\x02\u022E\xA0\x03\x02\x02\x02\u022F\u0231\t\r\x02\x02\u0230\u0232" +
		"\x05\xA3R\x02\u0231\u0230\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02" +
		"\u0232\u0233\x03\x02\x02\x02\u0233\u0234\x05\xA5S\x02\u0234\xA2\x03\x02" +
		"\x02\x02\u0235\u0236\t\x0E\x02\x02\u0236\xA4\x03\x02\x02\x02\u0237\u0239" +
		"\x05w<\x02\u0238\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A" +
		"\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\xA6\x03\x02\x02" +
		"\x02\u023C\u023E\x05\xABV\x02\u023D\u023C\x03\x02\x02\x02\u023D\u023E" +
		"\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0240\x070\x02\x02" +
		"\u0240\u0245\x05\xABV\x02\u0241\u0242\x05\xABV\x02\u0242\u0243\x070\x02" +
		"\x02\u0243\u0245\x03\x02\x02\x02\u0244\u023D\x03\x02\x02\x02\u0244\u0241" +
		"\x03\x02\x02\x02\u0245\xA8\x03\x02\x02\x02\u0246\u0248\t\x0F\x02\x02\u0247" +
		"\u0249\x05\xA3R\x02\u0248\u0247\x03\x02\x02\x02\u0248\u0249\x03\x02\x02" +
		"\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024B\x05\xA5S\x02\u024B\xAA\x03" +
		"\x02\x02\x02\u024C\u024E\x05\x8FH\x02\u024D\u024C\x03\x02\x02\x02\u024E" +
		"\u024F\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u0250\x03\x02" +
		"\x02\x02\u0250\xAC\x03\x02\x02\x02\u0251\u0252\t\x10\x02\x02\u0252\xAE" +
		"\x03\x02\x02\x02\u0253\u0254\x07)\x02\x02\u0254\u0255\x05\xB1Y\x02\u0255" +
		"\u0256\x07)\x02\x02\u0256\u026A\x03\x02\x02\x02\u0257\u0258\x07N\x02\x02" +
		"\u0258\u0259\x07)\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u025B\x05" +
		"\xB1Y\x02\u025B\u025C\x07)\x02\x02\u025C\u026A\x03\x02\x02\x02\u025D\u025E" +
		"\x07w\x02\x02\u025E\u025F\x07)\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260" +
		"\u0261\x05\xB1Y\x02\u0261\u0262\x07)\x02\x02\u0262\u026A\x03\x02\x02\x02" +
		"\u0263\u0264\x07W\x02\x02\u0264\u0265\x07)\x02\x02\u0265\u0266\x03\x02" +
		"\x02\x02\u0266\u0267\x05\xB1Y\x02\u0267\u0268\x07)\x02\x02\u0268\u026A" +
		"\x03\x02\x02\x02\u0269\u0253\x03\x02\x02\x02\u0269\u0257\x03\x02\x02\x02" +
		"\u0269\u025D\x03\x02\x02\x02\u0269\u0263\x03\x02\x02\x02\u026A\xB0\x03" +
		"\x02\x02\x02\u026B\u026D\x05\xB3Z\x02\u026C\u026B\x03\x02\x02\x02\u026D" +
		"\u026E\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F\x03\x02" +
		"\x02\x02\u026F\xB2\x03\x02\x02\x02\u0270\u0273\n\x11\x02\x02\u0271\u0273" +
		"\x05\xB5[\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0271\x03\x02\x02\x02" +
		"\u0273\xB4\x03\x02\x02\x02\u0274\u0279\x05\xB7\\\x02\u0275\u0279\x05\xB9" +
		"]\x02\u0276\u0279\x05\xBB^\x02\u0277\u0279\x05y=\x02\u0278\u0274\x03\x02" +
		"\x02\x02\u0278\u0275\x03\x02\x02\x02\u0278\u0276\x03\x02\x02\x02\u0278" +
		"\u0277\x03\x02\x02\x02\u0279\xB6\x03\x02\x02\x02\u027A\u027B\x07^\x02" +
		"\x02\u027B\u027C\t\x12\x02\x02\u027C\xB8\x03\x02\x02\x02\u027D\u027E\x07" +
		"^\x02\x02\u027E\u0280\x05\x8DG\x02\u027F\u0281\x05\x8DG\x02\u0280\u027F" +
		"\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0283\x03\x02\x02\x02" +
		"\u0282\u0284\x05\x8DG\x02\u0283\u0282\x03\x02\x02\x02\u0283\u0284\x03" +
		"\x02\x02\x02\u0284\xBA\x03\x02\x02\x02\u0285\u0286\x07^\x02\x02\u0286" +
		"\u0287\x07z\x02\x02\u0287\u0289\x03\x02\x02\x02\u0288\u028A\x05\x8FH\x02" +
		"\u0289\u0288\x03\x02\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B\u0289\x03" +
		"\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\xBC\x03\x02\x02\x02\u028D" +
		"\u028F\x05\xBF`\x02\u028E\u028D\x03\x02\x02\x02\u028E\u028F\x03\x02\x02" +
		"\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0292\x07$\x02\x02\u0291\u0293" +
		"\x05\xC1a\x02\u0292\u0291\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02" +
		"\u0293\u0294\x03\x02\x02\x02\u0294\u0295\x07$\x02\x02\u0295\xBE\x03\x02" +
		"\x02\x02\u0296\u0297\x07w\x02\x02\u0297\u029A\x07:\x02\x02\u0298\u029A" +
		"\t\x13\x02\x02\u0299\u0296\x03\x02\x02\x02\u0299\u0298\x03\x02\x02\x02" +
		"\u029A\xC0\x03\x02\x02\x02\u029B\u029D\x05\xC3b\x02\u029C\u029B\x03\x02" +
		"\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029E" +
		"\u029F\x03\x02\x02\x02\u029F\xC2\x03\x02\x02\x02\u02A0\u02A8\n\x14\x02" +
		"\x02\u02A1\u02A8\x05\xB5[\x02\u02A2\u02A3\x07^\x02\x02\u02A3\u02A8\x07" +
		"\f\x02\x02\u02A4\u02A5\x07^\x02\x02\u02A5\u02A6\x07\x0F\x02\x02\u02A6" +
		"\u02A8\x07\f\x02\x02\u02A7\u02A0\x03\x02\x02\x02\u02A7\u02A1\x03\x02\x02" +
		"\x02\u02A7\u02A2\x03\x02\x02\x02\u02A7\u02A4\x03\x02\x02\x02\u02A8\xC4" +
		"\x03\x02\x02\x02\u02A9\u02AD\x07%\x02\x02\u02AA\u02AC\n\x15\x02\x02\u02AB" +
		"\u02AA\x03\x02\x02\x02\u02AC\u02AF\x03\x02\x02\x02\u02AD\u02AB\x03\x02" +
		"\x02\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02B0\x03\x02\x02\x02\u02AF" +
		"\u02AD\x03\x02\x02\x02\u02B0\u02B1\bc\x02\x02\u02B1\xC6\x03\x02\x02\x02" +
		"\u02B2\u02B3\x05\xC9e\x02\u02B3\xC8\x03\x02\x02\x02\u02B4\u02B6\t\x16" +
		"\x02\x02\u02B5\u02B4\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7" +
		"\u02B5\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8\xCA\x03\x02\x02" +
		"\x02\u02B9\u02BA\x071\x02\x02\u02BA\u02BB\x07,\x02\x02\u02BB\u02BF\x03" +
		"\x02\x02\x02\u02BC\u02BE\v\x02\x02\x02\u02BD\u02BC\x03\x02\x02\x02\u02BE" +
		"\u02C1\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02BF\u02BD\x03\x02" +
		"\x02\x02\u02C0\u02C2\x03\x02\x02\x02\u02C1\u02BF\x03\x02\x02\x02\u02C2" +
		"\u02C3\x07,\x02\x02\u02C3\u02C4\x071\x02\x02\u02C4\u02C5\x03\x02\x02\x02" +
		"\u02C5\u02C6\bf\x02\x02\u02C6\xCC\x03\x02\x02\x02\u02C7\u02C9\x07\x0F" +
		"\x02\x02\u02C8\u02CA\x07\f\x02\x02\u02C9\u02C8\x03\x02\x02\x02\u02C9\u02CA" +
		"\x03\x02\x02\x02\u02CA\u02CD\x03\x02\x02\x02\u02CB\u02CD\x07\f\x02\x02" +
		"\u02CC\u02C7\x03\x02\x02\x02\u02CC\u02CB\x03\x02\x02\x02\u02CD\u02CE\x03" +
		"\x02\x02\x02\u02CE\u02CF\bg\x02\x02\u02CF\xCE\x03\x02\x02\x026\x02\u0190" +
		"\u0192\u0199\u01A0\u01B0\u01BA\u01BE\u01C2\u01C6\u01C9\u01D0\u01D6\u01DD" +
		"\u01E4\u01F1\u01F8\u01FC\u01FE\u0208\u020C\u0210\u0213\u0218\u021A\u021F" +
		"\u0223\u0226\u022D\u0231\u023A\u023D\u0244\u0248\u024F\u0269\u026E\u0272" +
		"\u0278\u0280\u0283\u028B\u028E\u0292\u0299\u029E\u02A7\u02AD\u02B7\u02BF" +
		"\u02C9\u02CC\x03\b\x02\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			KipperLexer._serializedATNSegment0,
			KipperLexer._serializedATNSegment1,
		],
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

