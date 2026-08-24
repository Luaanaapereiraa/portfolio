import styled from 'styled-components'
import { media } from './breakpoints'

export const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: bold;
  margin: 3rem 0 2rem;
  color: ${(props) => props.theme['purple-300']};
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  text-shadow:
    -1px -1px 0px ${(props) => props.theme['white']},
    -1px 1px 0px ${(props) => props.theme['purple-400']},
    1px -1px 0px ${(props) => props.theme['purple-400']},
    1px 0px 0px ${(props) => props.theme['purple-400']};

  ${media.md} {
    margin: 2rem 0 1.5rem;
  }
`
