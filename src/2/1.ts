import * as fs from 'fs'

let count: number = 0

fs.readFileSync('src/2/input', 'utf8').split(',').forEach(entry => {
    const ranges: string[] = entry.split('-')
    const start: number = Number.parseInt(ranges[0])
    const end: number = Number.parseInt(ranges[1])
    for (let i: number = start; i < end + 1; i++) {
        let id: string = i.toString()
        if (id.length % 2 == 0) {
            const half: number = id.length / 2
            if (id.slice(0, half) == id.slice(half)) {
                count += Number.parseInt(id)
            }
        }
    }
})

console.log(count)