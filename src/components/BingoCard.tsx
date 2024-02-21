import './BingoCard.scss'
import heart from '../assets/heart.png'
import { BingoCardProps } from '../bingo.types'

function BingoCard({
    cellData,
    rowIndex,
    colIndex,
    handleCellClick,
}: BingoCardProps) {
    return (
        <div
            className={`bingo-cell ${
                cellData.unique
                    ? 'unique'
                    : cellData.state === 2
                    ? 'bingo'
                    : cellData.state === 1
                    ? 'selected'
                    : ''
            }`}
            onClick={() => {
                if (cellData.state === 0) handleCellClick(rowIndex, colIndex)
            }}
        >
            {cellData.state === 2 && !cellData.unique && (
                <img className="bingo-cell-heart" src={heart} alt="heart" />
            )}
            <div className="bingo-cell-number"> {cellData.number}</div>
            {cellData.text}
        </div>
    )
}

export default BingoCard
