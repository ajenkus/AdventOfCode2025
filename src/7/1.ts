import * as fs from "fs"

let input: string[] = fs.readFileSync('src/7/input', 'utf8').split('\n')
let beams = new Set<number>([...input.shift().matchAll(/S/g)].map(beam => beam.index))

let count: number = 0
input.forEach(line => {
    let split_beams: number[] = [];
    [...line.matchAll(/\^/g)].map(splitter => splitter.index).forEach(splitter => {
        beams.forEach(beam => {
            if (beam == splitter) {
                split_beams.push(beam - 1)
                split_beams.push(beam + 1)
                beams.delete(beam)
                count++
            }
        })
    })
    split_beams.forEach(beam => beams.add(beam))
})
console.log(count)