import styled from 'styled-components'
import { gentleFloat, glowPulse, layerFloat, sectionFade } from '../../styles/animations'
import { media } from '../../styles/breakpoints'
import { glass, pageWrap } from '../../styles/mixins'

export const ContainerHome = styled.section<{ $isActive?: boolean }>`
  ${pageWrap}
  max-width: 1360px;
  padding-top: 7.5rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow: visible;
  scroll-margin-top: 5rem;
  ${sectionFade}

  ${media.xl} {
    max-width: 100%;
    min-height: calc(100vh - 2rem);
    padding-left: 2rem;
    padding-right: 2rem;
    gap: 1.25rem;
  }

  ${media.md} {
    flex-direction: column;
    justify-content: center;
    min-height: 0;
    padding-top: 7rem;
    gap: 1.25rem;
  }
`

export const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 0 1 auto;
  max-width: 560px;
  min-width: 0;
  text-align: center;
  ${glass}
  border-radius: 1.5rem;
  padding: 2rem 1.75rem;

  ${media.xl} {
    max-width: 520px;
  }

  ${media.md} {
    width: 100%;
    flex: 1 1 auto;
    max-width: none;
    padding: 1.6rem 1.25rem;
  }
`

export const AboutPurple = styled.p`
  padding: 0;
  margin-bottom: 0.35rem;
  font-size: 0.92rem;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme['purple-300']};
`

export const MyName = styled.h1`
  font-family: Syne, sans-serif;
  font-size: clamp(2.4rem, 7vw, 4.2rem);
  font-weight: 800;
  margin: 0;
  line-height: 0.95;
  letter-spacing: -0.05em;
  background: linear-gradient(120deg, #ffffff 15%, #c084fc 55%, #e94ffe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

export const Role = styled.p`
  margin-top: 0.7rem;
  font-family: 'Roboto Mono', monospace;
  font-size: clamp(0.95rem, 2.4vw, 1.15rem);
  color: ${(props) => props.theme['purple-200']};
`

export const About = styled.p`
  padding-top: 1rem;
  font-size: clamp(1rem, 2.2vw, 1.08rem);
  font-weight: 400;
  line-height: 1.7;
  text-align: center;
  color: ${(props) => props.theme['gray-300']};

  strong {
    font-weight: 600;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const Availability = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.1rem;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.75rem;
  color: #bbf7d0;
  background: rgba(74, 222, 128, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.3);

  &::before {
    content: '';
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 8px #4ade80;
  }
`

export const CallToAction = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  padding-top: 1.5rem;
`

export const Illustration = styled.div`
  --tilt-x: 0deg;
  --tilt-y: 0deg;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
  min-width: 0;
  overflow: visible;
  perspective: 1200px;

  &::before {
    content: '';
    position: absolute;
    inset: 6% 10%;
    border-radius: 50%;
    background: radial-gradient(
      ellipse at center,
      rgba(168, 85, 247, 0.5) 0%,
      rgba(233, 79, 254, 0.22) 40%,
      transparent 72%
    );
    filter: blur(32px);
    pointer-events: none;
    z-index: 0;
    animation: ${glowPulse} 6s ease-in-out infinite;
  }

  ${media.md} {
    width: 100%;
    flex: 1 1 auto;
  }
`

const heroGlow = `
  drop-shadow(0 0 14px rgba(192, 132, 252, 0.6))
  drop-shadow(0 18px 32px rgba(88, 28, 135, 0.45))
`

export const Stage = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  transform-style: preserve-3d;
  transform: rotateX(var(--tilt-x)) rotateY(var(--tilt-y));
  transition: transform 0.35s ease-out;
  will-change: transform;
`

export const BaseImage = styled.img`
  position: relative;
  display: block;
  width: auto;
  max-width: min(100%, 420px);
  max-height: min(70vh, 640px);
  height: auto;
  object-fit: contain;
  filter: ${heroGlow};

  @media (min-width: 769px) {
    max-width: min(100%, 480px);
    max-height: min(74vh, 720px);
  }

  ${media.xl} {
    max-width: min(38vw, 560px);
    max-height: min(78vh, 820px);
  }

  ${media.xxl} {
    max-width: min(36vw, 620px);
    max-height: min(82vh, 900px);
  }

  ${media.md} {
    max-width: min(72vw, 320px);
    max-height: min(52vh, 420px);
  }
`

/** Painel recortado da ilustração; posição/animação vêm de heroLayers via CSS vars. */
export const FloatingLayer = styled.img`
  position: absolute;
  height: auto;
  pointer-events: none;
  filter: ${heroGlow};
  will-change: transform;
  animation: ${layerFloat} var(--float-duration, 6s) ease-in-out infinite;
  animation-delay: var(--float-delay, 0s);
`

const chipPositions = {
  top: 'top: 6%; right: -4%;',
  left: 'top: 50%; left: -6%;',
  bottom: 'bottom: 9%; right: 0;',
}

export const ChipSlot = styled.div<{ $position: keyof typeof chipPositions }>`
  position: absolute;
  ${(props) => chipPositions[props.$position]}
  transform: translateZ(60px);
  pointer-events: none;

  ${media.md} {
    display: ${(props) => (props.$position === 'top' ? 'block' : 'none')};
    top: 2%;
    right: 0;
  }
`

export const Chip = styled.div<{ $delay: number }>`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 0.9rem;
  border-radius: 0.9rem;
  white-space: nowrap;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.78rem;
  color: ${(props) => props.theme['gray-100']};
  background: ${(props) => props.theme['surface-strong']};
  border: 1px solid ${(props) => props.theme.border};
  backdrop-filter: blur(14px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 12px 28px rgba(0, 0, 0, 0.4),
    0 0 18px ${(props) => props.theme.glow};
  animation: ${gentleFloat} 5s ease-in-out infinite;
  animation-delay: -${(props) => props.$delay}s;

  strong {
    font-weight: 700;
    color: ${(props) => props.theme['purple-300']};
  }

  ${media.md} {
    font-size: 0.7rem;
    padding: 0.45rem 0.7rem;
  }
`
