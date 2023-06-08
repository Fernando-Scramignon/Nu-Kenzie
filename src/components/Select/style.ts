import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .select-label {
        font-size: 12px;
        font-weight: 400;
        margin-left: 7px;
    }

    select {
        height: 50px;
        border-radius: 8px;
        padding-left: 16px;

        color: var(--grey-3);

        background: var(--grey-1);

        appearance: none;
        background-image: url('/src/assets/angle-down.svg');
        background-repeat: no-repeat;
        background-size: 0.8em;
        background-position: right 1rem center;

        &:focus {
            outline: 2px solid var(--grey-4);
        }

        option {
            color: var(--grey-3);
            outline: none;
            border: none;
        }
    }
`

export { Container }
