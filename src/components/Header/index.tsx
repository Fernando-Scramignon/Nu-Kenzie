import { Container } from './style'

import logo from '../../assets/nu-kenzie.svg'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigator = useNavigate()

    return (
        <Container>
            <img onClick={() => navigator('/')} src={logo} alt="Logo" />
        </Container>
    )
}

export default Header
