import styled from 'styled-components'
import { float, sectionFade } from '../../styles/animations'
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
  padding-top: 1.15rem;
  font-size: clamp(1rem, 2.2vw, 1.08rem);
  font-weight: 400;
  line-height: 1.7;
  text-align: center;
  color: ${(props) => props.theme['gray-300']};
`

export const Illustration = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
  min-width: 0;
  overflow: visible;
  animation: ${float} 3s ease-in-out infinite;

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
  }

  img {
    position: relative;
    z-index: 1;
    width: auto;
    max-width: min(100%, 420px);
    max-height: min(70vh, 640px);
    height: auto;
    object-fit: contain;
    filter:
      drop-shadow(0 0 14px rgba(192, 132, 252, 0.7))
      drop-shadow(0 0 36px rgba(168, 85, 247, 0.55))
      drop-shadow(0 18px 32px rgba(88, 28, 135, 0.4));
  }

  @media (min-width: 769px) {
    img {
      max-width: min(100%, 480px);
      max-height: min(74vh, 720px);
    }
  }

  ${media.xl} {
    img {
      max-width: min(38vw, 560px);
      max-height: min(78vh, 820px);
    }
  }

  ${media.xxl} {
    img {
      max-width: min(36vw, 620px);
      max-height: min(82vh, 900px);
    }
  }

  ${media.md} {
    width: 100%;
    flex: 1 1 auto;

    img {
      max-width: min(72vw, 320px);
      max-height: min(52vh, 420px);
    }
  }
`
