import styled from 'styled-components'

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 12px;
`

const TitleDiv = styled.div`
    .input-label {
        font-size: 12px;
        font-weight: 400;

        margin-left: 7px;
    }
`

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    .helper-text {
        color: var(--grey-3);
        font-size: 12px;
        margin-left: 5px;
    }

    input {
        height: 50px;
        padding-left: 16px;
        border-radius: 8px;

        background-color: var(--grey-1);

        &:focus {
            outline: 2px solid var(--grey-4);
        }

        &::placeholder {
            color: var(--grey-3);
            font-size: 16px;
        }
    }
`

export { Container, TitleDiv, InputDiv }
