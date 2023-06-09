import styled from 'styled-components'
import { appearFromBottom, fadeIn } from '../../styles/animations'

const Container = styled.form`
    width: 92%;
    max-width: 360px;
    padding: 30px 21px;
    border-radius: 8px;

    background-color: white;
    outline: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    gap: 15px;

    animation: ${fadeIn} 1s;

    button {
        margin-top: 10px;
        width: 100%;
    }

    @media (min-width: 1024px) {
        animation: ${appearFromBottom} 1s;
        min-width: 360px;
    }
`

export { Container }
