import { Container } from './style'

import Input from '../Input'
import Button from '../Button'
import { Select } from '../Select'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { expensesFormSchema } from '../../schemas'

import { IOverviewCard } from '../../interfaces'
import { usePage } from '../../contexts'

function ExpensesForm() {
    const { overviewCards, setOverviewCards } = usePage()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IOverviewCard>({
        resolver: yupResolver(expensesFormSchema),
    })

    function onSubmitFunction(data: IOverviewCard): void {
        // avoids mutation
        const dataCopy: IOverviewCard = { ...data }
        const newArray = [dataCopy, ...overviewCards]
        setOverviewCards(newArray)
    }

    return (
        <Container onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
                name="description"
                register={register}
                errors={errors}
                description="Descrição"
                placeholder="Digite aqui sua descrição"
                helperText="Ex: Compra de roupas"
            />
            <Input
                name="value"
                register={register}
                errors={errors}
                description="Valor"
                placeholder="Digite aqui o valor"
                type="number"
            />
            <Select
                name="type"
                register={register}
                description="Tipo de valor"
            />
            <Button type="submit">Inserir Valor</Button>
        </Container>
    )
}

export default ExpensesForm
