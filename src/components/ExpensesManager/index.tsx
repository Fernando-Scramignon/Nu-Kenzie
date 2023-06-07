import { Container } from './style'

import { ExpensesForm } from '../ExpensesForm'
import { ExpensesTotal } from '../ExpensesTotal'

function ExpensesManager() {
    return (
        <Container>
            <ExpensesForm />
            <ExpensesTotal />
        </Container>
    )
}

export default ExpensesManager
