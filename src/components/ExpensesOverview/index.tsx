import { EmptyOverviewContainer } from './style'

import OverviewCard from '../OverviewCard'

function ExpensesOverview() {
    return (
        <EmptyOverviewContainer>
            <h2>Resumo financeiro</h2>
            <p>Você ainda não possuí nenhum lançamento</p>
            <OverviewCard
                type="income"
                description="Salário - Junho"
                value={3000}
            />
            <OverviewCard
                type="outcome"
                description="Conta - Internet"
                value={80}
            />
        </EmptyOverviewContainer>
    )
}

export default ExpensesOverview
