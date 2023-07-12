import React from 'react';
import { Container, Title, Grid, Project, Image, ProjectTitle, Description } from './styles';

const Portfolio: React.FC = () => {
  const projects = [
    { id: 1, title: 'Meu Portfólio', image: './src/assets/home-illustration.svg', link: 'https://github.com/Luaanaapereiraa/portfolio', description: 'Projeto desse portfólio, criado usando React, TypeScript, Vite e Styled Components' },
    { id: 2, title: 'AvocatFeed', image: './src/assets/avocatfeed.png', link: 'https://github.com/Luaanaapereiraa/AvocatSocialFeed', description: 'Projeto de feed com interações, criado usando React, TypeScript, Vite e CSS Modules' },
    { id: 3, title: 'PomodoroDev', image: './src/assets/pomodorodev.png', link: 'https://github.com/Luaanaapereiraa/pomodorodev', description: 'Projeto de pomodoro para ajudar Devs, criado usando React, TypeScript, Vite e Styled Components' },
  ];

  return (
    <Container id="portfolio-section">
      <Title>Projetos</Title>
      <Grid>
        {projects.map((project) => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
          <Project key={project.id}>
            <Image src={project.image} alt={project.title} />
            <ProjectTitle >{project.title}</ProjectTitle>
            <Description>{project.description}</Description>
          </Project>
          </a>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
