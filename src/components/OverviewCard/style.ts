import styled from 'styled-components'
import { IOverviewCardProps } from '../../interfaces'

const Container = styled.div`
    width: 100%;
    height: 156px;
    border-radius: 4px;

    background-color: var(--grey-1);

    @media (min-width: 1024px) {
        height: 90px;
    }
`

const Type = styled.div<IOverviewCardProps>`
    height: 156px;
    width: 4px;
    border-radius: 4px 0px 0px 4px;

    background-color: ${(props) =>
        props.type == 'income' ? 'var(--color-secondary)' : 'var(--grey-2)'};

    @media (min-width: 1024px) {
        height: 90px;
    }
`

const TypeSection = styled.div``

const InfoSection = styled.div``

export { Container, TypeSection, InfoSection, Type }
