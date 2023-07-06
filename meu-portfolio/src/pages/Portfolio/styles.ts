import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  

`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  margin-top: 3rem;
  color: ${(props) => props.theme['purple-300']};
  text-align: center;

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
 
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
  width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 100rem;
  transition: background-color 0.3s ease-in-out;
  &:hover {
      transform: scale(2);
    }
  
  `;

export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme['purple-400']};
  font-family: 'Roboto', sans-serif;

`;