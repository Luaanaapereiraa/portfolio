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

export const sectionFade = css<{ $isActive?: boolean }>`
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transform: translateY(${(props) => (props.$isActive ? '0' : '20px')});
  transition: opacity 500ms, transform 500ms;
  animation: ${fadeIn} 700ms ease-in-out;
`

export const gentleFloat = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`

export const glowPulse = keyframes`
  0%,
  100% {
    opacity: 0.75;
    transform: scale(0.96);
  }
  50% {
    opacity: 1;
    transform: scale(1.04);
  }
`

/** Flutuação com amplitude definida por --float-y (ex.: -5px) no elemento. */
export const layerFloat = keyframes`
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, var(--float-y, -5px), 0);
  }
`
