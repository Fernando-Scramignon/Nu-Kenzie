import styled from 'styled-components'

const Container = styled.div`
    min-height: 100vh;
    padding-bottom: 50px;

    background-color: var(--grey-0);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 29px;

    @media (min-width: 1920px) {
        gap: 100px;
    }
`

export { Container }
