import { Container, ContentSection } from './style'

import Button from '../../components/Button'
import logoAlt from '../../assets/nu-kenzie-alt.svg'

function Welcome() {
    return (
        <Container>
            <ContentSection>
                <img src={logoAlt} alt="Logo with alternative colors" />
                <h1>Centralize o Controle das suas finanças</h1>
                <p>De forma rápida e segura</p>
                <Button>Iniciar</Button>
            </ContentSection>
        </Container>
    )
}

export default Welcome
