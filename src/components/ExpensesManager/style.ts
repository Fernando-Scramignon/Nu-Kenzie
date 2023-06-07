import styled from 'styled-components'

const Container = styled.main`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 19px;

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: normal;
        justify-content: center;
        gap: 60px;
    }
`

const InsertionArea = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 19px;

    @media (min-width: 1024px) {
        width: auto;
    }
`

const OverviewArea = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
        max-width: 550px;
        align-items: flex-start;
    }
`

export { Container, InsertionArea, OverviewArea }
