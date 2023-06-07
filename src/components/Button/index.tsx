import { IButtonProps } from '../../interfaces'
import { Container } from './style'

import { useNavigate } from 'react-router-dom'

function Button({ children }: IButtonProps) {
    const navigate = useNavigate()

    return <Container onClick={() => navigate('/home')}>{children}</Container>
}

export default Button
