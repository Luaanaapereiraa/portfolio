import styled from 'styled-components'
import { sectionFade } from '../../styles/animations'
import { media } from '../../styles/breakpoints'
import { cardHover, hudPanel, monoLabel, pageWrap } from '../../styles/mixins'

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
  ${hudPanel}
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 2rem;
  padding: 2rem;
  border-color: ${(props) => props.theme['line-strong']};

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

/** Destaques técnicos como saída de terminal. */
export const Highlights = styled.ul`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin: 0;
  padding: 1.25rem;
  background: rgba(2, 6, 8, 0.7);
  border: 1px solid ${(props) => props.theme.line};
  border-top: 2px solid ${(props) => props.theme.accent};

  li {
    list-style: none;
    position: relative;
    padding-left: 1.4rem;
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: 0.8rem;
    line-height: 1.55;
    color: ${(props) => props.theme.text};

    &::before {
      content: '>';
      position: absolute;
      left: 0;
      color: ${(props) => props.theme.accent};
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
  ${hudPanel}
  ${cardHover}
  min-width: 0;
  padding: 1.1rem 1.1rem 1.35rem;
  height: 100%;
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
`

export const Image = styled.img<{ $screenshot?: boolean }>`
  ${media16x10}
  height: auto;
  border: 1px solid ${(props) => props.theme.line};
  object-fit: ${(props) => (props.$screenshot ? 'cover' : 'contain')};
  object-position: ${(props) => (props.$screenshot ? 'top' : 'center')};
  padding: ${(props) => (props.$screenshot ? '0' : '1.25rem')};
  background: ${(props) =>
    props.$screenshot
      ? 'transparent'
      : `linear-gradient(${props.theme.grid} 1px, transparent 1px) 0 0 / 16px 16px,
         linear-gradient(90deg, ${props.theme.grid} 1px, transparent 1px) 0 0 / 16px 16px,
         rgba(2, 6, 8, 0.7)`};
`

/** Capa para projetos sem imagem: grade + mira + nome. */
export const Cover = styled.div`
  ${media16x10}
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.display};
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  background:
    linear-gradient(${(props) => props.theme.grid} 1px, transparent 1px) 0 0 / 16px 16px,
    linear-gradient(90deg, ${(props) => props.theme.grid} 1px, transparent 1px) 0 0 / 16px 16px,
    rgba(2, 6, 8, 0.7);
  border: 1px solid ${(props) => props.theme.line};

  /* mira no centro */
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${(props) => props.theme['accent-dim']};
    opacity: 0.5;
  }

  &::before {
    left: 50%;
    top: 12%;
    bottom: 12%;
    width: 1px;
  }

  &::after {
    top: 50%;
    left: 8%;
    right: 8%;
    height: 1px;
  }

  span {
    position: relative;
    z-index: 1;
    padding: 0.2rem 0.6rem;
    background: ${(props) => props.theme.bg};
  }
`

/** Linha de metadados: código do projeto + status. */
export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.9rem;
  margin-bottom: 0.6rem;
  ${monoLabel}
  font-size: 0.66rem;
  color: ${(props) => props.theme['text-faint']};
`

export const Status = styled.span`
  color: ${(props) => props.theme.accent};

  &::before {
    content: '● ';
  }
`

export const ProjectTitle = styled.h3<{ $large?: boolean }>`
  font-family: ${(props) => props.theme.fonts.display};
  font-size: ${(props) => (props.$large ? 'clamp(2rem, 4.5vw, 2.8rem)' : '1.3rem')};
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.05;
  margin-bottom: 0.4rem;
  color: ${(props) => props.theme.white};
`

export const Tagline = styled.p`
  margin-bottom: 0.7rem;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 0.78rem;
  color: ${(props) => props.theme.accent};
`

export const Description = styled.p`
  font-size: 0.93rem;
  line-height: 1.65;
  color: ${(props) => props.theme['text-dim']};
`

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 1rem 0 0;
  padding: 0;
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding-top: 1.35rem;
`
