const path = require("path")
const { readFile } = require("../utils/readInput")

const day2 = () => {
    const input = readFile(path.resolve(__dirname, 'input.txt')).toString().split("\n")

    return([
        part1(input),
        part2(input)
    ])
}

const part2 = (input) => {
    let sum = 0
    input.forEach((dimString) => {
        const parts = dimString.split("x").sort((a, b) => parseInt(a) - parseInt(b))
        const vol = parseInt(parts[0]) * parseInt(parts[1]) * parseInt(parts[2])
        const perimeter = (parseInt(parts[0])*2) + (parseInt(parts[1])*2)

        sum += vol + perimeter
    })

    return sum
}

const part1 = (input) => {
    let sum = 0 ;
    // 2*l*w + 2*w*h + 2*h*l
    input.forEach((dimString) => {
        const parts = dimString.split("x")
        const s1 = parseInt(2 * parts[0] * parts[1])
        const s2 = parseInt(2 * parts[0] * parts[2])
        const s3 = parseInt(2 * parts[1] * parts[2])
    
        const smallestSide = Math.min(s1, s2, s3)/2

        sum += (s1 + s2 + s3 + smallestSide)
    })

    return sum
}

module.exports = { day2 }