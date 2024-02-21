export type BingoCardType = {
    state: number
    text?: string
    default?: boolean
    number?: number
}

export type BingoRow = BingoCardType[]

export type BingoBoard = BingoRow[]

export type BingoCardProps = {
    cardData: BingoCardType
    rowIndex: number
    colIndex: number
    handleCardClick: (rowIndex: number, colIndex: number) => void
}
