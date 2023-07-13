import React from 'react';
import { Container, Title, Grid, Project, Image, ProjectTitle, Description } from './styles';
import HomeIllustration from "../../assets/developer.png"
import Avocat from "../../assets/avocatfeed.png";
import Pomodoro from "../../assets/pomodorodev.png";
import { useInView } from "react-intersection-observer";



const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const projects = [
    { id: 1, title: 'Meu Portfólio', image: HomeIllustration, link: 'https://github.com/Luaanaapereiraa/portfolio', description: 'Projeto desse portfólio, criado usando React, TypeScript, Vite e Styled Components' },
    { id: 2, title: 'AvocatFeed', image: Avocat, link: 'https://github.com/Luaanaapereiraa/AvocatSocialFeed', description: 'Projeto de feed com interações, criado usando React, TypeScript, Vite e CSS Modules' },
    { id: 3, title: 'PomodoroDev', image: Pomodoro, link: 'https://github.com/Luaanaapereiraa/pomodorodev', description: 'Projeto de pomodoro para ajudar Devs, criado usando React, TypeScript, Vite e Styled Components' },
  ];

  return (
    <Container id="portfolio-section" isActive={inView} ref={ref} className={inView ? "active" : ""}>
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
