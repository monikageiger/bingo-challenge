import { BingoCell, BingoList, BingoRow } from '../bingo.types'

const bingoTopics = [
    'Favorite holiday destination',
    'Most memorable childhood experience',
    'Dream adventure',
    'Favorite cuisine',
    'Hobbies and interests',
    'Bucket list destinations',
    'Favorite music genre',
    'Pets and pet stories',
    'Family traditions',
    'Favorite books or authors',
    'Guilty pleasures',
    'Future aspirations',
    'Favorite outdoor activities',
    'Cultural experiences',
    'Favorite TV shows or movies',
    'Unique talents',
    'Dream career',
    'Meaningful life experiences',
    'Favorite sports or teams',
    'Ideal weekend plans',
    'Favorite dessert',
    'Favorite type of art',
    'Favorite form of exercise',
    'Dream vehicle',
]

let bingoList: BingoList = [
    [
        { state: 0, number: 0 },
        { state: 0, number: 1 },
        { state: 0, number: 2 },
        { state: 0, number: 3 },
        { state: 0, number: 4 },
    ],
    [
        { state: 0, number: 5 },
        { state: 0, number: 6 },
        { state: 0, number: 7 },
        { state: 0, number: 8 },
        { state: 0, number: 9 },
    ],
    [
        { state: 0, number: 10 },
        { state: 0, number: 11 },
        { state: 2, text: 'FIRST DATE BINGO TOPICS', unique: true },
        { state: 0, number: 13 },
        { state: 0, number: 14 },
    ],
    [
        { state: 0, number: 15 },
        { state: 0, number: 16 },
        { state: 0, number: 17 },
        { state: 0, number: 18 },
        { state: 0, number: 19 },
    ],
    [
        { state: 0, number: 20 },
        { state: 0, number: 21 },
        { state: 0, number: 22 },
        { state: 0, number: 23 },
        { state: 0, number: 24 },
    ],
]

// Flatten the bingoList array
let flatBingoList: BingoCell[] = bingoList.reduce(
    (acc, val) => acc.concat(val),
    []
)


function seededRandom(seed: number) {
    const a = 1664525
    const c = 1013904223
    const m = Math.pow(2, 32)
    let x = seed
    return function () {
        x = (a * x + c) % m
        return x / m
    }
}
// Function to shuffle an array
function shuffleArray(array: string[]): string[] {
    const currentHour = new Date().getHours()
    const random = seededRandom(currentHour)
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

// Shuffle the listOfStrings array
const shuffledListOfStrings: string[] = shuffleArray([...bingoTopics])

// Map over the flatBingoList array to add a text property from the shuffledListOfStrings array to each object
let shuffledIndex = 0
flatBingoList = flatBingoList.map((obj) =>
    obj.state !== 2
        ? { ...obj, text: shuffledListOfStrings[shuffledIndex++] }
        : obj
)

// Convert the flatBingoList array back to a 2D array
bingoList = []
while (flatBingoList.length)
    bingoList.push(flatBingoList.splice(0, 5) as BingoRow)

export default bingoList
