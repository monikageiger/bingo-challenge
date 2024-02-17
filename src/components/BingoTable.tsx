import { useBingoHandler } from '../hooks/bingoHandler'
import './BingoTable.scss'
import BingoCard from './BingoCard'
type BingoCell = { state: number; text?: string }
type BingoRow = BingoCell[]

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
