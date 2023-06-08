import { Container, InsertionArea, OverviewArea } from './style'

import ExpensesForm from '../ExpensesForm'
import ExpensesTotal from '../ExpensesTotal'
import ExpensesOverview from '../ExpensesOverview'

import { usePage } from '../../contexts'

function ExpensesManager() {
    const { overviewCards } = usePage()

    return (
        <Container>
            <InsertionArea>
                <ExpensesForm />
                {overviewCards.length > 0 && <ExpensesTotal />}
            </InsertionArea>
            <OverviewArea>
                <ExpensesOverview />
            </OverviewArea>
        </Container>
    )
}

export default ExpensesManager
