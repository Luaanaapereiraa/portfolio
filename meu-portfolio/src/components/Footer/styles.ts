import styled from 'styled-components'
import { media } from '../../styles/breakpoints'

export const ContainerFooter = styled.footer`
  padding: 1.35rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top: 1px solid ${(props) => props.theme.border};

  p {
    font-size: 0.9rem;
    font-family: 'Roboto Mono', monospace;
    color: ${(props) => props.theme['gray-400']};
    padding: 0 0.5rem;

    ${media.sm} {
      font-size: 0.8rem;
    }
  }
`
