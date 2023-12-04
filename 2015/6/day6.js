const path = require("path")
const { readFile } = require("../utils/readInput")

const day6 = () => {
    const input = readFile(path.resolve(__dirname, 'input.txt')).toString().split("\n")

    return([
        part1(input),
        part2(input)
    ])
}

const part2 = (input) => {
}

const part1 = (input) => {
    // let lightsMap = [[]]
    // input.forEach((instruction) => {
    //     let i = 0;
    //     const parts = instruction.split(" ")
    //     const command = parts[0] === "toggle" ? parts[0] : `${parts[0]}${parts[1]}`
    //     const startingCoordinates = 
    //     while(i < parts.length) {
    //         if(parts[i] === "toggle"){

    //         }
    //     }
    // })
}

module.exports = { day6 }