import { Container, ExpensesTotalInfo, ExpensesTotalValue } from './style'
import { IExpensesTotalProps } from '../../interfaces'
import { BRLcurrency } from '../../utils'

function ExpensesTotal({ value }: IExpensesTotalProps) {
    return (
        <Container>
            <ExpensesTotalValue>
                <p>Valor total: </p>
                <span>{BRLcurrency.format(value)}</span>
            </ExpensesTotalValue>
            <ExpensesTotalInfo>
                <p>O valor se refere ao saldo</p>
            </ExpensesTotalInfo>
        </Container>
    )
}

export default ExpensesTotal
