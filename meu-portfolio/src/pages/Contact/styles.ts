import styled from 'styled-components'
import { sectionFade } from '../../styles/animations'
import { media } from '../../styles/breakpoints'
import { cardHover, hudPanel, monoLabel, pageWrap } from '../../styles/mixins'

export const ContainerContact = styled.section<{ $isActive?: boolean }>`
  ${pageWrap}
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 4rem;
  scroll-margin-top: 5rem;
  ${sectionFade}

  p {
    max-width: 36rem;
    line-height: 1.65;
    color: ${(props) => props.theme['text-dim']};
  }
`

export const AccentText = styled.p`
  ${monoLabel}
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: none;
  color: ${(props) => props.theme.accent} !important;
  margin-bottom: 0.5rem;
`

export const IconStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  ${media.md} {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`

export const ContactCard = styled.a`
  ${hudPanel}
  ${cardHover}
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  min-width: 0;
  text-decoration: none;
  color: ${(props) => props.theme.text};

  svg {
    flex-shrink: 0;
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    min-width: 0;
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: 0.82rem;
    word-break: break-word;
  }

  small {
    ${monoLabel}
    font-size: 0.64rem;
    color: ${(props) => props.theme['text-faint']};
  }

  @media (hover: hover) {
    &:hover {
      color: ${(props) => props.theme.white};
    }
  }
`
