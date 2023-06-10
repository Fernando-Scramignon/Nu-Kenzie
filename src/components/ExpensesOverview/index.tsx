import { Container } from './style'

import OverviewCard from '../OverviewCard'
import EmptyOverviewCard from '../EmptyOverviewCard'
import { usePage } from '../../contexts'

function ExpensesOverview() {
    const { overviewCards } = usePage()

    return (
        <Container>
            <h2>Resumo financeiro</h2>
            {!overviewCards.length && (
                <p>Você ainda não possuí nenhum lançamento</p>
            )}
            {overviewCards.length == 0 && (
                <>
                    <EmptyOverviewCard />
                    <EmptyOverviewCard />
                    <EmptyOverviewCard />
                </>
            )}
            {overviewCards.map(({ description, type, value, id }, index) => (
                <OverviewCard
                    id={id}
                    key={index}
                    description={description}
                    type={type}
                    value={value}
                />
            ))}
        </Container>
    )
}

export default ExpensesOverview
