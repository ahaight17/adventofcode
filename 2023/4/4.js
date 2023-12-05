const path = require("path")
const { readFile } = require("../utils/readInput")

const day4 = () => {
    const input = readFile(path.resolve(__dirname, 'input.txt')).toString().split("\n")

    return([
        part1(input),
        part2(input)
    ])
}

const part2 = (input) => {
    let scratchCardCopies = { }

    input.forEach((string, i) => {
        let winningNumberCount = 0;
        const possibleWinners = string.split(": ")[1].split(" | ")[0].split(" ")
        const myNumbers = string.split(": ")[1].split(" | ")[1].split(" ")

        scratchCardCopies[i] = scratchCardCopies[i] === undefined ? 1 : scratchCardCopies[i]+1
    
        possibleWinners.forEach((number) => {
            winningNumberCount +=  myNumbers.includes(number) && number !== "";
        })

        for(let j = i+1; j <= i+winningNumberCount; j++){
            const copies = scratchCardCopies[i]
            scratchCardCopies[j] = scratchCardCopies[j] === undefined ? copies : scratchCardCopies[j] + copies
        }
    })
    
    return Object.values(scratchCardCopies).reduce((sum, curr) => sum + curr, 0)
}

const part1 = (input) => {
    let totalCardValue = 0
    input.forEach((string) => {
        let cardValue = 0;
        const winningNumbers = string.split(": ")[1].split(" | ")[0].split(" ")
        const myNumbers = string.split(": ")[1].split(" | ")[1].split(" ")

        winningNumbers.forEach((number) => {
            const winner = myNumbers.includes(number) && number !== ""

            cardValue = winner ? (cardValue === 0 ? 1 : cardValue*2) : cardValue
        })

        totalCardValue += cardValue
    })

    return totalCardValue
}

module.exports = { day4 }