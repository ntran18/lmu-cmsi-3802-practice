import * as core from "./core.js";

export default function analyze(match) {
  // const analyzer = {}
  // Create action dictionary where matching grammar with program representation
  const analyzer = match.matcher.grammar.createSemantics().addOperation("rep", {
    Program(statements) {
      return new core.Program(statements.children.map((s) => s.rep())) // Since Program is a sequence of statement++, it return a node, and we need to call children to get an array of statements
    },
    Assignment(id, _eq, expression, _semi) {
      return new core.Assignment(id.sourceString, expression.rep())
    },
    Print(_print, expression, _semi) {
      return new core.PrintStatement(expression.rep())
    },
    IfStmt(_if, exp, block, elsePart) {
      return new core.IfStatement(exp.rep(), block.rep(), elsePart.rep())
    },
    ElsePart_nested_if(_else, stmt) {},
    ElsePart_else_block(_else, block) {},
    WhileStmt(_while, exp, block) {
      return new core.WhileStatement(exp.rep(), block.rep())
    },
    Block(_open, statements, _close) {
      return statements.children.map((s) => s.rep())
    },
    BreakStmt(_break, _semi) {
      return new core.BreakStatement()
    },
    Exp_comparison(left, op, right) {
      return new core.BinaryExpression(op.sourceString, left.rep(), right.rep())
    },
    Exp1_binary(left, op, right) {
      return new core.BinaryExpression(op.sourceString, left.rep(), right.rep())
    },
    Term_binary(left, op, right) {
      return new core.BinaryExpression(op.sourceString, left.rep(), right.rep())
    },
    Factor_binary(left, op, right) {
      return new core.BinaryExpression(op.sourceString, left.rep(), right.rep())
    },
    Factor_negation(op, operand) {
      return new core.UnaryExpression(op.sourceString, operand.rep())
    },
    Primary_call(id, _open, args, _close) {},
    Primary_parens(_open, exp, _close) {
      return exp.rep()  // throw away paraenthesis and only care representation of expression. 
    },
    Primary_id(id) {
      return new core.Variable(id.sourceString)
    },
    numeral(_main, _dot, _frac, _e, _sign, _exp) {
      return Number(this.sourceString) // this.SourceString is actual text from the source code
    }
  })

  return analyzer(match).rep()
}

// export default function analyze(match) {
//   return new core.Program([
//     new core.Assignment(new core.Variable("x", new core.InstrinsicFunction("print", 1)),)
//   ])
// }