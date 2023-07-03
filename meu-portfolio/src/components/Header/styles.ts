import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
   position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #1f2937;
  z-index: 9999;
`;


export const Nav = styled.nav`
display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  max-width: 960px;
  margin: 0 auto;
`;

export const Logo = styled.a`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  gap: 1rem;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.3s ease;
  

  &:hover {
    color: #fff;
  }
`;