import { Container } from './style'

import Header from '../../components/Header'
import ExpensesManager from '../../components/ExpensesManager'

function Home() {
    return (
        <Container>
            <Header />
            <ExpensesManager />
        </Container>
    )
}

export default Home
