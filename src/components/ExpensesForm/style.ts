import styled from 'styled-components'

const Container = styled.div`
    width: 92%;
    min-height: 300px;
    padding: 30px 21px;
    border-radius: 8px;

    background-color: white;
    outline: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
        margin-top: 10px;
        width: 100%;
    }
`

export { Container }
