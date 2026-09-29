import type { Project } from '../../data/projects'
import { projects } from '../../data/projects'
import { useStaggerReveal, type RevealGroup } from '../../animations/useStaggerReveal'
import MagneticButton from '../../components/MagneticButton'
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

const revealGroups: RevealGroup[] = [
  // destaques do BoxStep aparecem linha a linha, como num terminal
  { trigger: '[data-anim="highlights"]', items: 'li', from: { autoAlpha: 0, x: -14 }, stagger: 0.12 },
  { trigger: '[data-anim="grid"]', items: '[data-anim="card"]', from: { autoAlpha: 0, y: 30 }, stagger: 0.12 },
]

function ProjectLinks({ project, magnetic = false }: { project: Project; magnetic?: boolean }) {
  const Button = magnetic ? MagneticButton : ButtonLink

  return (
    <Actions>
      {project.links.map((link, index) => (
        <Button
          key={link.href}
          href={link.href}
          $variant={index === 0 ? 'primary' : 'ghost'}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          aria-label={`${link.label} — ${project.title}`}
        >
          {link.label}
        </Button>
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
  const revealScope = useStaggerReveal<HTMLElement>(revealGroups)
  const featured = projects.filter((project) => project.featured)
  const others = projects.filter((project) => !project.featured)

  return (
    <Container
      id="portfolio-section"
      $isActive={inView}
      ref={(node: HTMLElement | null) => {
        ref(node)
        revealScope.current = node
      }}
    >
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
            <ProjectLinks project={project} magnetic />
          </FeaturedContent>

          {project.highlights && (
            <Highlights data-anim="highlights" aria-label={`Destaques técnicos do ${project.title}`}>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </Highlights>
          )}
        </FeaturedCard>
      ))}

      <Grid data-anim="grid">
        {others.map((project) => (
          <ProjectCard key={project.id} data-anim="card" aria-labelledby={`${project.id}-title`}>
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
