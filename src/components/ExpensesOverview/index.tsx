import { EmptyOverviewContainer } from './style'

import OverviewCard from '../OverviewCard'
import { usePage } from '../../contexts'

function ExpensesOverview() {
    const { overviewCards } = usePage()

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
