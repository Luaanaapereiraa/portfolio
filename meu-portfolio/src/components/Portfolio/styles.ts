import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
 
`;

export const Project = styled.div`
 background-color: #e2e8f0;
  padding: 1rem;
  transition: background-color 0.3s ease-in-out;
  border-radius: 0.5rem;
  
  &:hover {
    background-color: #cbd5e0;
    cursor: pointer;
  }
  

`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;

`;