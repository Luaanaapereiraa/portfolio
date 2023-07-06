import styled, { keyframes } from 'styled-components';

export const HeaderWrapper = styled.header`
   position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(35, 37, 48, 0.50);
  z-index: 9999;
  backdrop-filter: blur(2px)
`;


export const Nav = styled.nav`
display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  max-width: 960px;
  margin: 0 auto;
`;

const waveAnimation = keyframes`
  0% { color: #e94ffe; }
  12.5% { color: #c933ff; }
  37.5% { color: #a726ff; }
  50% { color: #8519ff; }
  62.5% { color: #ad14c4; }
  75% { color: #9900b1; }
  87.5% { color: #85009e; }
  100% { color: #71008c; }
  

`;

export const WaveText = styled.span`
  animation: ${waveAnimation} 10s linear infinite;
  font-size: 3rem;
  font-weight: 600;
  font-family:  'Mrs Saint Delafield', cursive;
  border: 1px solid;
  border-radius: 100%;
 


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

export const NavItem = styled.li`
color: ${(props) => props.theme['purple-200']};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme['white']};
    cursor: pointer;
    
  }
  `;
