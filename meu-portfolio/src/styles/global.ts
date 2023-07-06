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
   overflow-x: hidden;
   
}

::-webkit-scrollbar {
    width: 11px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border: 2px solid ${(props) => props.theme['purple-400']};;
    border-radius: 20px;

  }

  ::-webkit-scrollbar-thumb:hover { 
    background-color: ${(props) => props.theme['gray-300']};;
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
