import { useBingoHandler } from '../hooks/useBingoHandler'
import './BingoTable.scss'
import BingoCard from './BingoCard'
import { BingoCell, BingoRow } from '../bingo.types'

function BingoTable() {
    const [items, handleCellClick] = useBingoHandler()
    return (
        <>
            <div className="bingoTable">
                {Array.isArray(items) &&
                    items.map((row: BingoRow, rowIndex: number) => (
                        <div key={rowIndex} className="bingoTable-row">
                            {row.map(
                                (cellData: BingoCell, colIndex: number) => (
                                    <BingoCard
                                        key={colIndex}
                                        cellData={cellData}
                                        rowIndex={rowIndex}
                                        colIndex={colIndex}
                                        handleCellClick={handleCellClick}
                                    />
                                )
                            )}
                        </div>
                    ))}
            </div>
        </>
    )
}

export default BingoTable
