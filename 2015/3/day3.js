const path = require("path")
const { readFile } = require("../utils/readInput")

const day3 = () => {
    const input = readFile(path.resolve(__dirname, 'input.txt')).toString()

    return([
        part1(input),
        part2(input)
    ])
}

const part2 = (input) => {
    let visitedMap = { "00": true }
    let housesWithPresents = 1
    let sx = 0;
    let sy = 0;
    let rsx = 0;
    let rsy = 0;

    for(let i = 0; i < input.length; i++) {
        const isEven = i%2 === 0
        switch(input.charAt(i)){
            case "^":
                isEven ? sy++ : rsy++
                break
            case "v":
                isEven ? sy-- : rsy--
                break
            case ">":
                isEven ? sx++ : rsx++
                break;
            case "<":
                isEven ? sx-- : rsx--
                break
        }
        
        if(visitedMap[`${sx}${sy}`] !== true || visitedMap[`${rsx}${rsy}`] !== true) {
            housesWithPresents++
        }
        isEven ? visitedMap[`${sx}${sy}`] = true : visitedMap[`${rsx}${rsy}`] = true
    }

    return housesWithPresents
}

const part1 = (input) => {
    let visitedMap = { "00": true }
    let housesWithPresents = 1
    let x = 0;
    let y = 0;

    for(let i = 0; i < input.length; i++) {
        switch(input.charAt(i)){
            case "v":
                y--
                break
            case "^":
                y++
                break
            case ">":
                x++
                break;
            case "<":
                x--
                break
        }

        if(visitedMap[`${x}${y}`] !== true) {
            housesWithPresents++
        }
        visitedMap[`${x}${y}`] = true;
    }

    return housesWithPresents
}

module.exports = { day3 }