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
    let joltages: string[] = []
    let pack: Battery[] = entry.trim().split('').map(value =>
        <Battery> {
            joltage: Number.parseInt(value),
            index: 0
        }
    )

    for (let i = 11; i >= 0; i--) {
        const battery: Battery = pack.slice(0, pack.length - i).reduce(max)
        joltages.push(battery.joltage.toString())
        pack = pack.slice(battery.index + 1)
    }
    count += Number.parseInt(joltages.join(''))
})

console.log(count)