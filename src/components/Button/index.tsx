import { IButtonProps } from '../../interfaces'
import { Container } from './style'

function Button({ children, type = 'button', onClickFunction }: IButtonProps) {
    return (
        <Container type={type} onClick={onClickFunction}>
            {children}
        </Container>
    )
}

export default Button
