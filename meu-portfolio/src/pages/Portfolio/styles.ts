import styled from 'styled-components'
import { sectionFade } from '../../styles/animations'
import { media } from '../../styles/breakpoints'
import { cardHover, glass, pageWrap } from '../../styles/mixins'

export const Container = styled.section<{ $isActive?: boolean }>`
  ${pageWrap}
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  scroll-margin-top: 5rem;
  ${sectionFade}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;

  a {
    text-decoration: none;
    color: inherit;
    min-width: 0;
  }

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.sm} {
    grid-template-columns: 1fr;
  }
`

export const Project = styled.article`
  ${glass}
  ${cardHover}
  padding: 1.25rem 1.1rem 1.35rem;
  height: 100%;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

export const Image = styled.img`
  width: auto;
  max-width: 100%;
  height: 6.5rem;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
`

export const ProjectTitle = styled.h3`
  font-family: Syne, sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
  color: ${(props) => props.theme.white};
`

export const Description = styled.p`
  font-size: 0.92rem;
  line-height: 1.55;
  text-align: center;
  color: ${(props) => props.theme['gray-300']};
`
