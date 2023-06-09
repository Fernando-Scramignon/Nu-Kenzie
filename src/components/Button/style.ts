import styled from 'styled-components'

const Container = styled.button`
    height: 42px;
    width: 180px;
    border-radius: 8px;

    background-color: var(--color-primary);

    display: flex;
    justify-content: center;
    align-items: center;

    color: #ffffff;
    font-size: 16px;
    font-weight: 500;

    cursor: pointer;
    transition: 500ms;
    &:hover {
        background-color: var(--color-primary-2);
    }
`

export { Container }
