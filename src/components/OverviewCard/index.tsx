import {
    Container,
    TypeSection,
    Type,
    InfoSection,
    UpperRow,
    LowerRow,
} from './style'

import { IOverviewCard, IOverviewCardProps } from '../../interfaces'
import { IExpensesType } from '../../interfaces'

import { usePage } from '../../contexts'

import { FaTrash } from 'react-icons/fa'

import { BRLcurrency } from '../../utils'

const ExpensesTypeMap: IExpensesType = {
    income: 'Entrada',
    expense: 'Saída',
}

function OverviewCard({ type, description, value, id }: IOverviewCardProps) {
    const { overviewCards, setOverviewCards, decrementCardIdCounter } =
        usePage()

    function deleteOverviewCardsFromLocalStorage(id: number): boolean {
        const overviewCardsJSON = localStorage.getItem('overviewCards')

        if (!overviewCardsJSON) {
            console.error("Couldn't find overview cards in local storage")
            return false
        }

        const overviewCards: Array<IOverviewCard> =
            JSON.parse(overviewCardsJSON)

        const filteredOverviewCards = overviewCards.filter(
            (card) => card.id != id
        )
        if (filteredOverviewCards.length == overviewCards.length) {
            console.error("Couldn't find overview card with matching id")
            return false
        }

        localStorage.setItem(
            'overviewCards',
            JSON.stringify(filteredOverviewCards)
        )

        return true
    }

    function deleteOverviewCard(): void {
        deleteOverviewCardsFromLocalStorage(id)
        const filteredCards = overviewCards.filter((card) => card.id != id)
        decrementCardIdCounter()
        setOverviewCards(filteredCards)
    }

    return (
        <Container>
            <TypeSection>
                <Type type={type} />
            </TypeSection>
            <InfoSection>
                <UpperRow>
                    <h3>{description}</h3>
                    <div className="trash" onClick={deleteOverviewCard}>
                        <FaTrash fill="#343A40" size="12px" cursor="pointer" />
                    </div>
                </UpperRow>
                <LowerRow>
                    <span className="info-section-type">
                        {ExpensesTypeMap[type]}
                    </span>
                    <span className="info-section-value">
                        {BRLcurrency.format(value)}
                    </span>
                </LowerRow>
            </InfoSection>
        </Container>
    )
}

export default OverviewCard
