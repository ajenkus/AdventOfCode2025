import * as fs from "fs"

let grid: string[] = []
fs.readFileSync('src/4/input', 'utf8').split('\n').forEach(line => grid.push(line.trim()))

function getEmptySpaces(line: number, space: number): number {
    let empty_spaces: number = 0
    for (let i = line; i <= line + 2; i++) {
        if (i < 0 || i >= grid.length) {
            empty_spaces += 3
            continue
        }

        for (let j = space; j <= space + 2; j++) {
            if (j < 0 || j >= grid[i].length || grid[i][j] == '.') {
                empty_spaces++
            }
        }
    }
    return empty_spaces
}

let count: number = 0
for (let line = 0; line < grid.length; line++) {
    for (let space = 0; space < grid[line].length; space++) {
        if (grid[line][space] == '@' && getEmptySpaces(line - 1, space - 1) > 4) {
            count++
        }
    }
}
console.log(count)