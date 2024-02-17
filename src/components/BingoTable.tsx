import { useBingoHandler } from '../hooks/useBingoHandler'
import './BingoTable.scss'
import BingoCard from './BingoCard'
import { BingoCell, BingoRow } from '../bingo.types'


function BingoTable() {
    const [items, updateArray] = useBingoHandler()
    console.log('items', items)

    return (
        <>
            <div className="bingoTable">
                {Array.isArray(items) &&
                    items.map((row: BingoRow, rowIndex: number) => (
                        <div key={rowIndex} className="bingoTable-row">
                            {row.map((cell: BingoCell, cellIndex: number) => (
                                <BingoCard
                                    key={cellIndex}
                                    cell={cell}
                                    rowIndex={rowIndex}
                                    cellIndex={cellIndex}
                                    onClick={updateArray}
                                />
                            ))}
                        </div>
                    ))}
            </div>
        </>
    )
}

export default BingoTable
