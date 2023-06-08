import { Container } from './style'

import { ISelectProps } from '../../interfaces'

function Select({ description }: ISelectProps) {
    return (
        <Container>
            <label htmlFor={description} className="select-label">
                {description}
            </label>
            <select name={description} defaultValue={'income'}>
                <option value="income">Entrada</option>
                <option value="outcome">Despesa</option>
            </select>
        </Container>
    )
}

export { Select }
