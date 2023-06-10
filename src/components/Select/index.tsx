import { Container } from './style'

import { ISelectProps } from '../../interfaces'

function Select({ id, description, name, register }: ISelectProps) {
    return (
        <Container>
            <label htmlFor={id} className="select-label">
                {description}
            </label>
            <select {...register(name)} defaultValue={'income'} id={id}>
                <option value="income">Entrada</option>
                <option value="expense">Despesa</option>
            </select>
        </Container>
    )
}

export { Select }
