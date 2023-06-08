import { Container, ContentSection, SVGSection } from './style'

import welcomeillustration from '../../assets/nu-kenzie-welcome.svg'
import logoAlt from '../../assets/nu-kenzie-alt.svg'

import Button from '../../components/Button'

import { useEffect } from 'react'
import { usePage } from '../../contexts'

import { DESKTOP_BREAKPOINT } from '../../constants'

function Welcome() {
    const { isDesktop, setIsDesktop } = usePage()

    function handleResize(): void {
        if (window.innerWidth < DESKTOP_BREAKPOINT) setIsDesktop(false)
        else setIsDesktop(true)
    }

    useEffect(() => window.addEventListener('resize', handleResize), [])

    return (
        <Container>
            <ContentSection>
                <img src={logoAlt} alt="Logo with alternative colors" />
                <h1>Centralize o controle das suas finanças</h1>
                <p>De forma rápida e segura</p>
                <Button>Iniciar</Button>
            </ContentSection>
            {isDesktop && (
                <SVGSection>
                    <img
                        src={welcomeillustration}
                        alt="Welcome page illustration"
                    />
                </SVGSection>
            )}
        </Container>
    )
}

export default Welcome
