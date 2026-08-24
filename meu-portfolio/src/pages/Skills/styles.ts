import styled from 'styled-components'
import { sectionFade } from '../../styles/animations'
import { media } from '../../styles/breakpoints'
import { cardHover, glass, pageWrap } from '../../styles/mixins'

export const ContainerSkills = styled.section<{ $isActive?: boolean }>`
  ${pageWrap}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2rem;
  padding-bottom: 2rem;
  scroll-margin-top: 5rem;
  ${sectionFade}
`

export const SkillCategory = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const CategoryTitle = styled.h3`
  font-family: 'Roboto Mono', monospace;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${(props) => props.theme['purple-300']};
  text-align: center;
  margin-bottom: 1.15rem;
`

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
  gap: 0.85rem;
  justify-items: stretch;

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
  min-height: 7.25rem;
  padding: 1rem 0.6rem;
  border-radius: 1.1rem;
  ${glass}
  ${cardHover}

  svg {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  span {
    margin-top: 0.7rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme['gray-100']};
    font-family: 'Roboto Mono', monospace;
    word-break: break-word;
  }
`
