import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

const Container = styled.div`
    width: 100%;
    height: 90px;
    border-radius: 4px;

    background-color: var(--grey-1);

    display: flex;
    gap: 10px;

    animation: ${fadeIn} 500ms;
`

const TypeSection = styled.div`
    height: 90px;
    width: 4px;
    border-radius: 4px 0px 0px 4px;
    background-color: var(--grey-2);
`

const MockContentSection = styled.div`
    width: 100%;
    padding: 14px 14px 14px 0px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .lower-bar {
        width: 66%;
    }
`

const GreyBar = styled.div`
    width: 33%;
    height: 12px;
    border-radius: 4px;

    background-color: var(--grey-2);
`

export { Container, TypeSection, MockContentSection, GreyBar }
