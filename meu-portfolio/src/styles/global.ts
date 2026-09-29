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
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* grade de interface + vinheta; um brilho ciano bem discreto no topo */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background:
      radial-gradient(ellipse 60% 45% at 15% -10%, rgba(0, 224, 255, 0.08), transparent 60%),
      radial-gradient(ellipse 120% 90% at 50% 50%, transparent 55%, rgba(0, 0, 0, 0.7)),
      linear-gradient(${(props) => props.theme.grid} 1px, transparent 1px) 0 0 / 40px 40px,
      linear-gradient(90deg, ${(props) => props.theme.grid} 1px, transparent 1px) 0 0 / 40px 40px;
  }

  ::selection {
    background: ${(props) => props.theme.accent};
    color: ${(props) => props.theme['on-accent']};
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
    outline: 2px solid ${(props) => props.theme.accent};
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
    border: 2px solid ${(props) => props.theme['line-strong']};
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme['accent-dim']};
  }

  body,
  input,
  textarea,
  button {
    font-family: ${(props) => props.theme.fonts.body};
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
