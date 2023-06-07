import { Container } from './style'

import { ISelectProps } from '../../interfaces'

function Select({ title }: ISelectProps) {
    return (
        <Container>
            <label htmlFor={title} className="select-label">
                {title}
            </label>
            <select name={title} defaultValue={'income'}>
                <option value="income">Entrada</option>
                <option value="outcome">Despesa</option>
            </select>
        </Container>
    )
}

export { Select }
