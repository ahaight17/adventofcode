const path = require("path")
const { readFile } = require("../utils/readInput")

const day1 = () => {
    const input = readFile(path.resolve(__dirname, 'input.txt')).toString().split("\n")

    return([
        part1(input),
        part2(input)
    ])
}

const part2 = (input) => {
    let sum = 0;
    const intStrings = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
    }

    input.forEach((string) => {
        let first = undefined
        let last = undefined

        for(let i = 0; i < string.length ; i++){
            const curr = parseInt(string.charAt(i))
            const front = string.substring(0, i)
            const back = string.substring(i)

            Object.keys(intStrings).forEach((key) => {
                if(front.includes(key) && first === undefined) {
                    first = intStrings[key]
                }
                if(back.includes(key)) {
                    last = intStrings[key]
                }
            })

            if(curr > 0) {
                first === undefined ? first = curr : last = curr
            }
        }
        sum += (first*10)+(last !== undefined ? last : first)
    })

    return sum
}

const part1 = (input) => {
    let sum = 0

    input.forEach((string) => {
        let first = undefined
        let last = undefined

        for(let i = 0; i < string.length; i++){
            const num = parseInt(string.charAt(i))
            if(num > 0) {
                first === undefined ? first = num : last = num
            }
        }
        sum += (first*10)+(last !== undefined ? last : first)
    })

    return sum
}

module.exports = { day1 }