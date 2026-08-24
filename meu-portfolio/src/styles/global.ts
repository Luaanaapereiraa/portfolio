import { createGlobalStyle } from 'styled-components'
import { media } from './breakpoints'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-400']};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
    display: block;
  }

  :focus-visible {
    outline: 2px solid ${(props) => props.theme['purple-400']};
    outline-offset: 2px;
  }

  ::-webkit-scrollbar {
    width: 11px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border: 2px solid ${(props) => props.theme['purple-400']};
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme['gray-300']};
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ${media.md} {
    body,
    input,
    textarea,
    button {
      font-size: 0.95rem;
    }
  }
`
