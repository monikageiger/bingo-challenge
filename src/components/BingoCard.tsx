import './BingoCard.scss'
import { BingoCardProps, BingoCell } from '../bingo.types'

function BingoCard({
    cellData,
    rowIndex,
    colIndex,
    handleCellClick,
}: BingoCardProps) {
    function getCellClass(cellData: BingoCell): string {
        if (cellData.unique) return 'unique'
        if (cellData.state === 2) return 'bingo'
        if (cellData.state === 1) return 'selected'
        return ''
    }
    return (
        <div
            className={`bingo-cell ${getCellClass(cellData)}`}
            onClick={() => {
                if (cellData.state === 0) handleCellClick(rowIndex, colIndex)
            }}
        >
            <div className="bingo-cell-number"> {cellData.number}</div>
            {cellData.text}
        </div>
    )
}

export default BingoCard
