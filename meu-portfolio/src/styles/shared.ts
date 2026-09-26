import styled from 'styled-components'
import { media } from './breakpoints'

export const SectionTitle = styled.h2`
  position: relative;
  font-size: clamp(1.75rem, 4vw, 2.4rem);
  font-weight: 800;
  margin: 3.5rem 0 2rem;
  text-align: center;
  font-family: Syne, sans-serif;
  letter-spacing: -0.04em;
  color: ${(props) => props.theme.white};
  line-height: 1.15;

  &::before {
    content: attr(data-kicker);
    display: block;
    margin-bottom: 0.55rem;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: lowercase;
    color: ${(props) => props.theme['purple-300']};
  }

  &:not([data-kicker])::before {
    display: none;
  }

  ${media.md} {
    margin: 2.5rem 0 1.5rem;
  }
`

export const ButtonLink = styled.a<{ $variant?: 'primary' | 'ghost' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.7rem 1.2rem;
  border-radius: 999px;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  ${(props) =>
    props.$variant === 'ghost'
      ? `
    color: ${props.theme['gray-100']};
    background: transparent;
    border: 1px solid ${props.theme.border};
  `
      : `
    color: ${props.theme.white};
    background: linear-gradient(120deg, ${props.theme['purple-400']}, ${props.theme['purple-100']});
    border: 1px solid transparent;
  `}

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${(props) => props.theme['purple-300']};
      box-shadow: 0 10px 24px ${(props) => props.theme.glow};
    }
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme['purple-300']};
    outline-offset: 3px;
  }
`

export const Tag = styled.li`
  list-style: none;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.72rem;
  color: ${(props) => props.theme['purple-300']};
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid ${(props) => props.theme.border};
`
