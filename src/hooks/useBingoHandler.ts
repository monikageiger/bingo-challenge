import { useState, useEffect, useRef } from 'react'
import initialBingoBoard from '../utils/initialBoard'
import { BingoBoard } from '../types/bingo.types'

const BINGO_WIN_STATE = 2

/**
 * Custom hook to handle board changes depending on card clicks.
 */
export function useBingoHandler(): [
    BingoBoard,
    (rowIndex: number, colIndex: number) => void
] {
    const [winCondition, setWinCondition] = useState(false)
    const [bingoBoard, setBingoBoard] = useState<BingoBoard>(initialBingoBoard)
    const heartCount = useRef(0)

    /**
     * Updates the state of the cards at the given indices.
     */
    const updateState = (
        indices: [number, number][],
        state: number = BINGO_WIN_STATE
    ) => {
        const newBingoBoard = [...bingoBoard]
        indices.forEach(([row, col]) => {
            if (newBingoBoard[row][col].state === 1) {
                newBingoBoard[row][col].state = state
                setWinCondition(true)
            }
        })
        setBingoBoard(newBingoBoard)
    }

    /**
     * Checks the diagonals of the bingo board for a win.
     */
    const checkDiagonals = (bingoBoard: BingoBoard) => {
        const countDiagonal: [number, number][] = []
        const countReverseDiagonal: [number, number][] = []

        for (let i = 0; i < bingoBoard.length; i++) {
            if (bingoBoard[i][i].state) countDiagonal.push([i, i])
            if (bingoBoard[i][bingoBoard.length - 1 - i].state)
                countReverseDiagonal.push([i, bingoBoard.length - 1 - i])
        }

        if (countDiagonal.length === bingoBoard.length)
            updateState(countDiagonal)
        if (countReverseDiagonal.length === bingoBoard.length)
            updateState(countReverseDiagonal)
    }

    /**
     * Checks the columns and rows of the bingo board for a win.
     */
    const checkColumnsAndRows = (bingoBoard: BingoBoard) => {
        for (let i = 0; i < bingoBoard.length; i++) {
            const countColumn: [number, number][] = []
            const countRow: [number, number][] = []
            for (let j = 0; j < bingoBoard.length; j++) {
                if (bingoBoard[j][i].state) countColumn.push([j, i])
                if (bingoBoard[i][j].state) countRow.push([i, j])
            }
            if (countColumn.length === bingoBoard.length)
                updateState(countColumn)
            if (countRow.length === bingoBoard.length) updateState(countRow)
        }
    }

    /**
     * If the card is not selected, updates the state of the card and checks for a win.
     */
    function handleCardClick(rowIndex: number, colIndex: number): void {
        const newBingoBoard = [...bingoBoard]

        if (!newBingoBoard[rowIndex][colIndex].state) {
            newBingoBoard[rowIndex][colIndex].state = 1
            setBingoBoard(newBingoBoard)
            checkDiagonals(newBingoBoard)
            checkColumnsAndRows(newBingoBoard)
        }
    }
    /**
     * Creates a heart element and adds it to the body.
     */
    function createHeart() {
        if (heartCount.current >= 100) return

        const heart = document.createElement('div')
        heart.classList.add('heart')

        heart.style.left = Math.random() * 100 + 'vw'
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'
        heart.style.fontSize = Math.random() * 2 + 1 + 'rem'
        heart.innerText = '❤️'

        document.body.appendChild(heart)
        heartCount.current += 1

        setTimeout(() => {
            heart.remove()
            heartCount.current -= 1
        }, 5000)
    }

    /**
     * Effect hook for creating hearts when winCondition is true.
     * Hearts are created every 35ms for 3 seconds.
     */

    useEffect(() => {
        if (winCondition) {
            const interval = setInterval(createHeart, 35)
            const timer = setTimeout(() => setWinCondition(false), 3000)
            return () => {
                clearTimeout(timer)
                clearInterval(interval)
            }
        }
    }, [winCondition])

    return [bingoBoard ?? [], handleCardClick]
}
