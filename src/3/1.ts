import * as fs from "fs"

interface Battery {
    joltage: number
    index: number
}

function max(a: Battery, b: Battery, index: number): Battery {
    if (Math.max(a.joltage, b.joltage) > a.joltage) {
        return { joltage: b.joltage, index }
    }
    return a
}

let count: number = 0

fs.readFileSync('src/3/input', 'utf8').split('\n').forEach(entry => {
    let pack: Battery[] = entry.trim().split('').map((value) => <Battery>{ joltage: Number.parseInt(value), index: 0 })
    const a: Battery = pack.filter((_, index) => index != pack.length - 1).reduce(max)
    const b: Battery = pack.slice(a.index + 1).reduce(max)
    count += Number.parseInt(`${a.joltage}${b.joltage}`)
})

console.log(count)