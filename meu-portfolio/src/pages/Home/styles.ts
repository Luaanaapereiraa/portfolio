import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
    opacity: 0;
    transform: translateY(20px);
    }
to {
        opacity: 1;
        transform: translateY(0);
    }
`

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ContainerHome = styled.div<{ isActive?: boolean }>`
  max-width: 800px;
  max-height: 800px;
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: hidden;
  padding-bottom: 2rem;
  
    opacity: ${(props) => (props.isActive ? "1" : "0")};
    transform: translateY(${(props) => (props.isActive ? "0" : "20px")});
    transition: opacity 500ms, transform 500ms;
    animation: ${fadeIn}  700ms ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;

  }
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

    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
      padding: 1rem;
      overflow-x: hidden;
    }
`;

export const About = styled.a`
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${(props) => props.theme['gray-300']};

    @media (max-width: 768px) {
      text-align: center;
      font-size: 1.2rem;
    }
`;
export const MyName = styled.h1`
    padding: 0 1rem  1rem  1rem;
    font-size: 2rem;
    margin-top: 0;
    color: ${(props) => props.theme['purple-400']};
    text-shadow: 
                -1px -1px 0px  ${(props) => props.theme['white']}, 
                -1px 1px 0px  ${(props) => props.theme['purple-400']},                    
                1px -1px 0px ${(props) => props.theme['purple-400']},                  
                1px 0px 0px  ${(props) => props.theme['purple-400']};

`;

export const Illustration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  min-height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;

  animation: ${floatAnimation} 3s ease-in-out infinite;


  @media (max-width: 768px) {
    img{
      max-width: 100vw;
      margin-top: 0;
    }
  }

`;
