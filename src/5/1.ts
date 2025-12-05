import * as fs from "fs"

let input: string[] = fs.readFileSync('src/5/input', 'utf8').split('\n')
let separator: number = input.findIndex(value => value == '\r')
let ranges: string[] = input.slice(0, separator)

let count: number = 0
input.slice(separator + 1, input.length).map(item => parseInt(item)).forEach(id => {
    for (let i = 0; i < ranges.length; i++) {
        const [min, max] = ranges[i].split('-').map(item => parseInt(item))
        if (id >= min && id <= max) {
            count++
            break
        }
    }
})
console.log(count)