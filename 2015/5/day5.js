const path = require("path")
const { readFile } = require("../utils/readInput")

const day5 = () => {
    const input = readFile(path.resolve(__dirname, 'input.txt')).toString().split("\n")

    return([
        part1(input),
        part2(input)
    ])
}

const part2 = (input) => {
    let niceStrings = 0

    input.forEach((string) => {
        let pairMap = {}
        let hasLetterPair = false;
        let hasSplitDouble = false;
        for(let i = 0; i < string.length; i++) {
            const curr = string.charAt(i)
            const minusOne = string.charAt(i-1)
            const minusTwo = string.charAt(i-2)
            const pair = `${curr}${minusOne}`

            if(pairMap[pair] !== undefined && pairMap[pair].startingIndex !== undefined && i > pairMap[pair].startingIndex+1) {
                hasLetterPair = true
            }
            
            if(curr === minusTwo) hasSplitDouble = true;

            pairMap[pair] = { "startingIndex": i }
        }
        
        niceStrings += (hasLetterPair && hasSplitDouble)
    })

    return niceStrings
}

const part1 = (input) => {
    let niceStrings = 0
    const vowels = "aeiou"
    const forbiddenStrings = ["ab", "cd", "pq", "xy"]

    input.forEach((string) => {
        let vowelCount = 0;
        let hasDoubleLetter = false;
        let includesForbiddenString = false;
        for(let i = 0; i < string.length; i++) {
            const curr = string.charAt(i)
            const prev = string.charAt(i-1)
            const compareString = `${prev}${curr}`

            if(vowels.includes(curr)) vowelCount++

            if(prev === curr) hasDoubleLetter = true

            if(forbiddenStrings.includes(compareString)) includesForbiddenString = true;
        }

        niceStrings += (vowelCount >= 3 && hasDoubleLetter && !includesForbiddenString)
    })

    return niceStrings
}

module.exports = { day5 }