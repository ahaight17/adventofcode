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
    let powerSum = 0;

    input.forEach((string) => {
        let maxColors = {
            "red": 0,
            "green": 0,
            "blue": 0
        }
        const parts = string.split(": ")
        const allGames = parts[1].split("; ")

        allGames.forEach((game) => {
            const moves = game.split(", ")
            moves.forEach((move) => {
                const moveParts = move.split(" ")
                const amount = parseInt(moveParts[0])

                if(amount > maxColors[moveParts[1]]){
                    maxColors[moveParts[1]] = amount
                }
            })
        })

        powerSum += Object.values(maxColors).reduce((prev, curr) => prev * curr)
    })

    return powerSum
}

const part1 = (input) => {
    let gameSum = 0;
    const maxColors = {
        "red": 12,
        "green": 13,
        "blue": 14
    }

    input.forEach((gameString) => {
        const parts = gameString.split(": ")
        const id = parseInt(parts[0].split("Game")[1].trim())
        const allGames = parts[1].split("; ")
        let isGamePossible = true

        allGames.forEach((game) => {
            const moves = game.split(", ")
            moves.forEach((move) => {
                const moveParts = move.split(" ")
                const amount = parseInt(moveParts[0])

                isGamePossible = (isGamePossible && amount <= maxColors[moveParts[1]])
            })
            
        })
        gameSum += isGamePossible ? id : 0
    })

    return gameSum
}

module.exports = { day2 }