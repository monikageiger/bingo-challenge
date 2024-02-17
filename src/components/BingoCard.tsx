import './BingoCard.scss'
import heart from '../assets/heart.png'
type BingoCell = {
    state: number
    text?: string
    unique?: boolean
    number?: number
}
type BingoCardProps = {
    cell: BingoCell
    rowIndex: number
    cellIndex: number
    onClick: (row: number, col: number) => void
}

function BingoCard({ cell, rowIndex, cellIndex, onClick }: BingoCardProps) {
    return (
        <div
            className={`bingo-cell ${
                cell.unique
                    ? 'unique'
                    : cell.state === 2
                    ? 'bingo'
                    : cell.state === 1
                    ? 'selected'
                    : ''
            }`}
            onClick={() => onClick(rowIndex, cellIndex)}
        >
            {cell.state === 2 && !cell.unique && (
                <img className="bingo-cell-heart" src={heart} alt="heart" />
            )}
            <div className="bingo-cell-number"> {cell.number}</div>
            {cell.text}
        </div>
    )
}

export default BingoCard
