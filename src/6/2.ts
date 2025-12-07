import * as fs from "fs"

let input: string[] = fs.readFileSync('src/6/input', 'utf8').split('\n')

const args: string[][] = []
const operands: RegExpMatchArray = input.pop().match(/\S\s*/g)
for (let i = 0; i < operands.length; i++) {
    args[i] = args[i] ?? []
    const operand: string = operands[i]
    input = input.map(line => {
        args[i].push(line.slice(0, operand.length - 1))
        return line.slice(operand.length, line.length)
    })
}

let answers: number[] = []
for (let i = 0; i < args.length; i++) {
    const operand: string = operands[i].charAt(0)
    for (let j = 0; j < operands[i].length - 1; j++) {
        let arg: string = ''
        for (let k = 0; k < args[j].length; k++) {
            const digit: string = args[i][k].charAt(j)
            arg = digit != '' ? arg.concat(digit) : arg
        }
        answers[i] = answers[i] ?? (operand == '*' ? 1 : 0)
        answers[i] = operand == '*' ? answers[i] * parseInt(arg) : answers[i] + parseInt(arg)
    }
}
console.log(answers.reduce((count, answer) => count + answer))