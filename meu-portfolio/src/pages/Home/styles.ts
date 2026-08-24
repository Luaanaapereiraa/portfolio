import styled from 'styled-components'
import { float, sectionFade } from '../../styles/animations'
import { media } from '../../styles/breakpoints'

export const ContainerHome = styled.section<{ $isActive?: boolean }>`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 7.5rem 1.25rem 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  scroll-margin-top: 5rem;
  ${sectionFade}

  ${media.md} {
    flex-direction: column;
    padding-top: 6.5rem;
    gap: 1.5rem;
  }
`

export const ContainerText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: 1 1 55%;
  min-width: 0;
  border: 1px solid ${(props) => props.theme['purple-400']};
  border-radius: 10px;
  padding: 1.5rem 1.25rem;
  backdrop-filter: blur(3px);

  ${media.md} {
    width: 100%;
    flex: 1 1 auto;
    text-align: center;
    align-items: center;
  }
`

export const AboutPurple = styled.p`
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme['purple-400']};
`

export const About = styled.p`
  padding-top: 0.75rem;
  font-size: clamp(1rem, 2.4vw, 1.2rem);
  font-weight: 500;
  line-height: 1.6;
  color: ${(props) => props.theme['gray-300']};

  ${media.md} {
    text-align: center;
  }
`

export const MyName = styled.h1`
  font-size: clamp(1.35rem, 4vw, 2rem);
  margin: 0;
  line-height: 1.3;
  color: ${(props) => props.theme['purple-400']};
  text-shadow:
    -1px -1px 0px ${(props) => props.theme['white']},
    -1px 1px 0px ${(props) => props.theme['purple-400']},
    1px -1px 0px ${(props) => props.theme['purple-400']},
    1px 0px 0px ${(props) => props.theme['purple-400']};
`

export const Illustration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 40%;
  min-width: 0;
  animation: ${float} 3s ease-in-out infinite;

  img {
    width: 100%;
    max-width: 380px;
  }

  ${media.md} {
    width: 100%;
    flex: 1 1 auto;

    img {
      max-width: 260px;
    }
  }
`
