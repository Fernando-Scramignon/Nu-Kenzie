import styled from 'styled-components'
import { appearFromRight, fadeIn } from '../../styles/animations'

const Container = styled.div`
    min-height: 100vh;
    padding: 0px 30px;
    background-color: var(--grey-4);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
`

const ContentSection = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 25px;

    line-height: small;

    h1 {
        font-family: 'Nunito', sans-serif;
        font-size: 30px;
        color: #ffffff;

        animation: ${fadeIn} 300ms;
    }

    p {
        color: var(--grey-2);

        animation: ${fadeIn} 800ms;
    }

    button {
        font-weight: 500;
        width: 280px;

        animation: ${fadeIn} 500ms;
    }

    img {
        animation: ${appearFromRight} 2s;
    }

    @media (min-width: 1024px) {
        h1 {
            font-size: 36px;
        }

        p {
            font-size: 18px;
        }

        button {
            font-size: 16px;
        }
    }
`

const SVGSection = styled.section`
    img {
        max-height: 500px;
        height: fit-content;
        width: fit-content;
        animation: ${fadeIn} 2s;
    }
`

export { Container, ContentSection, SVGSection }
