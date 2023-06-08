import { Container } from './style'

import Input from '../Input'
import Button from '../Button'
import { Select } from '../Select'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { expensesFormSchema } from '../../schemas'

import { IOverviewCard } from '../../interfaces'

function ExpensesForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IOverviewCard>({
        resolver: yupResolver(expensesFormSchema),
    })

    return (
        <Container onClick={() => console.log(errors)}>
            <Input
                name="description"
                register={register}
                description="Descrição"
                placeholder="Digite aqui sua descrição"
                helperText="Ex: Compra de roupas"
            />
            <Input
                name="value"
                register={register}
                description="Valor"
                placeholder="Digite aqui o valor"
                type="number"
            />
            <Select
                name="type"
                register={register}
                description="Tipo de valor"
            />
            <Button>Inserir Valor</Button>
        </Container>
    )
}

export default ExpensesForm
