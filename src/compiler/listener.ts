import { KipperListener } from "./parser";
import { KipperFileContext } from "./file-ctx";
import { ParserRuleContext } from "antlr4ts";
import {
  AdditiveExpressionContext,
  ArgumentExpressionListContext,
  AssignmentExpressionContext,
  AssignmentOperatorContext,
  BlockItemContext,
  BlockItemListContext,
  CastOrConvertExpressionContext, CompilationUnitContext,
  CompoundStatementContext,
  ConditionalExpressionContext,
  ConstantExpressionContext,
  DeclarationContext,
  DeclarationSpecifierContext,
  DeclarationSpecifiersContext,
  DeclaratorContext,
  DesignationContext,
  DesignatorContext,
  DesignatorListContext,
  DirectDeclaratorContext, EndOfItemContext,
  EqualityExpressionContext,
  ExpressionContext,
  ExpressionStatementContext,
  ExternalBlockItemContext,
  ExternalDeclarationContext,
  ExternalFunctionDefinitionContext, ExternalItemContext, FunctionDefinitionContext,
  InitDeclaratorContext,
  InitializerContext,
  InitializerListContext,
  IterationStatementContext,
  JumpStatementContext,
  LabeledStatementContext,
  LogicalAndExpressionContext,
  LogicalOrExpressionContext,
  MultiplicativeExpressionContext,
  NestedParenthesesBlockContext,
  ParameterDeclarationContext,
  ParameterListContext,
  ParameterTypeListContext,
  PostfixExpressionContext,
  PrimaryExpressionContext,
  RelationalExpressionContext,
  SelectionStatementContext,
  StatementContext,
  StorageTypeSpecifierContext,
  TranslationUnitContext,
  TypeSpecifierContext,
  UnaryExpressionContext,
  UnaryOperatorContext
} from "./parser/KipperParser";

/**
 * The listener for a {@link KipperFileContext}, which may generate a logic stream by going through a generated parse
 * tree.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */
export class KipperFileListener implements KipperListener {
  private readonly _fileCtx: KipperFileContext;

  constructor(fileCtx: KipperFileContext) {
    this._fileCtx = fileCtx;
  }

  /**
   * The {@link KipperFileContext} instance responsible for managing this {@link KipperFileListener} instance
   */
  get fileCtx() {
    return this._fileCtx
  }

