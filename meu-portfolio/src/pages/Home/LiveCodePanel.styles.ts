import styled, { keyframes } from 'styled-components'
import { layerFloat } from '../../styles/animations'
import type { TokenKind } from './LiveCodePanel'

const blink = keyframes`
  50% {
    opacity: 0;
  }
`

// paleta de terminal HUD: ciano só nas palavras-chave, o resto em tons frios
const tokenColors: Record<TokenKind, string> = {
  keyword: '#00E0FF',
  ident: '#DDF7FB',
  fn: '#FFFFFF',
  punct: '#6E9AA3',
  comment: '#4F8390',
}

// Tamanhos em cqi (% da largura do painel) para acompanhar a ilustração em qualquer tela
export const PanelWrap = styled.div`
  position: absolute;
  container-type: inline-size;
  pointer-events: none;
  filter: drop-shadow(0 0 8px rgba(0, 224, 255, 0.25));
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
  border-radius: 2cqi;
  border: 0.6cqi solid rgba(0, 224, 255, 0.55);
  /* opaco de propósito: cobre o que sobrou do painel original na camada de trás */
  background:
    linear-gradient(rgba(0, 224, 255, 0.05) 1px, transparent 1px) 0 0 / 100% 4cqi,
    linear-gradient(180deg, #0a1d23 0%, #06141a 100%);
  box-shadow: inset 0 0 4cqi rgba(0, 224, 255, 0.12);

  pre {
    margin: 0;
    font-family: 'JetBrains Mono', monospace;
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
  font-family: 'JetBrains Mono', monospace;
  font-size: 4.2cqi;
  letter-spacing: 0.08em;
  color: #6E9AA3;

  span {
    margin-left: 2cqi;
  }
`

export const Dot = styled.i<{ $color: string }>`
  width: 2.6cqi;
  height: 2.6cqi;
  background: ${(props) => props.$color};
`

export const CodeLine = styled.span`
  display: block;
  min-height: 1.55em;
`

export const Token = styled.span<{ $kind: TokenKind }>`
  color: ${(props) => tokenColors[props.$kind]};
  font-style: ${(props) => (props.$kind === 'comment' ? 'italic' : 'normal')};
`

export const Cursor = styled.i`
  display: inline-block;
  width: 0.55em;
  height: 1.1em;
  margin-left: 0.1em;
  vertical-align: text-bottom;
  background: #00e0ff;
  animation: ${blink} 1s steps(1) infinite;
`
