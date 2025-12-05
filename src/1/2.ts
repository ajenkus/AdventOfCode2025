import * as fs from "fs"

let password: number = 0
let dial_segments: number = 100

fs.readFileSync('src/1/input', 'utf8').split('\n').reduce((dial, value) => {
    const starting: number = dial
    const left: boolean = value.charAt(0) == 'L'
    let rotation: number = Number.parseInt(value.slice(1))
    password += Math.trunc(rotation / dial_segments)
    rotation = rotation >= dial_segments ? rotation % dial_segments : rotation
    dial += left ? -rotation : rotation
    if (dial > 99 || dial < 0) {
        dial += left ? dial_segments : -dial_segments
        password -= starting == 0 ? 1 : 0
        password += dial != 0 ? 1 : 0
    }
    password += dial == 0 ? 1 : 0
    return dial
}, 50)

console.log(password)