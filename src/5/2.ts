import * as fs from "fs"

interface Range {
    from: number
    to: number
}

let ranges: Range[] = []
let input: string[] = fs.readFileSync('src/5/input', 'utf8').split('\n')

input.slice(0, input.findIndex(value => value == '')).forEach(line => {
    const [from, to] = line.split('-').map(item => parseInt(item))
    ranges.push({ from, to })
})
ranges.sort((a, b) => a.from - b.from)

let removed: number
do {
    removed = 0
    for (let i = 0; i < ranges.length - 1; i++) {
        const a: Range = ranges[i]
        const b: Range = ranges[i + 1]
        if ((b.from >= a.from && b.from <= a.to) || (b.from <= a.from && b.to >= a.to)) {
            a.from = Math.min(a.from, b.from)
            a.to = Math.max(a.to, b.to)
            ranges.splice(i + 1, 1)
            removed++
        }
    }
} while (removed > 0)

console.log(ranges.reduce((count, range) => { return count + (range.to + 1 - range.from) }, 0))