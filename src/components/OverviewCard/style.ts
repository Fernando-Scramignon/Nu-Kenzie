import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 156px;
    border-radius: 4px;

    background-color: var(--grey-1);

    @media (min-width: 1024px) {
        height: 90px;
    }
`

const Type = styled.div`
    height: 156px;
    width: 4px;
    border-radius: 4px 0px 0px 4px;

    background-color: var(--color-secondary);

    @media (min-width: 1024px) {
        height: 90px;
    }
`

const TypeSection = styled.div``

const InfoSection = styled.div``

export { Container, TypeSection, InfoSection, Type }
