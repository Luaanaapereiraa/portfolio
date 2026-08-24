import styled from 'styled-components'
import { float, sectionFade } from '../../styles/animations'
import { media } from '../../styles/breakpoints'
import { glass, pageWrap } from '../../styles/mixins'

export const ContainerHome = styled.section<{ $isActive?: boolean }>`
  ${pageWrap}
  padding-top: 8rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  scroll-margin-top: 5rem;
  ${sectionFade}

  ${media.md} {
    flex-direction: column;
    padding-top: 7rem;
    gap: 2rem;
  }
`

export const ContainerText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: 1 1 55%;
  min-width: 0;
  ${glass}
  border-radius: 1.5rem;
  padding: 2rem 1.75rem;

  ${media.md} {
    width: 100%;
    flex: 1 1 auto;
    text-align: center;
    align-items: center;
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
  color: ${(props) => props.theme['gray-300']};

  ${media.md} {
    text-align: center;
  }
`

export const Illustration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 40%;
  min-width: 0;
  animation: ${float} 3s ease-in-out infinite;
  filter: drop-shadow(0 24px 40px rgba(168, 85, 247, 0.18));

  img {
    width: 100%;
    max-width: 380px;
  }

  ${media.md} {
    width: 100%;
    flex: 1 1 auto;

    img {
      max-width: 250px;
    }
  }
`
