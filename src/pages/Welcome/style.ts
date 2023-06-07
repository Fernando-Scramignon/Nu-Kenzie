import styled from 'styled-components'

const Container = styled.div`
    min-height: 100vh;
    padding: 0px 30px;
    background-color: var(--grey-4);

    display: flex;
    justify-content: center;
    align-items: center;
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
    }

    p {
        color: var(--grey-2);
    }
`

export { Container, ContentSection }
