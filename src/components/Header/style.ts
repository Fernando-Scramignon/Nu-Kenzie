import styled from 'styled-components'
import { appearFromTop } from '../../styles/animations'

const Container = styled.header`
    height: 65px;
    width: 100%;
    padding: 0px 20px;

    box-shadow: 0px 4px 32px -12px #00000040;
    background-color: var(--grey-0);

    display: flex;
    align-items: center;

    animation: ${appearFromTop} 1s;

    img {
        width: 113;
        height: 18px;
        cursor: pointer;
    }

    @media (min-width: 1024px) {
        padding: 0px 220px;
    }
`

export { Container }
