import { act, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { renderWithTheme } from '../../test/render'
import { LiveCodePanel } from './LiveCodePanel'

const FULL_CODE = /agente[\s\S]*destravar[\s\S]*3 passos/

function mockReducedMotion(reduce: boolean) {
  vi.stubGlobal('matchMedia', (query: string) => ({ matches: reduce, media: query }))
}

/** Avança a digitação tique a tique: cada timer só é agendado após o re-render. */
function tick(times: number, ms = 45) {
  for (let i = 0; i < times; i++) {
    act(() => {
      vi.advanceTimersByTime(ms)
    })
  }
}

const codeText = () => screen.getByTestId('live-code-panel').querySelector('pre')?.textContent ?? ''

describe('LiveCodePanel', () => {
  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('é decorativo e mostra o código completo com movimento reduzido', () => {
    mockReducedMotion(true)
    renderWithTheme(<LiveCodePanel />)

    expect(screen.getByTestId('live-code-panel')).toHaveAttribute('aria-hidden', 'true')
    expect(codeText()).toMatch(FULL_CODE)
  })

  it('digita o código aos poucos e recomeça depois de uma pausa', () => {
    vi.useFakeTimers()
    mockReducedMotion(false)
    renderWithTheme(<LiveCodePanel />)

    expect(codeText()).toBe('')

    tick(11)
    expect(codeText()).toContain('const plano')
    expect(codeText()).not.toMatch(FULL_CODE)

    tick(120) // ~104 caracteres; a pausa de 3,5s ainda não terminou
    expect(codeText()).toMatch(FULL_CODE)

    tick(1, 3500)
    expect(codeText()).toBe('')
  })
})
