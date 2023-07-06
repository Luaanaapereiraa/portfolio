import styled from "styled-components";

export const ContainerHome = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  overflow-x: hidden;
`;

export const ContainerText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 60%;
  height: 100%;
  margin-top: 10rem;
  border-color: ${(props) => props.theme['purple-400']};
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  padding: 1rem;
  backdrop-filter: blur(3px);
  padding: 0%;
`;

export const AboutPurple = styled.a`
    display: flex;
    align-items: flex-end;
    padding: 2rem 1rem 0 1rem;
    margin-bottom: 0;
    font-size: 1.1rem;
    font-family: 'Roboto Mono', monospace;
    color: ${(props) => props.theme['purple-400']};
`;

export const About = styled.a`
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${(props) => props.theme['gray-300']};
`;
export const MyName = styled.h1`
    padding: 0 1rem  1rem  1rem;
    
    font-size: 2rem;
    margin-top: 0;
    color: ${(props) => props.theme['purple-400']};
`;

export const Illustration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;

`;
