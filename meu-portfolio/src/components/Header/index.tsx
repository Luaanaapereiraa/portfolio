import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { navItems } from '../../data/nav'
import {
  BrandLink,
  HeaderWrapper,
  LogoMark,
  MenuButton,
  Nav,
  NavItem,
  NavList,
} from './styles'

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {isOpen ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <HeaderWrapper>
      <Nav aria-label="Principal">
        <BrandLink
          to="home-section"
          smooth
          duration={500}
          offset={-80}
          onClick={closeMenu}
          aria-label="Ir para o início"
        >
          <LogoMark aria-hidden="true">L</LogoMark>
        </BrandLink>

        <MenuButton
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <MenuIcon isOpen={isMenuOpen} />
        </MenuButton>

        <NavList id="main-navigation" $isOpen={isMenuOpen}>
          {navItems.map((item) => (
            <NavItem key={item.to}>
              <Link
                to={item.to}
                smooth
                duration={500}
                offset={-80}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
