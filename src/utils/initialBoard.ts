import { BingoBoard, BingoRow } from '../types/bingo.types'

/**
 * List of bingo topics.
 */
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

/**
 * Initial bingo board.
 */
let bingoBoard: BingoBoard = [
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
        { state: 2, text: 'FIRST DATE BINGO TOPICS', default: true },
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

/**
 * Flattened bingo board for easier manipulation
 */
let flatBingoBoard: BingoRow = bingoBoard.reduce(
    (acc, val) => acc.concat(val),
    []
)

/**
 * Shuffles an array in place randomly.
 */
function shuffleArray(array: string[]): string[] {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

const shuffledListOfStrings: string[] = shuffleArray([...bingoTopics])
let shuffledIndex = 0

flatBingoBoard = flatBingoBoard.map((obj) =>
    !obj.default ? { ...obj, text: shuffledListOfStrings[shuffledIndex++] } : obj
)

bingoBoard = []
while (flatBingoBoard.length)
    bingoBoard.push(flatBingoBoard.splice(0, 5) as BingoRow)

export default bingoBoard
