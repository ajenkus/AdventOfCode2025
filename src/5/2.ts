import * as fs from "fs"

interface Range {
    min: number
    max: number
}

let ranges: Range[] = []
let input: string[] = fs.readFileSync('src/5/input', 'utf8').split('\n')
input.slice(0, input.findIndex(value => value == '\r')).forEach(line => {
    const [min, max] = line.split('-').map(item => parseInt(item))
    for (let i = 0; i < ranges.length; i++) {
        if (min < ranges[i].max && max > ranges[i].max) {
            ranges[i].max = max
            ranges[i].min = Math.min(min, ranges[i].min)
            return
        }
    }
    ranges.push({ min, max })
})

console.log(ranges.filter(item => {
    let keep: boolean = true

    for (let i = 0; i < ranges.length; i++) {
        if (item == ranges[i]) { continue }

        const [min, max] = Object.values(ranges[i])
        if (item.min > min && item.max > max) {
            keep = false
        }

        if (item.min > min && item.min < max) {
            item.max = Math.max(max, item.max)
            item.min = Math.min(min, item.min)
            return true
        }
    }
    return keep
}).reduce((accumulator, item) => {
    return accumulator + (item.max - item.min)
}, 0))