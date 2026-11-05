import styled from 'styled-components'
import { media } from '../../styles/breakpoints'
import { cardHover, hudPanel, monoLabel, pageWrap } from '../../styles/mixins'

export const Section = styled.section`
  ${pageWrap}
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  scroll-margin-top: 5rem;
`

/* ---------- hero ---------- */

export const Hero = styled.section`
  ${pageWrap}
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 2rem;
  align-items: center;
  padding-top: 8rem;
  padding-bottom: 2rem;

  ${media.md} {
    grid-template-columns: 1fr;
    padding-top: 7rem;
  }
`

export const Readout = styled.p`
  ${monoLabel}
  font-size: 0.68rem;
  color: ${(props) => props.theme.accent};
  margin-bottom: 1rem;

  span {
    color: ${(props) => props.theme['text-faint']};
  }
`

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.display};
  font-size: clamp(2.3rem, 6vw, 3.9rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};

  em {
    font-style: normal;
    color: ${(props) => props.theme.accent};
  }
`

export const Lead = styled.p`
  margin-top: 1.25rem;
  max-width: 38rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${(props) => props.theme['text-dim']};

  strong {
    font-weight: 600;
    color: ${(props) => props.theme.white};
  }
`

export const CallToAction = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;
`

/** "Por que comigo" como saída de terminal. */
export const WhyPanel = styled.aside`
  ${hudPanel}
  padding: 1.5rem;

  h2 {
    ${monoLabel}
    font-size: 0.7rem;
    color: ${(props) => props.theme['text-faint']};
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 0;
  }

  li {
    list-style: none;
    position: relative;
    padding-left: 1.4rem;
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: 0.82rem;
    line-height: 1.55;
    color: ${(props) => props.theme.text};

    &::before {
      content: '>';
      position: absolute;
      left: 0;
      color: ${(props) => props.theme.accent};
    }
  }
`

/* ---------- serviços ---------- */

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  ${media.md} {
    grid-template-columns: 1fr;
  }
`

export const ServiceCard = styled.article`
  ${hudPanel}
  ${cardHover}
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.5rem;

  h3 {
    font-family: ${(props) => props.theme.fonts.display};
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: ${(props) => props.theme.white};
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${(props) => props.theme['text-dim']};
  }
`

export const Index = styled.span`
  ${monoLabel}
  font-size: 0.66rem;
  color: ${(props) => props.theme.accent};
`

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.4rem;
  padding: 0;
`

/* ---------- processo ---------- */

export const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
  padding: 0;
  counter-reset: step;

  ${media.md} {
    grid-template-columns: 1fr;
  }
`

export const Step = styled.li`
  list-style: none;
  position: relative;
  padding-top: 1.25rem;
  border-top: 1px solid ${(props) => props.theme['line-strong']};

  /* marcador ciano no início de cada etapa, sobre a linha */
  &::before {
    counter-increment: step;
    content: counter(step, decimal-leading-zero);
    position: absolute;
    top: -0.7rem;
    left: 0;
    padding-right: 0.5rem;
    background: ${(props) => props.theme.bg};
    ${monoLabel}
    font-size: 0.75rem;
    color: ${(props) => props.theme.accent};
  }

  h3 {
    font-family: ${(props) => props.theme.fonts.display};
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 0.92rem;
    line-height: 1.6;
    color: ${(props) => props.theme['text-dim']};
  }
`

/* ---------- casos ---------- */

export const CasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;

  ${media.md} {
    grid-template-columns: 1fr;
  }
`

/* ---------- orçamento ---------- */

export const QuoteIntro = styled.p`
  max-width: 40rem;
  margin-bottom: 1.5rem;
  line-height: 1.65;
  color: ${(props) => props.theme['text-dim']};
`

export const Form = styled.form`
  ${hudPanel}
  padding: 1.75rem;
  color-scheme: dark;

  ${media.md} {
    padding: 1.25rem;
  }
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.1rem 1.25rem;

  ${media.md} {
    grid-template-columns: 1fr;
  }
`

export const Field = styled.div<{ $wide?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  grid-column: ${(props) => (props.$wide ? '1 / -1' : 'auto')};

  label {
    ${monoLabel}
    font-size: 0.68rem;
    color: ${(props) => props.theme.text};
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.75rem 0.85rem;
    font-family: ${(props) => props.theme.fonts.body};
    font-size: 0.95rem;
    color: ${(props) => props.theme.white};
    background: rgba(2, 6, 8, 0.75);
    border: 1px solid ${(props) => props.theme['line-strong']};
    border-radius: 0;
    transition: border-color 0.2s ease;

    &::placeholder {
      color: ${(props) => props.theme['text-faint']};
    }

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.accent};
      box-shadow: 0 0 0 1px ${(props) => props.theme.accent};
    }

    &[aria-invalid='true'] {
      border-color: ${(props) => props.theme.danger};
    }
  }

  textarea {
    resize: vertical;
    min-height: 7.5rem;
    line-height: 1.55;
  }
`

export const FieldError = styled.p`
  font-size: 0.82rem;
  color: ${(props) => props.theme.danger};
`

export const FormActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;

  ${media.sm} {
    > * {
      flex: 1;
    }
  }
`

export const Hint = styled.p`
  margin-top: 0.85rem;
  font-size: 0.82rem;
  color: ${(props) => props.theme['text-faint']};
`

export const SentNotice = styled.p`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme['accent-dim']};
  border-left: 3px solid ${(props) => props.theme.accent};

  a {
    color: ${(props) => props.theme.accent};
  }
`
