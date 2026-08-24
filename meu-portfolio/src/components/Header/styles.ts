import styled, { keyframes } from 'styled-components'
import { Link } from 'react-scroll'
import { media } from '../../styles/breakpoints'

const waveAnimation = keyframes`
  0% { color: #e94ffe; }
  12.5% { color: #c933ff; }
  37.5% { color: #a726ff; }
  50% { color: #8519ff; }
  62.5% { color: #ad14c4; }
  75% { color: #9900b1; }
  87.5% { color: #85009e; }
  100% { color: #71008c; }
`

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(35, 37, 48, 0.5);
  z-index: 9999;
  backdrop-filter: blur(2px);
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1.25rem;
  max-width: 960px;
  margin: 0 auto;
  position: relative;
`

export const BrandLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
`

export const WaveText = styled.span`
  animation: ${waveAnimation} 8s linear infinite;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  font-family: 'Mrs Saint Delafield', cursive;
  border: 1px solid;
  border-radius: 100%;
  width: 3.25rem;
  height: 3.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  ${media.sm} {
    width: 2.75rem;
    height: 2.75rem;
  }
`

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme['purple-200']};
  padding: 0.5rem;
  border-radius: 0.5rem;

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
  gap: 1rem;

  ${media.md} {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0.5rem 0 1rem;
    background-color: rgba(31, 41, 48, 0.97);
    border-bottom: 1px solid ${(props) => props.theme['purple-400']};
  }
`

export const NavItem = styled.li`
  color: ${(props) => props.theme['purple-200']};
  font-family: 'Roboto Mono', monospace;

  a {
    display: block;
    color: inherit;
    text-decoration: none;
    padding: 0.35rem 0.25rem;
    transition: color 0.3s ease;

    @media (hover: hover) {
      &:hover {
        color: ${(props) => props.theme['white']};
        cursor: pointer;
      }
    }
  }

  ${media.md} {
    a {
      padding: 0.85rem 1.25rem;
      font-size: 1rem;
    }
  }
`
