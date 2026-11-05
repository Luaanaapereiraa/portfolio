import { useStaggerReveal, type RevealGroup } from '../../animations/useStaggerReveal'
import MagneticButton from '../../components/MagneticButton'
import { caseProjectIds, differentiators, processSteps, services } from '../../data/freela'
import { projects, type Project } from '../../data/projects'
import { ButtonLink, SectionTitle, Tag } from '../../styles/shared'
import { toSlug } from '../../utils/slug'
import {
  Actions,
  Cover,
  Description,
  Image,
  Meta,
  ProjectCard,
  ProjectTitle,
  Status,
  Tagline,
} from '../Portfolio/styles'
import QuoteForm from './QuoteForm'
import {
  CallToAction,
  CasesGrid,
  Hero,
  Index,
  Lead,
  QuoteIntro,
  Readout,
  Section,
  ServiceCard,
  ServicesGrid,
  Step,
  Steps,
  TagList,
  Title,
  WhyPanel,
} from './styles'

const revealGroups: RevealGroup[] = [
  { trigger: '[data-anim="grid"]', items: '[data-anim="card"]', from: { autoAlpha: 0, y: 26 }, stagger: 0.1 },
  { trigger: '[data-anim="steps"]', items: 'li', from: { autoAlpha: 0, y: 18 }, stagger: 0.12 },
]

/** Para quem contrata, importa o produto no ar, não o repositório (que segue na home). */
const isRepositoryLink = (href: string) => new URL(href).hostname === 'github.com'

const cases = caseProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is Project => project !== undefined)

const FreelaPage = () => {
  const scope = useStaggerReveal<HTMLElement>(revealGroups)

  return (
    <main ref={scope}>
      <Hero aria-labelledby="freela-title">
        <div>
          <Readout>
            [freela] // <span>agenda aberta para novos projetos</span>
          </Readout>
          <Title id="freela-title">
            Seu projeto, do rascunho <em>ao ar</em>
          </Title>
          <Lead>
            Sites, apps e sistemas feitos por uma engenheira de software com <strong>6 anos</strong>{' '}
            construindo produtos na <strong>XP Inc.</strong>, <strong>Pipefy</strong> e{' '}
            <strong>Hardwork Medicina</strong>. Você fala direto comigo, da primeira conversa à
            publicação.
          </Lead>
          <CallToAction>
            <MagneticButton
              href="#orcamento"
              data-track="CTA Clicked"
              data-track-cta="pedir-orcamento"
              data-track-section="freela-hero"
            >
              Pedir orçamento
            </MagneticButton>
            <MagneticButton href="#servicos" $variant="ghost">
              Ver serviços
            </MagneticButton>
          </CallToAction>
        </div>

        <WhyPanel aria-labelledby="freela-why">
          <h2 id="freela-why">Por que comigo</h2>
          <ul>
            {differentiators.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </WhyPanel>
      </Hero>

      <Section id="servicos" aria-labelledby="servicos-title">
        <SectionTitle id="servicos-title" data-kicker="[01] // serviços">
          O que eu faço
        </SectionTitle>
        <ServicesGrid data-anim="grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} data-anim="card" aria-labelledby={`srv-${service.id}`}>
              <Index aria-hidden="true">SRV-{String(index + 1).padStart(2, '0')}</Index>
              <h3 id={`srv-${service.id}`}>{service.title}</h3>
              <p>{service.audience}</p>
              <TagList aria-label="Inclui">
                {service.includes.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </TagList>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Section>

      <Section id="processo" aria-labelledby="processo-title">
        <SectionTitle id="processo-title" data-kicker="[02] // processo">
          Como funciona
        </SectionTitle>
        <Steps data-anim="steps">
          {processSteps.map((step) => (
            <Step key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Step>
          ))}
        </Steps>
      </Section>

      <Section id="casos" aria-labelledby="casos-title">
        <SectionTitle id="casos-title" data-kicker="[03] // casos">
          Projetos entregues
        </SectionTitle>
        <CasesGrid data-anim="grid">
          {cases.map((project) => (
            <ProjectCard key={project.id} data-anim="card" aria-labelledby={`case-${project.id}`}>
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
              <Meta>
                <Status>{project.status}</Status>
              </Meta>
              <ProjectTitle id={`case-${project.id}`}>{project.title}</ProjectTitle>
              <Tagline>{project.tagline}</Tagline>
              <Description>{project.description}</Description>
              <Actions>
                {project.links
                  .filter((link) => link.external && !isRepositoryLink(link.href))
                  .map((link, index) => (
                    <ButtonLink
                      key={link.href}
                      href={link.href}
                      $variant={index === 0 ? 'primary' : 'ghost'}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} — ${project.title}`}
                      data-track="Project Link Clicked"
                      data-track-project={project.id}
                      data-track-link={toSlug(link.label)}
                    >
                      {link.label}
                    </ButtonLink>
                  ))}
              </Actions>
            </ProjectCard>
          ))}
        </CasesGrid>
      </Section>

      <Section id="orcamento" aria-labelledby="orcamento-title">
        <SectionTitle id="orcamento-title" data-kicker="[04] // orçamento">
          Pedir orçamento
        </SectionTitle>
        <QuoteIntro>
          Conte sobre o projeto. Respondo pessoalmente, com perguntas ou uma primeira estimativa.
          Os campos com * são obrigatórios.
        </QuoteIntro>
        <QuoteForm />
      </Section>
    </main>
  )
}

export default FreelaPage
