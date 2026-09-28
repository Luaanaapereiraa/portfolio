import { useEffect, useState, type CSSProperties } from 'react'
import { codePanel } from './heroLayers'
import { CodeLine, Cursor, Dot, Glass, PanelHeader, PanelWrap, Token } from './LiveCodePanel.styles'

export type TokenKind = 'keyword' | 'ident' | 'fn' | 'punct' | 'comment'
type Line = [text: string, kind: TokenKind][]

// Trecho ilustrativo do fluxo do BoxStep: agente com saída estruturada (Zod).
// Só as ~5 primeiras linhas ficam visíveis — o resto do painel fica atrás do notebook.
const codeLines: Line[] = [
  [['const ', 'keyword'], ['plano', 'ident'], [' = ', 'punct'], ['await ', 'keyword'], ['agente', 'ident']],
  [['  .', 'punct'], ['destravar', 'fn'], ['(', 'punct'], ['tarefa', 'ident'], [', {', 'punct']],
  [['    schema', 'ident'], [': ', 'punct'], ['Plano', 'ident'], [', ', 'punct'], ['// Zod', 'comment']],
  [['  })', 'punct']],
  [['// ✓ 3 passos · 25 min', 'comment']],
]

const TOTAL_CHARS = codeLines.reduce(
  (sum, line) => sum + line.reduce((acc, [text]) => acc + text.length, 0) + 1,
  0
)
const TYPE_MS = 45
const HOLD_MS = 3500

function prefersReducedMotion() {
  return (
    typeof window === 'undefined' ||
    !window.matchMedia ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/** Quantos caracteres já foram "digitados"; reinicia depois de uma pausa. */
function useTypedChars() {
  const [typed, setTyped] = useState(() => (prefersReducedMotion() ? TOTAL_CHARS : 0))

  useEffect(() => {
    if (prefersReducedMotion()) return

    const done = typed >= TOTAL_CHARS
    const timer = window.setTimeout(
      () => setTyped(done ? 0 : typed + 1),
      done ? HOLD_MS : TYPE_MS
    )
    return () => window.clearTimeout(timer)
  }, [typed])

  return typed
}

/**
 * Painel de código da ilustração recriado em HTML, com o código sendo digitado.
 * Fica atrás da foto base, então o notebook continua cobrindo a parte de baixo.
 */
export function LiveCodePanel() {
  const typed = useTypedChars()
  let remaining = typed

  const style = {
    left: `${codePanel.left}%`,
    top: `${codePanel.top}%`,
    width: `${codePanel.width}%`,
    height: `${codePanel.height}%`,
    '--skew-y': `${codePanel.skewY}deg`,
    '--float-y': `-${codePanel.floatY}px`,
    '--float-duration': `${codePanel.duration}s`,
    '--float-delay': `-${codePanel.delay}s`,
  } as CSSProperties

  return (
    <PanelWrap style={style} aria-hidden="true" data-testid="live-code-panel">
      <Glass>
        <PanelHeader>
          <Dot $color="#f472b6" />
          <Dot $color="#c4b5fd" />
          <Dot $color="#c4b5fd" />
          <span>boxstep.ts</span>
        </PanelHeader>
        <pre>
          {codeLines.map((line, lineIndex) => {
            const lineStart = remaining
            const tokens = line.map(([text, kind], tokenIndex) => {
              const visible = text.slice(0, Math.max(0, remaining))
              remaining -= text.length
              return visible ? (
                <Token key={tokenIndex} $kind={kind}>
                  {visible}
                </Token>
              ) : null
            })
            remaining -= 1 // quebra de linha
            // cursor na linha sendo digitada; terminado, fica piscando na última
            const isCurrent =
              typed < TOTAL_CHARS
                ? lineStart >= 0 && remaining < 0
                : lineIndex === codeLines.length - 1
            return (
              <CodeLine key={lineIndex}>
                {tokens}
                {isCurrent && <Cursor />}
              </CodeLine>
            )
          })}
        </pre>
      </Glass>
    </PanelWrap>
  )
}
