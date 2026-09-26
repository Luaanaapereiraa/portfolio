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
  gap: 1.25rem;
  scroll-margin-top: 5rem;
  ${sectionFade}
`

export const FeaturedCard = styled.article`
  ${glass}
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 2rem;
  padding: 2rem;
  border-radius: 1.5rem;
  border-color: ${(props) => props.theme['purple-400']};

  &::before {
    content: '';
    position: absolute;
    inset: -40% -20% auto auto;
    width: 60%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(circle, ${(props) => props.theme.glow}, transparent 70%);
    filter: blur(20px);
    pointer-events: none;
  }

  > * {
    position: relative;
  }

  ${media.md} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem 1.25rem;
  }
`

export const FeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
`

export const Highlights = styled.ul`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 0;
  padding: 1.25rem;
  border-radius: 1rem;
  background: rgba(9, 8, 14, 0.45);
  border: 1px solid ${(props) => props.theme.border};

  li {
    list-style: none;
    position: relative;
    padding-left: 1.4rem;
    font-size: 0.92rem;
    line-height: 1.5;
    color: ${(props) => props.theme['gray-100']};

    &::before {
      content: '>';
      position: absolute;
      left: 0;
      font-family: 'Roboto Mono', monospace;
      color: ${(props) => props.theme['purple-100']};
    }
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.sm} {
    grid-template-columns: 1fr;
  }
`

export const ProjectCard = styled.article`
  ${glass}
  ${cardHover}
  min-width: 0;
  padding: 1.25rem 1.1rem 1.35rem;
  height: 100%;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > :last-child {
    margin-top: auto;
  }
`

// Área de mídia padronizada (16:10) para os cards ficarem alinhados
const media16x10 = `
  width: 100%;
  aspect-ratio: 16 / 10;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
`

export const Image = styled.img<{ $screenshot?: boolean }>`
  ${media16x10}
  height: auto;
  border: 1px solid ${(props) => props.theme.border};
  object-fit: ${(props) => (props.$screenshot ? 'cover' : 'contain')};
  object-position: ${(props) => (props.$screenshot ? 'top' : 'center')};
  padding: ${(props) => (props.$screenshot ? '0' : '1.25rem')};
  background: ${(props) =>
    props.$screenshot
      ? 'transparent'
      : 'radial-gradient(circle at 50% 60%, rgba(168, 85, 247, 0.18), rgba(9, 8, 14, 0.4) 70%)'};
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
`

export const Cover = styled.div`
  ${media16x10}
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  line-height: 1.1;
  font-family: Syne, sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.white};
  background:
    linear-gradient(rgba(192, 132, 252, 0.08) 1px, transparent 1px) 0 0 / 100% 14px,
    linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(233, 79, 254, 0.12));
  border: 1px solid ${(props) => props.theme.border};
`

export const Status = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.6rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${(props) => props.theme['gray-300']};

  &::before {
    content: '';
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 8px #4ade80;
  }
`

export const ProjectTitle = styled.h3<{ $large?: boolean }>`
  font-family: Syne, sans-serif;
  font-size: ${(props) => (props.$large ? 'clamp(1.8rem, 4vw, 2.4rem)' : '1.15rem')};
  font-weight: ${(props) => (props.$large ? 800 : 700)};
  letter-spacing: ${(props) => (props.$large ? '-0.04em' : 'normal')};
  line-height: 1.1;
  margin-bottom: 0.35rem;
  color: ${(props) => props.theme.white};
`

export const Tagline = styled.p`
  margin-bottom: 0.6rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.82rem;
  color: ${(props) => props.theme['purple-300']};
`

export const Description = styled.p`
  font-size: 0.92rem;
  line-height: 1.6;
  color: ${(props) => props.theme['gray-300']};
`

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 1rem 0 0;
  padding: 0;
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding-top: 1.25rem;
`
