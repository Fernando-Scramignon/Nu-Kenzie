import { Container } from './style'

import logo from '../../assets/nu-kenzie.svg'

function Header() {
    return (
        <Container>
            <img src={logo} alt="Logo" />
        </Container>
    )
}

export default Header
