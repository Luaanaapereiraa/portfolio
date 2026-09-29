import { css } from 'styled-components'

/** Colchetes de canto (┌ ┘) desenhados só com camadas de background, sem pseudo-elementos. */
function cornerBrackets(color: string, size = '12px', weight = '2px') {
  const bar = `linear-gradient(${color}, ${color})`
  return [
    `${bar} top left / ${size} ${weight} no-repeat`,
    `${bar} top left / ${weight} ${size} no-repeat`,
    `${bar} bottom right / ${size} ${weight} no-repeat`,
    `${bar} bottom right / ${weight} ${size} no-repeat`,
  ].join(', ')
}

/** Painel de interface: fundo escuro, linha fina e colchetes ciano nos cantos. */
export const hudPanel = css`
  background: ${(props) => cornerBrackets(props.theme.accent)}, ${(props) => props.theme.panel};
  border: 1px solid ${(props) => props.theme.line};
`

/** Painel simples (sem colchetes) para itens pequenos e repetidos, como os de skills. */
export const hudCell = css`
  background: ${(props) => props.theme.panel};
  border: 1px solid ${(props) => props.theme.line};
`

/** Hover de card: sobe um pouco e a linha "acende" — sem brilho/sombra colorida. */
export const cardHover = css`
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background-color 0.25s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-3px);
      border-color: ${(props) => props.theme['accent-dim']};
    }
  }
`

export const pageWrap = css`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`

/** Cantos cortados (chanfro) no estilo de interface. */
export const chamfer = (size = '8px') => css`
  clip-path: polygon(
    ${size} 0,
    100% 0,
    100% calc(100% - ${size}),
    calc(100% - ${size}) 100%,
    0 100%,
    0 ${size}
  );
`

/** Rótulo técnico em monoespaçada (índices, status, coordenadas). */
export const monoLabel = css`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`
