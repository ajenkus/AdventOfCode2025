import * as fs from "fs"

interface Removed {
    line: number
    space: number
}

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

function getRemoved(grid: string[]): Removed[] {
    let removed: Removed[] = []
    for (let line = 0; line < grid.length; line++) {
        for (let space = 0; space < grid[line].length; space++) {
            if (grid[line][space] == '@' && getEmptySpaces(line - 1, space - 1) > 4) {
                removed.push({ line, space })
            }
        }
    }
    return removed
}

let count: number = 0
let grid: string[] = []
let removed: Removed[] = []

fs.readFileSync('src/4/input', 'utf8').split('\n').forEach(line => grid.push(line.trim()))

do {
    removed = getRemoved(grid)
    count += removed.length
    for (const [_, value] of Object.entries(removed)) {
        const [line, space] = Object.values(value)
        if (line >= 0 && line < grid.length && space >= 0 && space < grid[line].length) {
            let new_line: string[] = grid[line].split('')
            new_line[space] = '.'
            grid[line] = new_line.join('')
        }
    }
} while (removed.length > 0)

console.log(count)