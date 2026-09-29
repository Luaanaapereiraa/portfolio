import styled from 'styled-components'
import { sectionFade } from '../../styles/animations'
import { media } from '../../styles/breakpoints'
import { cardHover, hudCell, monoLabel, pageWrap } from '../../styles/mixins'

export const ContainerSkills = styled.section<{ $isActive?: boolean }>`
  ${pageWrap}
  display: flex;
  flex-direction: column;
  margin: 0 auto 2rem;
  padding-bottom: 2rem;
  scroll-margin-top: 5rem;
  ${sectionFade}
`

export const SkillCategory = styled.div`
  width: 100%;
  margin-bottom: 2.25rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const CategoryTitle = styled.h3`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.9rem;
  ${monoLabel}
  font-size: 0.74rem;
  color: ${(props) => props.theme.text};

  /* traço até a borda + contagem de itens */
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${(props) => props.theme.line};
  }
`

export const CategoryCount = styled.span`
  color: ${(props) => props.theme['text-faint']};
  order: 2;
`

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
  gap: 0.6rem;

  ${media.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: 6.75rem;
  padding: 1rem 0.6rem;
  ${hudCell}
  ${cardHover}

  /* ícones em cinza, "acendem" com a cor original no hover */
  svg {
    width: 36px;
    height: 36px;
    object-fit: contain;
    filter: grayscale(1) brightness(1.35) contrast(0.9);
    opacity: 0.85;
    transition:
      filter 0.25s ease,
      opacity 0.25s ease;
  }

  @media (hover: hover) {
    &:hover svg {
      filter: none;
      opacity: 1;
    }
  }

  span {
    margin-top: 0.75rem;
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: 0.74rem;
    color: ${(props) => props.theme.text};
    word-break: break-word;
  }
`
