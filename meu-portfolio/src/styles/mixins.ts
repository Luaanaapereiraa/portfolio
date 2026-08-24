import { css } from 'styled-components'

export const glass = css`
  background: ${(props) => props.theme.surface};
  border: 1px solid ${(props) => props.theme.border};
  backdrop-filter: blur(18px) saturate(1.35);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 18px 40px rgba(0, 0, 0, 0.28);
`

export const cardHover = css`
  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    box-shadow 0.28s ease,
    background 0.28s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
      border-color: ${(props) => props.theme['purple-300']};
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.06),
        0 18px 40px ${(props) => props.theme.glow};
    }
  }
`

export const pageWrap = css`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`
