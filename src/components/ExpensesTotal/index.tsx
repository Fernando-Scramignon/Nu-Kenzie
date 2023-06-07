import { Container, ExpensesTotalInfo, ExpensesTotalValue } from './style'

function ExpensesTotal() {
    return (
        <Container>
            <ExpensesTotalValue>
                <p>Valor total: </p>
                <span>R$ 8184,00</span>
            </ExpensesTotalValue>
            <ExpensesTotalInfo>
                <p>O valor se refere ao saldo</p>
            </ExpensesTotalInfo>
        </Container>
    )
}

export default ExpensesTotal
