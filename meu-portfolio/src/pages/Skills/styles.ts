import styled from 'styled-components'
import { sectionFade } from '../../styles/animations'
import { media } from '../../styles/breakpoints'

export const ContainerSkills = styled.section<{ $isActive?: boolean }>`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2rem;
  padding: 0 1.25rem 2rem;
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
  font-family: 'Roboto Mono', monospace;
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  font-weight: 700;
  color: ${(props) => props.theme['purple-400']};
  text-align: center;
  margin-bottom: 1.5rem;
`

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 1.75rem 1rem;
  justify-items: center;

  ${media.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem 0.75rem;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  svg {
    width: 48px;
    height: 48px;
    object-fit: contain;
    transition: transform 0.3s ease-in-out;

    @media (hover: hover) {
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  span {
    margin-top: 0.75rem;
    font-size: clamp(0.8rem, 2.4vw, 1rem);
    color: ${(props) => props.theme['purple-300']};
    font-family: 'Roboto Mono', monospace;
    word-break: break-word;
  }
`