  /**
   * Enter a parse tree produced by the `externalFunctionDefinition`
   * labeled alternative in `KipperParser.externalItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterExternalFunctionDefinition = (ctx: ExternalFunctionDefinitionContext) => { };

  /**
   * exit a parse tree produced by the `externalFunctionDefinition`
   * labeled alternative in `KipperParser.externalItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitExternalFunctionDefinition = (ctx: ExternalFunctionDefinitionContext) => { };

  /**
   * Enter a parse tree produced by the `externalDeclaration`
   * labeled alternative in `KipperParser.externalItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterExternalDeclaration = (ctx: ExternalDeclarationContext) => { };

  /**
   * exit a parse tree produced by the `externalDeclaration`
   * labeled alternative in `KipperParser.externalItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitExternalDeclaration = (ctx: ExternalDeclarationContext) => { };

  /**
   * Enter a parse tree produced by the `externalBlockItem`
   * labeled alternative in `KipperParser.externalItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterExternalBlockItem = (ctx: ExternalBlockItemContext) => { };

  /**
   * exit a parse tree produced by the `externalBlockItem`
   * labeled alternative in `KipperParser.externalItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitExternalBlockItem = (ctx: ExternalBlockItemContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterPrimaryExpression = (ctx: PrimaryExpressionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPrimaryExpression = (ctx: PrimaryExpressionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.postfixExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterPostfixExpression = (ctx: PostfixExpressionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.postfixExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPostfixExpression = (ctx: PostfixExpressionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.argumentExpressionList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterArgumentExpressionList = (ctx: ArgumentExpressionListContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.argumentExpressionList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitArgumentExpressionList = (ctx: ArgumentExpressionListContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.unaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterUnaryExpression = (ctx: UnaryExpressionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.unaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitUnaryExpression = (ctx: UnaryExpressionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.unaryOperator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterUnaryOperator = (ctx: UnaryOperatorContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.unaryOperator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitUnaryOperator = (ctx: UnaryOperatorContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.castOrConvertExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterCastOrConvertExpression = (ctx: CastOrConvertExpressionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.castOrConvertExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitCastOrConvertExpression = (ctx: CastOrConvertExpressionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.multiplicativeExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterMultiplicativeExpression = (ctx: MultiplicativeExpressionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.multiplicativeExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitMultiplicativeExpression = (ctx: MultiplicativeExpressionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.additiveExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterAdditiveExpression = (ctx: AdditiveExpressionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.additiveExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitAdditiveExpression = (ctx: AdditiveExpressionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.relationalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterRelationalExpression = (ctx: RelationalExpressionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.relationalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitRelationalExpression = (ctx: RelationalExpressionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.equalityExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterEqualityExpression = (ctx: EqualityExpressionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.equalityExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitEqualityExpression = (ctx: EqualityExpressionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.logicalAndExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterLogicalAndExpression = (ctx: LogicalAndExpressionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.logicalAndExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitLogicalAndExpression = (ctx: LogicalAndExpressionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.logicalOrExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterLogicalOrExpression = (ctx: LogicalOrExpressionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.logicalOrExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitLogicalOrExpression = (ctx: LogicalOrExpressionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.conditionalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterConditionalExpression = (ctx: ConditionalExpressionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.conditionalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitConditionalExpression = (ctx: ConditionalExpressionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.assignmentExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterAssignmentExpression = (ctx: AssignmentExpressionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.assignmentExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitAssignmentExpression = (ctx: AssignmentExpressionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.assignmentOperator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterAssignmentOperator = (ctx: AssignmentOperatorContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.assignmentOperator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitAssignmentOperator = (ctx: AssignmentOperatorContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.expression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterExpression = (ctx: ExpressionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.expression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitExpression = (ctx: ExpressionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.constantExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterConstantExpression = (ctx: ConstantExpressionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.constantExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitConstantExpression = (ctx: ConstantExpressionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.declaration`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterDeclaration = (ctx: DeclarationContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.declaration`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitDeclaration = (ctx: DeclarationContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.storageTypeSpecifier`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterStorageTypeSpecifier = (ctx: StorageTypeSpecifierContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.storageTypeSpecifier`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitStorageTypeSpecifier = (ctx: StorageTypeSpecifierContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.declarationSpecifiers`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterDeclarationSpecifiers = (ctx: DeclarationSpecifiersContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.declarationSpecifiers`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitDeclarationSpecifiers = (ctx: DeclarationSpecifiersContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.declarationSpecifier`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterDeclarationSpecifier = (ctx: DeclarationSpecifierContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.declarationSpecifier`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitDeclarationSpecifier = (ctx: DeclarationSpecifierContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.initDeclarator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterInitDeclarator = (ctx: InitDeclaratorContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.initDeclarator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitInitDeclarator = (ctx: InitDeclaratorContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.typeSpecifier`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterTypeSpecifier = (ctx: TypeSpecifierContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.typeSpecifier`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitTypeSpecifier = (ctx: TypeSpecifierContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.declarator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterDeclarator = (ctx: DeclaratorContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.declarator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitDeclarator = (ctx: DeclaratorContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.directDeclarator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterDirectDeclarator = (ctx: DirectDeclaratorContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.directDeclarator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitDirectDeclarator = (ctx: DirectDeclaratorContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.nestedParenthesesBlock`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterNestedParenthesesBlock = (ctx: NestedParenthesesBlockContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.nestedParenthesesBlock`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitNestedParenthesesBlock = (ctx: NestedParenthesesBlockContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.parameterTypeList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterParameterTypeList = (ctx: ParameterTypeListContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.parameterTypeList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitParameterTypeList = (ctx: ParameterTypeListContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.parameterList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterParameterList = (ctx: ParameterListContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.parameterList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitParameterList = (ctx: ParameterListContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.parameterDeclaration`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterParameterDeclaration = (ctx: ParameterDeclarationContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.parameterDeclaration`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitParameterDeclaration = (ctx: ParameterDeclarationContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.initializer`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterInitializer = (ctx: InitializerContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.initializer`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitInitializer = (ctx: InitializerContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.initializerList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterInitializerList = (ctx: InitializerListContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.initializerList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitInitializerList = (ctx: InitializerListContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.designation`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterDesignation = (ctx: DesignationContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.designation`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitDesignation = (ctx: DesignationContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.designatorList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterDesignatorList = (ctx: DesignatorListContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.designatorList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitDesignatorList = (ctx: DesignatorListContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.designator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterDesignator = (ctx: DesignatorContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.designator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitDesignator = (ctx: DesignatorContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.statement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterStatement = (ctx: StatementContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.statement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitStatement = (ctx: StatementContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.labeledStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterLabeledStatement = (ctx: LabeledStatementContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.labeledStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitLabeledStatement = (ctx: LabeledStatementContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.compoundStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterCompoundStatement = (ctx: CompoundStatementContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.compoundStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitCompoundStatement = (ctx: CompoundStatementContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.blockItemList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterBlockItemList = (ctx: BlockItemListContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.blockItemList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitBlockItemList = (ctx: BlockItemListContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.blockItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterBlockItem = (ctx: BlockItemContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.blockItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitBlockItem = (ctx: BlockItemContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.expressionStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterExpressionStatement = (ctx: ExpressionStatementContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.expressionStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitExpressionStatement = (ctx: ExpressionStatementContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.selectionStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterSelectionStatement = (ctx: SelectionStatementContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.selectionStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitSelectionStatement = (ctx: SelectionStatementContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.iterationStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterIterationStatement = (ctx: IterationStatementContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.iterationStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitIterationStatement = (ctx: IterationStatementContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.jumpStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterJumpStatement = (ctx: JumpStatementContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.jumpStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitJumpStatement = (ctx: JumpStatementContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.compilationUnit`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterCompilationUnit = (ctx: CompilationUnitContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.compilationUnit`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitCompilationUnit = (ctx: CompilationUnitContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.translationUnit`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterTranslationUnit = (ctx: TranslationUnitContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.translationUnit`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitTranslationUnit = (ctx: TranslationUnitContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.externalItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterExternalItem = (ctx: ExternalItemContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.externalItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitExternalItem = (ctx: ExternalItemContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.functionDefinition`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterFunctionDefinition = (ctx: FunctionDefinitionContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.functionDefinition`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitFunctionDefinition = (ctx: FunctionDefinitionContext) => { };

  /**
   * Enter a parse tree produced by `KipperParser.endOfItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterEndOfItem = (ctx: EndOfItemContext) => { };

  /**
   * exit a parse tree produced by `KipperParser.endOfItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitEndOfItem = (ctx: EndOfItemContext) => { };
}