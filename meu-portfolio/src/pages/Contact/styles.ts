import styled from 'styled-components'
import { sectionFade } from '../../styles/animations'
import { media } from '../../styles/breakpoints'

export const ContainerContact = styled.section<{ $isActive?: boolean }>`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 1.25rem 3rem;
  text-align: center;
  scroll-margin-top: 5rem;
  ${sectionFade}

  p {
    max-width: 36rem;
    line-height: 1.5;
    padding: 0 0.5rem;
  }
`

export const PurpleText = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme['purple-400']};
  margin-bottom: 0.75rem;
`

export const IconStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  max-width: 36rem;

  ${media.sm} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

export const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1rem;
  min-width: 0;
  border: 1px solid ${(props) => props.theme['purple-400']};
  border-radius: 0.5rem;
  text-decoration: none;
  color: ${(props) => props.theme['gray-300']};
  transition: transform 0.3s ease, background-color 0.3s ease;

  span {
    font-family: 'Roboto Mono', monospace;
    font-size: clamp(0.75rem, 2.5vw, 0.95rem);
    word-break: break-word;
    text-align: center;
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.03);
      background-color: ${(props) => props.theme['gray-700']};
    }
  }
`
