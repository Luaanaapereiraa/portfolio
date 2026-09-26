import { Icon } from '@iconify/react'
import heroBase from '../../assets/hero/base.webp'
import { useSectionInView } from '../../hooks/useSectionInView'
import { useTilt } from '../../hooks/useTilt'
import { heroLayers, type HeroLayer } from './heroLayers'
import { LiveCodePanel } from './LiveCodePanel'
import { ButtonLink } from '../../styles/shared'
import {
  About,
  AboutPurple,
  Availability,
  BaseImage,
  CallToAction,
  Chip,
  ChipSlot,
  ContainerHome,
  ContainerText,
  FloatingLayer,
  Illustration,
  MyName,
  Role,
  Stage,
} from './styles'

function renderLayer(layer: HeroLayer) {
  return (
    <FloatingLayer
      key={layer.id}
      src={layer.src}
      alt=""
      aria-hidden="true"
      data-layer={layer.id}
      style={{
        left: `${layer.left}%`,
        top: `${layer.top}%`,
        width: `${layer.width}%`,
        ['--float-y' as string]: `-${layer.floatY}px`,
        ['--float-duration' as string]: `${layer.duration}s`,
        ['--float-delay' as string]: `-${layer.delay}s`,
      }}
    />
  )
}

const chipIcons = [
  { name: 'React', icon: 'logos:react' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Supabase', icon: 'logos:supabase-icon' },
]

const Home = () => {
  const { ref, inView } = useSectionInView()
  const tilt = useTilt<HTMLDivElement>()

  return (
    <ContainerHome id="home-section" $isActive={inView} ref={ref}>
      <ContainerText>
        <Availability>Aberta a oportunidades · remoto ou São Paulo</Availability>
        <AboutPurple>Olá, meu nome é</AboutPurple>
        <MyName>Luana</MyName>
        <Role>Engenheira de Software · Full Stack · Produtos com IA</Role>
        <About>
          Há 6 anos construo produtos web e mobile em fintech, edtech de educação
          médica e gestão de processos, com passagens por <strong>XP Inc.</strong>,{' '}
          <strong>Pipefy</strong> e <strong>Hardwork Medicina</strong>. Atuo no ciclo
          completo do produto: requisitos, arquitetura, implementação, testes
          automatizados, deploy e monitoramento.
        </About>
        <About>
          Hoje estou construindo o <strong>DestravAI</strong>, um app de produtividade
          com agente de IA, e uso IA no dia a dia de desenvolvimento, com as decisões
          técnicas e a qualidade sob minha responsabilidade. Vim do Marketing Digital,
          o que me dá um olhar de produto e de usuário além do código.
        </About>
        <CallToAction>
          <ButtonLink href="#portfolio-section">Ver projetos</ButtonLink>
          <ButtonLink href="#contact-section" $variant="ghost">
            Vamos conversar
          </ButtonLink>
        </CallToAction>
      </ContainerText>

      <Illustration
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
      >
        <Stage>
          {/* ordem no DOM = ordem de pintura (o Stage usa preserve-3d) */}
          {heroLayers.filter((layer) => layer.behind).map(renderLayer)}
          <LiveCodePanel />
          <BaseImage
            src={heroBase}
            width={900}
            height={957}
            alt="Luana, engenheira de software, com elementos de tecnologia ao redor"
          />
          {heroLayers.filter((layer) => !layer.behind).map(renderLayer)}

          <ChipSlot $position="top">
            <Chip $delay={0}>
              <span aria-hidden="true">🚀</span> Construindo o <strong>DestravAI</strong>
            </Chip>
          </ChipSlot>
          <ChipSlot $position="left">
            <Chip $delay={1.2}>
              <strong>6 anos</strong> · XP Inc. · Pipefy
            </Chip>
          </ChipSlot>
          <ChipSlot $position="bottom">
            <Chip $delay={2.4} aria-label={`Stack: ${chipIcons.map((i) => i.name).join(', ')}`}>
              {chipIcons.map((item) => (
                <Icon key={item.name} icon={item.icon} width={22} height={22} aria-hidden />
              ))}
            </Chip>
          </ChipSlot>
        </Stage>
      </Illustration>
    </ContainerHome>
  )
}

export default Home
