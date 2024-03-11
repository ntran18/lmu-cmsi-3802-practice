export class Program {
    construcutor(statements) {
        this.statements = statements
    }
}

export class Assignment {
    constructor(target, source) {
        Object.assign(this, { target, source })
        // this.target = target
        // this.source = source
    }
}

export class PrintStatement {
    constructor(argument) {
        this.argument = argument
    }
}

export class IfStatement {
    constructor(test, consequent, alternate) {
        Object.assign(this, { test, consequent, alternate })
    }
}

export class WhileStatement {
    constructor(test, body) {
        Object.assign(this, { test, body })
    }
}

export class BreakStatement {
    constructor() {}
}


// Expression
export class Variable {
    constructor(name) {
        Object.assign(this, { name })
    }
}

export class Function {
    constructor(name, params, body) {
        Object.assign(this, { name, params, body })
    }
}

export class InstrinsicFunction {
    constructor(name, paramenterCount) {
        Object.assign(this, { name, paramenterCount })
    }
}

export class BinaryExpression {
    constructor(operator, left, right) {
        Object.assign(this, { operator, left, right })
    }
}

export class UnaryExpression {
    constructor(operator, argument) {
        Object.assign(this, { operator, argument })
    }
}

export class CallExpression {
    constructor(callee, args) {
        Object.assign(this, { callee, args })
    }
}