import { Container } from './style'

import { ISelectProps } from '../../interfaces'

function Select({ description, name }: ISelectProps) {
    return (
        <Container>
            <label htmlFor={name} className="select-label">
                {description}
            </label>
            <select name={name} defaultValue={'income'}>
                <option value="income">Entrada</option>
                <option value="outcome">Despesa</option>
            </select>
        </Container>
    )
}

export { Select }
