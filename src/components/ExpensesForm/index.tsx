import { Container } from './style'

import Input from '../Input'
import Button from '../Button'
import { Select } from '../Select'

function ExpensesForm() {
    return (
        <Container>
            <Input
                description="Descrição"
                placeholder="Digite aqui sua descrição"
                helperText="Ex: Compra de roupas"
            />
            <Input
                description="Valor"
                placeholder="Digite aqui o valor"
                type="number"
            />
            <Select description="Tipo de valor" />
            <Button>Inserir Valor</Button>
        </Container>
    )
}

export default ExpensesForm
