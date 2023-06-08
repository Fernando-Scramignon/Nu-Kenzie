import { Container } from './style'

import Input from '../Input'
import Button from '../Button'
import { Select } from '../Select'

function ExpensesForm() {
    return (
        <Container>
            <Input
                title="Descrição"
                placeholder="Digite aqui sua descrição"
                helperText="Ex: Compra de roupas"
            />
            <Input title="Valor" placeholder="Digite aqui o valor" />
            <Select title="Tipo de valor" />
            <Button>Inserir Valor</Button>
        </Container>
    )
}

export default ExpensesForm
