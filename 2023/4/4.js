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
    let totalScratchCards = 0
    let scratchCardCopies = { }
    input.forEach((string) => {
        let winningNumberCount = 0;
        const parts = string.split(": ")

        const id = parseInt(parts[0].split("Card")[1].trim())
        const possibleWinners = parts[1].split(" | ")[0].split(" ")
        const myNumbers = parts[1].split(" | ")[1].split(" ")
        scratchCardCopies[`${id}`] = scratchCardCopies[`${id}`] === undefined ? 1 : scratchCardCopies[`${id}`]
        
        for(let i = 0; i < scratchCardCopies[`${id}`]; i++){
    
            possibleWinners.forEach((number) => {
                const winner = myNumbers.includes(number) && number !== ""
                
                if(winner){
                    winningNumberCount++;

                    scratchCardCopies[`${id+winningNumberCount}`] = scratchCardCopies[`${id+winningNumberCount}`] === undefined ? 2 : scratchCardCopies[`${id+winningNumberCount}`]+1
                }
            })
            for(let i = 0; i < winningNumberCount; i++){
                const copies = scratchCardCopies[`${id}`]
                scratchCardCopies[`${id+i}`] === undefined ? 1+copies : scratchCardCopies[`${id+winningNumberCount}`]+copies
            }
            
            totalScratchCards++
            winningNumberCount = 0;
        }
    })

    return totalScratchCards
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