import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

body {
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-400']};
    -webkit-font-smoothing: antialiased;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};

}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`
