import { EmptyOverviewContainer } from './style'

import OverviewCard from '../OverviewCard'

function ExpensesOverview() {
    return (
        <EmptyOverviewContainer>
            <h2>Resumo financeiro</h2>
            <p>Você ainda não possuí nenhum lançamento</p>
            <OverviewCard />
        </EmptyOverviewContainer>
    )
}

export default ExpensesOverview
