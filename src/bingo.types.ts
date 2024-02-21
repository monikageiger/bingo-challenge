export type BingoCell = {
    state: number
    text?: string
    unique?: boolean
    number?: number
}

export type BingoRow = BingoCell[]

export type BingoBoard = BingoRow[]

export type BingoCardProps = {
    cellData: BingoCell
    rowIndex: number
    colIndex: number
    handleCellClick: (rowIndex: number, colIndex: number) => void
}
