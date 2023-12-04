const path = require("path")
const { readFile } = require("../utils/readInput")
const md5 = require("md5")

const day4 = () => {
    const input = readFile(path.resolve(__dirname, 'input.txt')).toString()

    return([
        part1(input),
        part2(input)
    ])
}

const part2 = (input) => {
    const sixZeroes = "000000"
    let secretKey = 0
    let startsWithSixZeroes = false;
    
    while(!startsWithSixZeroes) {
        secretKey++
        const hash = md5(`${input}${secretKey}`)
        if(hash.substring(0, 6) === sixZeroes) {
            startsWithSixZeroes = true
        }
    }

    return secretKey
}

const part1 = (input) => {
    const fiveZeroes = "00000"
    let secretKey = 0
    let startsWithFiveZeroes = false;
    
    while(!startsWithFiveZeroes) {
        secretKey++
        const hash = md5(`${input}${secretKey}`)
        if(hash.substring(0, 5) === fiveZeroes) {
            startsWithFiveZeroes = true
        }
    }

    return secretKey
}

module.exports = { day4 }