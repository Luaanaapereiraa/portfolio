import { css, keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const float = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`

export const sectionFade = css<{ $isActive?: boolean }>`
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transform: translateY(${(props) => (props.$isActive ? '0' : '20px')});
  transition: opacity 500ms, transform 500ms;
  animation: ${fadeIn} 700ms ease-in-out;
`
