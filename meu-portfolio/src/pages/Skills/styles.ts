import styled from 'styled-components'
import { sectionFade } from '../../styles/animations'
import { media } from '../../styles/breakpoints'

export const ContainerSkills = styled.section<{ $isActive?: boolean }>`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2rem;
  padding: 0 1.25rem 2rem;
  scroll-margin-top: 5rem;
  ${sectionFade}
`

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 2.5rem 1.5rem;
  justify-items: center;

  ${media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.75rem 1rem;
  }

  ${media.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem 0.75rem;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  img {
    width: 48px;
    height: 48px;
    object-fit: contain;
    padding: 0;
    transition: transform 0.3s ease-in-out;

    @media (hover: hover) {
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  span {
    margin-top: 0.75rem;
    font-size: clamp(0.8rem, 2.4vw, 1rem);
    color: ${(props) => props.theme['purple-300']};
    font-family: 'Roboto Mono', monospace;
    word-break: break-word;
  }
`
