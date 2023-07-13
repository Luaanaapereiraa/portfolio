import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
from {
    opacity: 0;
    transform: translateY(50px);
    }
to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const Container = styled.div<{ isActive?: boolean }>`
  max-width: 800px;
  margin: 0 auto ;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
    transform: translateY(${(props) => (props.isActive ? "0" : "20px")});
    transition: opacity 500ms, transform 500ms;
    animation: ${fadeIn}  700ms ease-in-out;

    @media (max-width: 768px) {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
  }


`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: ${(props) => props.theme['purple-300']};
  text-align: center;
  font-family: 'Roboto Mono', monospace;

  text-shadow: 
                -1px -1px 0px  ${(props) => props.theme['white']}, 
                -1px 1px 0px  ${(props) => props.theme['purple-400']},                    
                1px -1px 0px ${(props) => props.theme['purple-400']},                  
                1px 0px 0px  ${(props) => props.theme['purple-400']};

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  a{
    text-decoration: none;
  }
  

`;

export const Project = styled.div`
  background-color: ${(props) => props.theme['gray-800']};
  padding: 1rem;
  transition: background-color 0.3s ease-in-out;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: ${(props) => props.theme['purple-400']};
  border-style: solid;
  border-width: 1px;

  &:hover {
    background-color: ${(props) => props.theme['gray-100']};;
    cursor: pointer;
  }
  

`;

export const Image = styled.img`
  width: auto;
  height: 6rem; 
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
  &:hover {
      transform: scale(2);
    }
  
  `;

export const ProjectTitle = styled.h1`
  font-size: 1.30rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme['purple-400']};
  font-family: 'Roboto Mono', monospace;  

`;

export const Description = styled.p`
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1rem;
        color: ${(props) => props.theme['gray-300']};
`;