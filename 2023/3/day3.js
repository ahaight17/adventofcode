const path = require("path")
const { readFile } = require("../utils/readInput")

const day3 = () => {
    const input = readFile(path.resolve(__dirname, 'input.txt')).toString().split("\n")

    return([
        part1(input),
        part2(input)
    ])
}
/**
 * We take a two pass solution here where the first pass constructs
 * the map of symbols using their x,y corrdinates in string form as an id.
 * We also take note if this is a possible gear symbols for pt.2 and an 
 * array of adjacent numbers for calculating the gear ratio.
 * 
 * The second pass parses each number and associates it with any nearby
 * symbols if applicable.
 * 
 * For part 1, we sum each adjacent number
 * For part 2, we check each symbol and determine if it is a gear to create the gear ratio sum
 * 
 * @param {*} input input as array of strings
 * @returns 
 */
const part2 = (input) => {
    let gearRatioTotal = 0;
    const period = "."
    const digits = "0123456789"
    const gear = "*"
    let symbolsMap = {}
    let digitsMap = { "symbolAdjacent": false, "digits": [] }
    let adjacentSymbols = {}
    
    input.forEach((string, y) => {
        for (let x = 0; x < string.length; x++){
            if (!digits.includes(string.charAt(x)) && string.charAt(x) !== period) {
                symbolsMap[`${x},${y}`] = {
                    isGear: string.charAt(x) === gear,
                    adjacentNumbers: []
                }
            }
        }
    })
    
    input.forEach((string, y) => {
        for (let x = 0; x < string.length; x++){
            if (digits.includes(string.charAt(x))) {
                let adjacentSymbol = checkForAdjacentSymbol(x, y, symbolsMap)

                if (adjacentSymbol !== undefined) {
                    adjacentSymbols[adjacentSymbol] = true
                }
                digitsMap = {
                    symbolAdjacent: adjacentSymbol !== undefined ? true : digitsMap.symbolAdjacent,
                    digits: [
                        ...digitsMap.digits,
                        string.charAt(x)
                    ]
                }
            } else {
                if(digitsMap.digits.length > 0) {
                    let num = parseInt(digitsMap.digits.join(""))
                    const symbolsToAssociateWithNumber = Object.keys(adjacentSymbols)

                    for(let i = 0; i < symbolsToAssociateWithNumber.length; i++) {
                        symbolsMap[symbolsToAssociateWithNumber[i]] = {
                            ...symbolsMap[symbolsToAssociateWithNumber[i]],
                            adjacentNumbers: [
                                ...symbolsMap[symbolsToAssociateWithNumber[i]].adjacentNumbers,
                                num,
                            ]
                        }
                    }

                    digitsMap = { "symbolAdjacent": false, "digits": [] }
                    adjacentSymbols = {}
                }
            }
        }
    })
    
    Object.keys(symbolsMap).forEach((key) => {
        if(symbolsMap[key].isGear && symbolsMap[key].adjacentNumbers.length === 2) {
            gearRatioTotal += (symbolsMap[key].adjacentNumbers[0] * symbolsMap[key].adjacentNumbers[1])
        }
    })

    return gearRatioTotal
}

const part1 = (input) => {
    let partNumSum = 0;
    const period = "."
    const digits = "0123456789"
    let symbolsMap = {}
    let digitsMap = { "symbolAdjacent": false, "digits": [] }
    
    input.forEach((string, y) => {
        for (let x = 0; x < string.length; x++){
            if (!digits.includes(string.charAt(x)) && string.charAt(x) !== period) {
                symbolsMap[`${x},${y}`] = true
            }
        }
    })
    
    input.forEach((string, y) => {
        for (let x = 0; x < string.length; x++){
            if (digits.includes(string.charAt(x))) {
                digitsMap = {
                    symbolAdjacent: checkForAdjacentSymbol(x, y, symbolsMap, string.charAt(x)) ? true : digitsMap.symbolAdjacent,
                    digits: [
                        ...digitsMap.digits,
                        string.charAt(x)
                    ]
                }
            } else {
                if(digitsMap.digits.length > 0) {
                    partNumSum += digitsMap.symbolAdjacent ? parseInt(digitsMap.digits.join("")) : 0

                    digitsMap = { "symbolAdjacent": false, "digits": [] }
                }
            }
        }
    })

    return partNumSum
}

const checkForAdjacentSymbol = (x, y, symbolsMap) => {
    for(let i = x-1; i <= x+1; i++){
        for(let j = y-1; j <= y+1; j++){
            if(symbolsMap[`${i},${j}`] !== undefined) {
                return `${i},${j}`
            }
        }
    }
    return undefined
}

module.exports = { day3 }