import { useBingoHandler } from '../hooks/useBingoHandler'
import './BingoTable.scss'
import BingoCard from './BingoCard'
import winner from '../assets/winner.gif'
import heart from '../assets/heart.png'
import { BingoCell, BingoRow } from '../bingo.types'

function BingoTable() {
    const [items, handleCellClick, winCondition] = useBingoHandler()
    return (
        <>
            <div className="bingoTable">
                {winCondition && (
                    <img src={winner} alt="" className="bingoTable-win" />
                )}
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
