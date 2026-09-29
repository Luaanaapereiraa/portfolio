import styled from 'styled-components'
import { media } from '../../styles/breakpoints'
import { monoLabel, pageWrap } from '../../styles/mixins'

export const ContainerFooter = styled.footer`
  border-top: 1px solid ${(props) => props.theme.line};
`

/** Linha de status: autoria à esquerda, versão/local à direita. */
export const StatusBar = styled.div`
  ${pageWrap}
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  ${monoLabel}
  font-size: 0.68rem;
  color: ${(props) => props.theme['text-faint']};

  p:first-child {
    color: ${(props) => props.theme['text-dim']};
  }

  ${media.sm} {
    flex-direction: column;
    text-align: center;
  }
`

export const Online = styled.span`
  color: ${(props) => props.theme.accent};
`
