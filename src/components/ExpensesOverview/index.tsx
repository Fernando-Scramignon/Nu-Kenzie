import { EmptyOverviewContainer } from './style'

import OverviewCard from '../OverviewCard'
import { usePage } from '../../contexts'
import { useEffect } from 'react'

function ExpensesOverview() {
    const { overviewCards, setOverviewCards } = usePage()

    function testCards() {
        setOverviewCards([
            { description: 'Salário - dezembro', type: 'income', value: 4000 },
            { description: 'Conta - internet', type: 'expense', value: 100 },
            { description: 'Salário - janeiro', type: 'income', value: 4000 },
        ])
    }

    useEffect(() => {
        testCards()
    }, [])

    return (
        <EmptyOverviewContainer>
            <h2>Resumo financeiro</h2>
            {!overviewCards.length && (
                <p>Você ainda não possuí nenhum lançamento</p>
            )}
            {overviewCards.map(({ description, type, value }, index) => (
                <OverviewCard
                    key={index}
                    description={description}
                    type={type}
                    value={value}
                />
            ))}
        </EmptyOverviewContainer>
    )
}

export default ExpensesOverview
