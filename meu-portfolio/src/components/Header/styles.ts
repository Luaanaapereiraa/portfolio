import styled, { keyframes } from 'styled-components'
import { Link } from 'react-scroll'
import { media } from '../../styles/breakpoints'
import { chamfer, hudPanel, monoLabel } from '../../styles/mixins'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background: rgba(5, 8, 10, 0.78);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid ${(props) => props.theme.line};
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.7rem 1.25rem;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
`

export const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
`

export const LogoMark = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  display: grid;
  place-items: center;
  font-family: ${(props) => props.theme.fonts.display};
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme['on-accent']};
  background: ${(props) => props.theme.accent};
  ${chamfer('8px')}
  transition: background-color 0.25s ease;

  @media (hover: hover) {
    ${BrandLink}:hover & {
      background: ${(props) => props.theme.white};
    }
  }

  ${media.sm} {
    width: 2.2rem;
    height: 2.2rem;
    font-size: 1.1rem;
  }
`

/** Identificação ao lado do logo (some no celular). */
export const BrandId = styled.span`
  ${monoLabel}
  font-size: 0.68rem;
  line-height: 1.5;
  color: ${(props) => props.theme['text-faint']};

  strong {
    display: block;
    font-weight: 500;
    color: ${(props) => props.theme.text};
  }

  ${media.md} {
    display: none;
  }
`

export const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: 1px solid ${(props) => props.theme['line-strong']};
  cursor: pointer;
  color: ${(props) => props.theme.accent};
  padding: 0.45rem;

  ${media.md} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const NavList = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.25rem;

  ${media.md} {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    position: absolute;
    top: calc(100% + 0.65rem);
    left: 0.75rem;
    right: 0.75rem;
    flex-direction: column;
    align-items: stretch;
    gap: 0.25rem;
    padding: 0.65rem;
    ${hudPanel}
    background-color: ${(props) => props.theme['panel-solid']};
  }
`

export const NavIndex = styled.span`
  margin-right: 0.45rem;
  color: ${(props) => props.theme['text-faint']};
  transition: color 0.2s ease;
`

export const NavItem = styled.li`
  ${monoLabel}
  font-size: 0.74rem;
  color: ${(props) => props.theme.text};

  a {
    display: block;
    color: inherit;
    text-decoration: none;
    padding: 0.5rem 0.8rem;
    border: 1px solid transparent;
    transition:
      color 0.2s ease,
      border-color 0.2s ease;

    @media (hover: hover) {
      &:hover {
        color: ${(props) => props.theme.white};
        border-color: ${(props) => props.theme.line};
        cursor: pointer;

        ${NavIndex} {
          color: ${(props) => props.theme.accent};
        }
      }
    }
  }

  ${media.md} {
    font-size: 0.85rem;

    a {
      padding: 0.85rem 1rem;
    }
  }
`

const growProgress = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`

/** Barra de progresso de leitura: CSS puro, ligada à rolagem (sem JS). */
export const ScrollProgress = styled.span`
  display: none;

  @supports (animation-timeline: scroll()) {
    display: block;
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 2px;
    transform-origin: 0 50%;
    background: ${(props) => props.theme.accent};
    pointer-events: none;
    animation: ${growProgress} linear both;
    animation-timeline: scroll(root block);
  }
`
