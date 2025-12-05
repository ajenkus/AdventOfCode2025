import * as fs from 'fs'

let count: number = 0

fs.readFileSync('src/2/input', 'utf8').split(',').forEach(entry => {
    const ranges: string[] = entry.split('-')
    const start: number = Number.parseInt(ranges[0])
    const end: number = Number.parseInt(ranges[1])

    for (let i: number = start; i <= end; i++) {
        let id: string = i.toString()
        for (let part: number = 2; Math.trunc(id.length / part) > 0; part++) {
            if (id.length % part == 0) {
                const pattern: string = id.slice(0, id.length / part)
                const sequence: RegExpMatchArray = id.match(RegExp(String.raw`.{${id.length / part}}`, 'g'))
                if (sequence.every(value => value == pattern)) {
                    count += Number.parseInt(id)
                    break
                }
            }
        }
    }
})

console.log(count)