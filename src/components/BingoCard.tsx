import './BingoCard.scss'
import heart from '../assets/heart.png'
import { BingoCardProps } from '../bingo.types'

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
