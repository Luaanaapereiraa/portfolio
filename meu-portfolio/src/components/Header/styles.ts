import styled, { keyframes } from 'styled-components'
import { Link } from 'react-scroll'
import { media } from '../../styles/breakpoints'

const borderGlow = keyframes`
  0% {
    border-color: #e94ffe;
    box-shadow: 0 0 16px rgba(233, 79, 254, 0.5);
  }
  20% {
    border-color: #c933ff;
    box-shadow: 0 0 16px rgba(201, 51, 255, 0.5);
  }
  40% {
    border-color: #a726ff;
    box-shadow: 0 0 16px rgba(167, 38, 255, 0.5);
  }
  60% {
    border-color: #8519ff;
    box-shadow: 0 0 16px rgba(133, 25, 255, 0.5);
  }
  80% {
    border-color: #ad14c4;
    box-shadow: 0 0 16px rgba(173, 20, 196, 0.5);
  }
  100% {
    border-color: #e94ffe;
    box-shadow: 0 0 16px rgba(233, 79, 254, 0.5);
  }
`

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background: rgba(9, 8, 14, 0.62);
  backdrop-filter: blur(20px) saturate(1.5);
  border-bottom: 1px solid ${(props) => props.theme.border};
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
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
`

export const LogoMark = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center;
  border-radius: 0.8rem;
  font-family: Syne, sans-serif;
  font-weight: 800;
  font-size: 1.3rem;
  letter-spacing: -0.08em;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.bg};
  border: 1.5px solid #e94ffe;
  animation: ${borderGlow} 8s linear infinite;
  transition: transform 0.25s ease;

  @media (hover: hover) {
    ${BrandLink}:hover & {
      transform: translateY(-1px);
    }
  }

  ${media.sm} {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1.15rem;
  }
`

export const MenuButton = styled.button`
  display: none;
  background: rgba(168, 85, 247, 0.12);
  border: 1px solid ${(props) => props.theme.border};
  cursor: pointer;
  color: ${(props) => props.theme['purple-200']};
  padding: 0.45rem;
  border-radius: 0.75rem;

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
  gap: 0.35rem;

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
    background: ${(props) => props.theme['surface-strong']};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 1rem;
    backdrop-filter: blur(18px);
  }
`

export const NavItem = styled.li`
  color: ${(props) => props.theme['purple-300']};
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;

  a {
    display: block;
    color: inherit;
    text-decoration: none;
    padding: 0.45rem 0.9rem;
    border-radius: 999px;
    transition: color 0.25s ease, background 0.25s ease;

    @media (hover: hover) {
      &:hover {
        color: ${(props) => props.theme.white};
        background: rgba(168, 85, 247, 0.16);
        cursor: pointer;
      }
    }
  }

  ${media.md} {
    a {
      padding: 0.8rem 1rem;
      font-size: 1rem;
      border-radius: 0.75rem;
    }
  }
`
