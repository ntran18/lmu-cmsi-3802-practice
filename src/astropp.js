import parse from "./parser.js"
import analyze from "./analyzer.js"
import util from "util"

// The parse() function uses Ohm to produce a match object for a given
try {
    // Parser -> match -> analyze -> optimize -> generate
    const match = parse("print 1 * (x - 3);")
    console.log(match)
    // console.log(match)
    const rep = analyze(match)
    // // const optimized = optimize(rep)
    // // const js = generate(optimized)
    // // console.log(rep)
    // // console.table(rep)
    console.log(util.inspect(rep, {depth: 5}))
    // console.log("Syntax ok")
} catch (e) {
    // Log the error message in red
    
    console.error("\x1b[31m%s\x1b[0m", e.message)
    process.exit(1)
}
// console.log(parse("print 1;"))
