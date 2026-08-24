import styled from 'styled-components'
import { media } from '../../styles/breakpoints'

export const ContainerFooter = styled.footer`
  background-color: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-100']};
    padding: 0 0.5rem;

    ${media.sm} {
      font-size: 0.85rem;
    }
  }
`
