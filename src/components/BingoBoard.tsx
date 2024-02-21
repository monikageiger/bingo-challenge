import { useBingoHandler } from '../hooks/useBingoHandler'
import './BingoBoard.scss'
import BingoCard from './BingoCard'
import { BingoCardType, BingoRow } from '../types/bingo.types'

/**
 * BingoBoard component.
 *
 * Displays a bingo board with rows of bingo cards.
 */
function BingoBoard() {
    const [board, handleCardClick] = useBingoHandler()
    return (
        <>
            <div className="bingoBoard">
                {board.map((row: BingoRow, rowIndex: number) => (
                    <div key={rowIndex} className="bingoBoard-row">
                        {row.map(
                            (cardData: BingoCardType, colIndex: number) => (
                                <BingoCard
                                    key={colIndex}
                                    cardData={cardData}
                                    rowIndex={rowIndex}
                                    colIndex={colIndex}
                                    handleCardClick={handleCardClick}
                                />
                            )
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default BingoBoard
