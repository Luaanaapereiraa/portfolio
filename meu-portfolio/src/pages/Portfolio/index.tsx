import React from 'react';
import { Container, Title, Grid, Project, Image, ProjectTitle } from './styles';

const Portfolio: React.FC = () => {
  const projects = [
    { id: 1, title: 'Project 1', image: './src/assets/home-illustration.svg' },
    { id: 2, title: 'Project 2', image: './src/assets/home-illustration.svg' },
    { id: 3, title: 'Project 3', image: './src/assets/home-illustration.svg' },
  ];

  return (
    <Container id="portfolio-section">
      <Title>Projetos</Title>
      <Grid>
        {projects.map((project) => (
          <Project key={project.id}>
            <Image src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
          </Project>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
