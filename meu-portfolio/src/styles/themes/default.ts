/**
 * Tema HUD: preto frio + um único acento ciano. Hierarquia vem de peso,
 * tamanho e linhas finas, não de cor — o ciano marca só o que é interativo
 * ou "ativo" (status, índices, cursor).
 */
export const defaultTheme = {
  fonts: {
    display: "'Chakra Petch', sans-serif",
    mono: "'JetBrains Mono', monospace",
    body: "'IBM Plex Sans', sans-serif",
  },

  // texto (do mais forte ao mais fraco)
  white: '#EAFBFF',
  text: '#C7DCE0',
  'text-dim': '#8AA5AB',
  'text-faint': '#56717A',

  // acento
  accent: '#00E0FF',
  'accent-dim': '#0A8FA3',
  'accent-soft': 'rgba(0, 224, 255, 0.1)',
  'on-accent': '#021216',

  // superfícies e linhas
  bg: '#05080A',
  panel: 'rgba(7, 15, 18, 0.86)',
  'panel-solid': '#07100F',
  line: '#15303A',
  'line-strong': '#24505B',
  grid: 'rgba(0, 224, 255, 0.045)',
} as const
