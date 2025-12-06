import * as fs from "fs"

let input: string [][] = []
fs.readFileSync('src/6/input', 'utf8').split('\n').forEach(line => {
    input.push(line.trim().split(/\s+/))
})

let answers: number[] = []
for (let i = 0; i < input.length - 1; i++) {
    const args: number[] = input[i].map(arg => parseInt(arg))
    for (let j = 0; j < args.length; j++) {
        const operand: string = input[input.length - 1][j]
        answers[j] = answers[j] ?? (operand == '*' ? 1 : 0)
        answers[j] = operand == '*' ? answers[j] * args[j] : answers[j] + args[j]
    }
}
console.log(answers.reduce((count, answer) => count + answer, 0))