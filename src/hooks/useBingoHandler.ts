import { useState, useEffect } from 'react'
import initialBingoList from './initialList'
import { BingoList } from '../bingo.types'

export function useBingoHandler(): [
    BingoList,
    (rowIndex: number, colIndex: number) => void
] {
    const [winCondition, setWindCondition] = useState(false)
    const BINGO_STATE = 2
    const [bingoList, setBingoList] = useState<BingoList>(initialBingoList)

    const updateState = (
        indices: [number, number][],
        state: number = BINGO_STATE
    ) => {
        const newBingoList = [...bingoList]
        indices.forEach(([row, col]) => {
            if (newBingoList[row][col].state === 1) {
                newBingoList[row][col].state = state
                setWindCondition(true)
            }
        })
        setBingoList(newBingoList)
    }

    const checkDiagonals = (bingoList: BingoList) => {
        const countDiagonal: [number, number][] = []
        const countReverseDiagonal: [number, number][] = []

        for (let i = 0; i < bingoList.length; i++) {
            if (bingoList[i][i].state) countDiagonal.push([i, i])
            if (bingoList[i][bingoList.length - 1 - i].state)
                countReverseDiagonal.push([i, bingoList.length - 1 - i])
        }

        if (countDiagonal.length === bingoList.length)
            updateState(countDiagonal)
        if (countReverseDiagonal.length === bingoList.length)
            updateState(countReverseDiagonal)
    }

    const checkColumnsAndRows = (bingoList: BingoList) => {
        for (let i = 0; i < bingoList.length; i++) {
            const countColumn: [number, number][] = []
            const countRow: [number, number][] = []
            for (let j = 0; j < bingoList.length; j++) {
                if (bingoList[j][i].state) countColumn.push([j, i])
                if (bingoList[i][j].state) countRow.push([i, j])
            }
            if (countColumn.length === bingoList.length)
                updateState(countColumn)
            if (countRow.length === bingoList.length) updateState(countRow)
        }
    }

    function handleCellClick(rowIndex: number, colIndex: number): void {
        const newBingoList = [...bingoList]

        if (!newBingoList[rowIndex][colIndex].state) {
            newBingoList[rowIndex][colIndex].state = 1
            setBingoList(newBingoList)
            checkDiagonals(newBingoList)
            checkColumnsAndRows(newBingoList)
        }
    }

    function createHeart() {
        const heart = document.createElement('div')
        heart.classList.add('heart')

        heart.style.left = Math.random() * 100 + 'vw'
        heart.style.animationDuration = Math.random() * 1 + 2 + 's'
        heart.style.fontSize = Math.random() * 2 + 1 + 'rem'
        heart.innerText = '❤️'

        document.body.appendChild(heart)

        setTimeout(() => {
            heart.remove()
        }, 5000)
    }
    
    useEffect(() => {
        if (winCondition) {
            const interval = setInterval(createHeart, 35)
            const timer = setTimeout(() => setWindCondition(false), 3000)
            return () => {
                clearTimeout(timer)
                clearInterval(interval)
            }
        }
    }, [winCondition])

    return [bingoList ?? [], handleCellClick]
}
