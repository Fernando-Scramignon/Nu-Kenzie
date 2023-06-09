import { Container } from './style'

import { ISelectProps } from '../../interfaces'

function Select({ description, name, register }: ISelectProps) {
    return (
        <Container>
            <label htmlFor={name} className="select-label">
                {description}
            </label>
            <select {...register(name)} defaultValue={'income'}>
                <option value="income">Entrada</option>
                <option value="expense">Despesa</option>
            </select>
        </Container>
    )
}

export { Select }
