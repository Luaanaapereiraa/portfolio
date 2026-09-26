import styled, { keyframes } from 'styled-components'
import { layerFloat } from '../../styles/animations'
import type { TokenKind } from './LiveCodePanel'

const blink = keyframes`
  50% {
    opacity: 0;
  }
`

const tokenColors: Record<TokenKind, string> = {
  keyword: '#f5a8ff',
  ident: '#eef0ff',
  fn: '#6ff0ff',
  punct: '#c3c8ff',
  comment: '#9fe8c4',
}

// Tamanhos em cqi (% da largura do painel) para acompanhar a ilustração em qualquer tela
export const PanelWrap = styled.div`
  position: absolute;
  container-type: inline-size;
  pointer-events: none;
  filter: drop-shadow(0 0 10px rgba(192, 132, 252, 0.55));
  will-change: transform;
  animation: ${layerFloat} var(--float-duration, 6s) ease-in-out infinite;
  animation-delay: var(--float-delay, 0s);
`

export const Glass = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: skewY(var(--skew-y, 0deg));
  transform-origin: 0 0;
  padding: 5cqi 6cqi;
  border-radius: 5.5cqi;
  border: 0.6cqi solid rgba(226, 214, 255, 0.8);
  background:
    radial-gradient(120% 90% at 100% 100%, rgba(56, 189, 248, 0.75), transparent 60%),
    linear-gradient(160deg, #6d4cff 0%, #4b43e0 45%, #2f5fe8 100%);
  box-shadow:
    inset 0 0 4cqi rgba(255, 255, 255, 0.18),
    inset 0 0.6cqi 0 rgba(255, 255, 255, 0.25);

  pre {
    margin: 0;
    font-family: 'Roboto Mono', monospace;
    font-size: 5.6cqi;
    line-height: 1.55;
    white-space: pre;
  }
`

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6cqi;
  margin-bottom: 3.5cqi;
  font-family: 'Roboto Mono', monospace;
  font-size: 4.2cqi;
  color: rgba(226, 214, 255, 0.75);

  span {
    margin-left: 2cqi;
  }
`

export const Dot = styled.i<{ $color: string }>`
  width: 2.6cqi;
  height: 2.6cqi;
  border-radius: 50%;
  background: ${(props) => props.$color};
  box-shadow: 0 0 2cqi ${(props) => props.$color};
`

export const CodeLine = styled.span`
  display: block;
  min-height: 1.55em;
`

export const Token = styled.span<{ $kind: TokenKind }>`
  color: ${(props) => tokenColors[props.$kind]};
  font-style: ${(props) => (props.$kind === 'comment' ? 'italic' : 'normal')};
  text-shadow: 0 0 1.5cqi rgba(255, 255, 255, 0.25);
`

export const Cursor = styled.i`
  display: inline-block;
  width: 0.55em;
  height: 1.1em;
  margin-left: 0.1em;
  vertical-align: text-bottom;
  background: #6ff0ff;
  box-shadow: 0 0 1.5cqi #6ff0ff;
  animation: ${blink} 1s steps(1) infinite;
`
