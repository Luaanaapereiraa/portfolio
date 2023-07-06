import React from 'react';
import { HeaderWrapper, Nav, NavItem, NavList, WaveText } from './styles';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <h1>
          <WaveText>L</WaveText>
        </h1>
        <NavList>
          <NavItem>
            <Link
              to="home-section"
              smooth={true}
              duration={500}
              offset={-100}
            >
              //Sobre mim
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="habilidades-section"
              smooth={true}
              duration={500}
              offset={-100}
            >
              //Habilidades
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="portfolio-section"
              smooth={true}
              duration={500}
              offset={-100}
            >
              //Projetos
            </Link>
          </NavItem>

          <NavItem>
            <Link
              to="contato-section"
              smooth={true}
              duration={500}
              offset={-100}
            >
              //Contato
            </Link>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
