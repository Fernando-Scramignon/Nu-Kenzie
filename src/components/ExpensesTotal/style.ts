import styled from 'styled-components'

const Container = styled.div`
    width: 92%;
    max-width: 360px;
    padding: 20px 25px;
    border-radius: 4px;

    background-color: #ffffff;
    outline: 1px solid #e9ecef;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    gap: 14px;

    @media (min-width: 1024px) {
        width: 100%;
    }
`

const ExpensesTotalValue = styled.div`
    display: flex;
    justify-content: space-between;

    p {
        font-size: 18px;
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        color: var(--grey-4);
    }

    span {
        font-size: 18px;
        font-weight: 700;
        font-family: 'Nunito', sans-serif;
        color: var(--color-primary);
    }
`

const ExpensesTotalInfo = styled.div`
    p {
        font-size: 14px;
        font-weight: 400;
        font-family: 'Nunito', sans-serif;
        color: var(--grey-3);
    }
`

export { Container, ExpensesTotalValue, ExpensesTotalInfo }
