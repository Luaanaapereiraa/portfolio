import { Icon } from '@iconify/react'
import { useRef } from 'react'
import { CLEAR_ANIMATED_PROPS, gsap, useGSAP, withMotion } from '../../animations/gsap'
import heroBase from '../../assets/hero/base.webp'
import { useSectionInView } from '../../hooks/useSectionInView'
import { useTilt } from '../../hooks/useTilt'
import { heroLayers, type HeroLayer } from './heroLayers'
import { LiveCodePanel } from './LiveCodePanel'
import MagneticButton from '../../components/MagneticButton'
import {
  About,
  Availability,
  BaseImage,
  CallToAction,
  Chip,
  ChipSlot,
  ContainerHome,
  ContainerText,
  FloatingLayer,
  Greeting,
  Illustration,
  MyName,
  Readout,
  Role,
  RoleScramble,
  RoleSizer,
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

const ROLE = 'Engenheira de Software · Full Stack · Produtos com IA'
const SCRAMBLE_CHARS = '01{}<>/_#*'

/** Entrada do hero: selo → nome (cortina) → cargo "decodificando" → textos → cartões. */
function useHeroIntro() {
  const scope = useRef<HTMLElement | null>(null)

  useGSAP(
    () =>
      withMotion(() => {
        const q = gsap.utils.selector(scope)
        const role = q('[data-anim="role"]')[0]

        // posições absolutas (s): tudo termina em ~1,3s para não atrasar a leitura
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from(q('[data-anim="badge"]'), { autoAlpha: 0, y: -10, duration: 0.4 }, 0)
          .from(q('[data-anim="hello"]'), { autoAlpha: 0, y: 10, duration: 0.35 }, 0.05)
          .fromTo(
            q('[data-anim="name"]'),
            { clipPath: 'inset(0 100% 0 0)', y: 12 },
            { clipPath: 'inset(0 0% 0 0)', y: 0, duration: 0.7, ease: 'expo.out', clearProps: 'clipPath,transform' },
            0.1
          )
          .fromTo(
            role,
            { scrambleText: { text: ' ' } },
            {
              scrambleText: { text: ROLE, chars: SCRAMBLE_CHARS, revealDelay: 0.2, speed: 0.7 },
              duration: 0.9,
              ease: 'none',
            },
            0.3
          )
          .from(
            q('[data-anim="reveal"]'),
            { autoAlpha: 0, y: 14, duration: 0.5, stagger: 0.08, clearProps: CLEAR_ANIMATED_PROPS },
            0.3
          )
          .from(
            q('[data-anim="chip"]'),
            {
              autoAlpha: 0,
              scale: 0.6,
              duration: 0.5,
              stagger: 0.12,
              ease: 'back.out(1.7)',
              clearProps: CLEAR_ANIMATED_PROPS,
            },
            0.5
          )

        // se a animação for revertida no meio (ex.: reduced motion ligado), o cargo volta inteiro
        return () => {
          if (role) role.textContent = ROLE
        }
      }),
    { scope }
  )

  return scope
}

const Home = () => {
  const { ref, inView } = useSectionInView()
  const tilt = useTilt<HTMLDivElement>()
  const introScope = useHeroIntro()

  return (
    <ContainerHome
      id="home-section"
      $isActive={inView}
      ref={(node: HTMLElement | null) => {
        ref(node)
        introScope.current = node
      }}
    >
      <ContainerText>
        <Readout data-anim="badge">
          <span aria-hidden="true">SYS://luana.pereira</span>
          <Availability>Aberta a oportunidades · remoto ou SP</Availability>
        </Readout>
        <Greeting data-anim="hello">&gt; olá, meu nome é</Greeting>
        <MyName data-anim="name">Luana</MyName>
        <Role>
          {/* cópia estática: reserva o espaço (sem "pulo" de layout) e é a lida por leitores de tela */}
          <RoleSizer>{ROLE}</RoleSizer>
          <RoleScramble aria-hidden="true" data-anim="role">
            {ROLE}
          </RoleScramble>
        </Role>
        <About data-anim="reveal">
          Há 6 anos construo produtos web e mobile em fintech, edtech de educação
          médica e gestão de processos, com passagens por <strong>XP Inc.</strong>,{' '}
          <strong>Pipefy</strong> e <strong>Hardwork Medicina</strong>. Atuo no ciclo
          completo do produto: requisitos, arquitetura, implementação, testes
          automatizados, deploy e monitoramento.
        </About>
        <About data-anim="reveal">
          Hoje estou construindo o <strong>BoxStep</strong>, um app de produtividade
          com agente de IA, e uso IA no dia a dia de desenvolvimento, com as decisões
          técnicas e a qualidade sob minha responsabilidade. Vim do Marketing Digital,
          o que me dá um olhar de produto e de usuário além do código.
        </About>
        <CallToAction data-anim="reveal">
          <MagneticButton href="#portfolio-section">Ver projetos</MagneticButton>
          <MagneticButton href="#contact-section" $variant="ghost">
            Vamos conversar
          </MagneticButton>
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

          <ChipSlot $position="top" data-anim="chip">
            <Chip $delay={0}>
              <span aria-hidden="true">▸</span> Construindo o <strong>BoxStep</strong>
            </Chip>
          </ChipSlot>
          <ChipSlot $position="left" data-anim="chip">
            <Chip $delay={1.2}>
              <strong>06 anos</strong> · XP Inc. · Pipefy
            </Chip>
          </ChipSlot>
          <ChipSlot $position="bottom" data-anim="chip">
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
