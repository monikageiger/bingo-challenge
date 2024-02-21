import { useState } from 'react'
import initialBingoList from './initialList'
import { BingoList } from '../bingo.types'

export function useBingoHandler(): [
    BingoList,
    (rowIndex: number, colIndex: number) => void
] {
    const BINGO_STATE = 2
    const [bingoList, setBingoList] = useState<BingoList>(initialBingoList)

    const updateState = (
        indices: [number, number][],
        state: number = BINGO_STATE
    ) => {
        const newBingoList = [...bingoList]
        indices.forEach(([row, col]) => (newBingoList[row][col].state = state))
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
console.log('gi')
        if (!newBingoList[rowIndex][colIndex].state) {
            newBingoList[rowIndex][colIndex].state = 1
            setBingoList(newBingoList)
            checkDiagonals(newBingoList)
            checkColumnsAndRows(newBingoList)
        }
    }
    return [bingoList ?? [], handleCellClick]
}
