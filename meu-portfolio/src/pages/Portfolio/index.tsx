import type { Project } from '../../data/projects'
import { projects } from '../../data/projects'
import { useSectionInView } from '../../hooks/useSectionInView'
import { ButtonLink, SectionTitle, Tag } from '../../styles/shared'
import {
  Actions,
  Container,
  Cover,
  Description,
  FeaturedCard,
  FeaturedContent,
  Grid,
  Highlights,
  Image,
  ProjectCard,
  ProjectTitle,
  Status,
  TagList,
  Tagline,
} from './styles'

function ProjectLinks({ project }: { project: Project }) {
  return (
    <Actions>
      {project.links.map((link, index) => (
        <ButtonLink
          key={link.href}
          href={link.href}
          $variant={index === 0 ? 'primary' : 'ghost'}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          aria-label={`${link.label} — ${project.title}`}
        >
          {link.label}
        </ButtonLink>
      ))}
    </Actions>
  )
}

function StackTags({ stack }: { stack: string[] }) {
  return (
    <TagList aria-label="Tecnologias">
      {stack.map((tech) => (
        <Tag key={tech}>{tech}</Tag>
      ))}
    </TagList>
  )
}

const Portfolio = () => {
  const { ref, inView } = useSectionInView()
  const featured = projects.filter((project) => project.featured)
  const others = projects.filter((project) => !project.featured)

  return (
    <Container id="portfolio-section" $isActive={inView} ref={ref}>
      <SectionTitle data-kicker="// projetos">Projetos</SectionTitle>

      {featured.map((project) => (
        <FeaturedCard key={project.id} aria-labelledby={`${project.id}-title`}>
          <FeaturedContent>
            <Status>{project.status}</Status>
            <ProjectTitle id={`${project.id}-title`} $large>
              {project.title}
            </ProjectTitle>
            <Tagline>{project.tagline}</Tagline>
            <Description>{project.description}</Description>
            <StackTags stack={project.stack} />
            <ProjectLinks project={project} />
          </FeaturedContent>

          {project.highlights && (
            <Highlights aria-label={`Destaques técnicos do ${project.title}`}>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </Highlights>
          )}
        </FeaturedCard>
      ))}

      <Grid>
        {others.map((project) => (
          <ProjectCard key={project.id} aria-labelledby={`${project.id}-title`}>
            {project.image ? (
              <Image
                src={project.image}
                alt={`Preview do projeto ${project.title}`}
                $screenshot={project.imageKind === 'screenshot'}
                loading="lazy"
              />
            ) : (
              <Cover aria-hidden="true">{project.title}</Cover>
            )}
            <Status>{project.status}</Status>
            <ProjectTitle id={`${project.id}-title`}>{project.title}</ProjectTitle>
            <Tagline>{project.tagline}</Tagline>
            <Description>{project.description}</Description>
            <StackTags stack={project.stack} />
            <ProjectLinks project={project} />
          </ProjectCard>
        ))}
      </Grid>
    </Container>
  )
}

export default Portfolio
