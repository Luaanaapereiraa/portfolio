import { projects } from '../../data/projects'
import { useSectionInView } from '../../hooks/useSectionInView'
import { SectionTitle } from '../../styles/shared'
import { Container, Description, Grid, Image, Project, ProjectTitle } from './styles'

const Portfolio = () => {
  const { ref, inView } = useSectionInView()

  return (
    <Container id="portfolio-section" $isActive={inView} ref={ref}>
      <SectionTitle>Projetos</SectionTitle>
      <Grid>
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Project>
              <Image src={project.image} alt={`Preview do projeto ${project.title}`} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <Description>{project.description}</Description>
            </Project>
          </a>
        ))}
      </Grid>
    </Container>
  )
}

export default Portfolio
