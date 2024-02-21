import './BingoCard.scss'
import { BingoCardProps, BingoCardType } from '../types/bingo.types'

/**
 * BingoCard component.
 *
 * Displays a bingo card with a number and text.
 */
function BingoCard({
    cardData,
    rowIndex,
    colIndex,
    handleCardClick,
}: BingoCardProps) {
    /**
     * Default class is used for the middle card, bingo is when the card is in a winning condition, and selected is when the card is clicked.
     */
    function getCardClass(cardData: BingoCardType): string {
        if (cardData.default) return 'default'
        if (cardData.state === 2) return 'bingo'
        if (cardData.state === 1) return 'selected'
        return ''
    }

    return (
        <div
            className={`bingo-card ${getCardClass(cardData)}`}
            onClick={() => {
                if (cardData.state === 0) handleCardClick(rowIndex, colIndex)
            }}
        >
            <div className="bingo-card-number"> {cardData.number}</div>
            {cardData.text}
        </div>
    )
}

export default BingoCard
