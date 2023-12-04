const path = require("path")
const { readFile } = require("../utils/readInput")

const day1 = () => {
    const input = readFile(path.resolve(__dirname, 'input.txt')).toString()

    return([
        part1(input),
        part2(input)
    ])
}

const part2 = (input) => {
    let i = 0;
    let floor = 0;
    let floorIsNegative = false;
    while(!floorIsNegative) {
        input.charAt(i) === "(" ? floor++ : floor--
        i++
        floor < 0 ? floorIsNegative = true : floorIsNegative = false;
    }

    return i
}

const part1 = (input) => {
    let floor = 0;
    for(let i = 0; i < input.length; i++) {
        input.charAt(i) === "(" ? floor++ : floor--
    }

    return floor
}

module.exports = { day1 }