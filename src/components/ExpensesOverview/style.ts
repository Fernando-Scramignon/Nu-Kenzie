import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

const Container = styled.div`
    width: 92%;
    max-width: 360px;
    padding-left: 10px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    font-family: 'Nunito', sans-serif;
    font-weight: 700;

    h2 {
        font-size: 16px;
        font-family: inherit;

        animation: ${fadeIn} 1s;
    }

    p {
        font-size: 20px;
        font-family: inherit;

        animation: ${fadeIn} 1.5s;
    }

    @media (min-width: 1024px) {
        padding-left: 0px;
        width: 100%;
        max-width: 550px;
    }
`

export { Container }
