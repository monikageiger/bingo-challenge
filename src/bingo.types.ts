export type BingoCell = {
    state: number
    text?: string
    unique?: boolean
    number?: number
}

export type BingoRow = BingoCell[]

export type BingoList = BingoRow[]

export type BingoCardProps = {
    cell: BingoCell
    rowIndex: number
    cellIndex: number
    onClick: (row: number, col: number) => void
}
