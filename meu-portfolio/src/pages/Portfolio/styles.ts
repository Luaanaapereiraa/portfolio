import styled from 'styled-components'
import { sectionFade } from '../../styles/animations'
import { media } from '../../styles/breakpoints'

export const Container = styled.section<{ $isActive?: boolean }>`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.25rem;
  display: flex;
  flex-direction: column;
  scroll-margin-top: 5rem;
  ${sectionFade}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;

  a {
    text-decoration: none;
    color: inherit;
    min-width: 0;
  }

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }

  ${media.sm} {
    grid-template-columns: 1fr;
  }
`

export const Project = styled.article`
  background-color: ${(props) => props.theme['gray-800']};
  padding: 1rem;
  height: 100%;
  transition: background-color 0.3s ease-in-out;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme['purple-400']};

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme['gray-700']};
      cursor: pointer;
    }
  }
`

export const Image = styled.img`
  width: auto;
  max-width: 100%;
  height: 6rem;
  object-fit: contain;
  margin-bottom: 0.75rem;
  transition: transform 0.3s ease-in-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.08);
    }
  }
`

export const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: ${(props) => props.theme['purple-400']};
  font-family: 'Roboto Mono', monospace;
`

export const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  text-align: center;
  color: ${(props) => props.theme['gray-300']};
`
