import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #FD377E;
    --color-primary-2: #E34981;
    --color-secondary: #03B898;

    --grey-1: #F8F9FA;
    --grey-2: #E9ECEF;
    --grey-3: #868E96;
    --grey-4: #212529;
}

* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;

    color: var(--grey-4);
    font-family: 'Inter', sans-serif;
}
`
export { GlobalStyle }
