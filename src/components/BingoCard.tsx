import './BingoCard.scss'
import { BingoCardProps, BingoCell } from '../bingo.types'

/**
 * BingoCard component.
 *
 * This component displays a bingo card cell with a number and text.
 * The cell has a class determined by its state and can be clicked to change its state.
 */
function BingoCard({
    cellData,
    rowIndex,
    colIndex,
    handleCellClick,
}: BingoCardProps) {
    /**
     * Returns a CSS class for the cell based on its state.
     */
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
