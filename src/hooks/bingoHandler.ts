import { useState } from 'react'
import initialBingoList from './initialList'

type BingoCell = { state: number; text?: string }
type BingoRow = BingoCell[]
type BingoList = BingoRow[]

export function useBingoHandler(): [
    BingoList,
    (row: number, col: number) => void
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

    function clickCell(row: number, col: number): void {
        const newBingoList = [...bingoList]
        if (!newBingoList[row][col].state) {
            newBingoList[row][col].state = 1
            setBingoList(newBingoList)
            checkDiagonals(newBingoList)
            checkColumnsAndRows(newBingoList)
        }
        console.log(newBingoList)
    }
    return [bingoList ?? [], clickCell]
}
