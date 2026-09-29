import styled from 'styled-components'
import { media } from './breakpoints'
import { chamfer, monoLabel } from './mixins'

/**
 * Título de seção no estilo HUD: índice em mono (data-kicker) acima,
 * título em caixa alta e uma régua com um trecho ciano embaixo.
 */
export const SectionTitle = styled.h2`
  position: relative;
  align-self: stretch;
  margin: 4rem 0 2rem;
  padding-bottom: 0.9rem;
  font-family: ${(props) => props.theme.fonts.display};
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: left;
  color: ${(props) => props.theme.white};

  &::before {
    content: attr(data-kicker);
    display: block;
    margin-bottom: 0.5rem;
    ${monoLabel}
    color: ${(props) => props.theme.accent};
  }

  &:not([data-kicker])::before {
    display: none;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.accent} 0 56px,
      ${(props) => props.theme.line} 56px
    );
  }

  ${media.md} {
    margin: 3rem 0 1.5rem;
  }
`

export const ButtonLink = styled.a<{ $variant?: 'primary' | 'ghost' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.25rem;
  ${monoLabel}
  font-size: 0.76rem;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;

  ${(props) =>
    props.$variant === 'ghost'
      ? `
    color: ${props.theme.text};
    background: transparent;
    border: 1px solid ${props.theme['line-strong']};
  `
      : `
    color: ${props.theme['on-accent']};
    background: ${props.theme.accent};
    border: 1px solid ${props.theme.accent};
  `}

  ${(props) => props.$variant !== 'ghost' && chamfer('9px')}

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      ${(props) =>
        props.$variant === 'ghost'
          ? `color: ${props.theme.accent}; border-color: ${props.theme.accent};`
          : `background-color: ${props.theme.white}; border-color: ${props.theme.white};`}
    }
  }

  /* o chanfro (clip-path) cortaria um outline externo, então o foco fica por dentro */
  &:focus-visible {
    outline: 2px solid
      ${(props) => (props.$variant === 'ghost' ? props.theme.accent : props.theme['on-accent'])};
    outline-offset: -5px;
  }
`

export const Tag = styled.li`
  list-style: none;
  padding: 0.22rem 0.5rem;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 0.7rem;
  color: ${(props) => props.theme['text-dim']};
  border: 1px solid ${(props) => props.theme.line};
`
