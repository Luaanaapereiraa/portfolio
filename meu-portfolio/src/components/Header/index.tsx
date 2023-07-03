import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavLink, NavList } from './styles'

const Header: React.FC = () => {
    return (
      <HeaderWrapper>
        <Nav>
          <Logo href="#">Logo</Logo>
          <NavList>
            <NavItem>
              <NavLink href="#Portfolio">Projetos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contato</NavLink>
            </NavItem>
          </NavList>
        </Nav>
      </HeaderWrapper>
    );
  };
  
  export default Header;