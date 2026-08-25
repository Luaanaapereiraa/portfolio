import styled from 'styled-components'
import { sectionFade } from '../../styles/animations'
import { media } from '../../styles/breakpoints'
import { cardHover, glass, pageWrap } from '../../styles/mixins'

export const ContainerContact = styled.section<{ $isActive?: boolean }>`
  ${pageWrap}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 4rem;
  text-align: center;
  scroll-margin-top: 5rem;
  ${sectionFade}

  p {
    max-width: 34rem;
    line-height: 1.65;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['gray-300']};
  }
`

export const PurpleText = styled.p`
  font-size: 0.92rem;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme['purple-300']};
  margin-bottom: 0.65rem;
`

export const IconStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  max-width: 52rem;

  ${media.md} {
    grid-template-columns: 1fr;
    gap: 0.85rem;
    max-width: 24rem;
  }
`

export const ContactCard = styled.a`
  ${glass}
  ${cardHover}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding: 1.4rem 1rem;
  min-width: 0;
  border-radius: 1.25rem;
  text-decoration: none;
  color: ${(props) => props.theme['gray-100']};

  span {
    font-family: 'Roboto Mono', monospace;
    font-size: clamp(0.75rem, 2.5vw, 0.9rem);
    word-break: break-word;
    text-align: center;
  }
`
