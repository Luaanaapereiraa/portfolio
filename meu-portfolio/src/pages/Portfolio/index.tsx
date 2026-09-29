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
  Meta,
  ProjectCard,
  ProjectTitle,
  Status,
  TagList,
  Tagline,
} from './styles'

/** "Pedir uma demo" → "pedir-uma-demo" (valor estável para o analytics). */
const toSlug = (text: string) =>
  text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

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
          data-track="Project Link Clicked"
          data-track-project={project.id}
          data-track-link={toSlug(link.label)}
        >
          {link.label}
        </Button>
      ))}
    </Actions>
  )
}

/** "PROJ-001 · ● Em desenvolvimento" — o código segue a ordem da lista de projetos. */
function ProjectMeta({ project }: { project: Project }) {
  const code = `PROJ-${String(projects.indexOf(project) + 1).padStart(3, '0')}`
  return (
    <Meta>
      <span aria-hidden="true">{code}</span>
      <Status>{project.status}</Status>
    </Meta>
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
      <SectionTitle data-kicker="[03] // em execução">Projetos</SectionTitle>

      {featured.map((project) => (
        <FeaturedCard key={project.id} aria-labelledby={`${project.id}-title`}>
          <FeaturedContent>
            <ProjectMeta project={project} />
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
              <Cover aria-hidden="true">
                <span>{project.title}</span>
              </Cover>
            )}
            <ProjectMeta project={project} />
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
