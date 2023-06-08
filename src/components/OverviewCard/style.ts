import styled from 'styled-components'
import { IOverviewCardProps } from '../../interfaces'

const Container = styled.div`
    width: 100%;
    height: 90px;
    border-radius: 4px;

    background-color: var(--grey-1);

    display: flex;
    gap: 14px;
`

const Type = styled.div<IOverviewCardProps>`
    height: 90px;
    width: 4px;
    border-radius: 4px 0px 0px 4px;

    background-color: ${(props) =>
        props.type == 'income' ? 'var(--color-secondary)' : 'var(--grey-2)'};
`

const TypeSection = styled.div``

const InfoSection = styled.div`
    width: 100%;
    padding: 14px 14px 14px 0px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const UpperRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 18px;
        color: var(--grey-4);
    }
`

const LowerRow = styled.div`
    display: flex;
    justify-content: space-between;

    .info-section-type {
        font-size: 14px;
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        color: var(--grey-3);
    }

    .info-section-value {
        font-size: 14px;
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        color: var(--grey-4);
    }
`

export { Container, TypeSection, InfoSection, Type, UpperRow, LowerRow }
