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
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background:
      radial-gradient(ellipse 70% 50% at 8% -8%, rgba(168, 85, 247, 0.32), transparent 55%),
      radial-gradient(ellipse 50% 40% at 96% 8%, rgba(233, 79, 254, 0.14), transparent 50%),
      radial-gradient(ellipse 50% 30% at 50% 110%, rgba(133, 25, 255, 0.12), transparent 55%);
  }

  #root {
    position: relative;
    z-index: 1;
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
    width: 10px;
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
    background-color: ${(props) => props.theme['gray-500']};
  }

  body,
  input,
  textarea,
  button {
    font-family: Outfit, 'Roboto', sans-serif;
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

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`
