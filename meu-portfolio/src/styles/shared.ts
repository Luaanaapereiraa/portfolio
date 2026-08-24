import styled from 'styled-components'
import { media } from './breakpoints'

export const SectionTitle = styled.h2`
  position: relative;
  font-size: clamp(1.75rem, 4vw, 2.4rem);
  font-weight: 800;
  margin: 3.5rem 0 2rem;
  text-align: center;
  font-family: Syne, sans-serif;
  letter-spacing: -0.04em;
  color: ${(props) => props.theme.white};
  line-height: 1.15;

  &::before {
    content: attr(data-kicker);
    display: block;
    margin-bottom: 0.55rem;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: lowercase;
    color: ${(props) => props.theme['purple-300']};
  }

  &:not([data-kicker])::before {
    display: none;
  }

  ${media.md} {
    margin: 2.5rem 0 1.5rem;
  }
`
