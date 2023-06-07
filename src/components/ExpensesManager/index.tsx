import { Container, InsertionArea, OverviewArea } from './style'

import ExpensesForm from '../ExpensesForm'
import ExpensesTotal from '../ExpensesTotal'
import ExpensesOverview from '../ExpensesOverview'

function ExpensesManager() {
    return (
        <Container>
            <InsertionArea>
                <ExpensesForm />
                <ExpensesTotal />
            </InsertionArea>
            <OverviewArea>
                <ExpensesOverview />
            </OverviewArea>
        </Container>
    )
}

export default ExpensesManager
