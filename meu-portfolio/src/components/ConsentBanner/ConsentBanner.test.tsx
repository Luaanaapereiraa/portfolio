import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { CONSENT_KEY, reopenConsent } from '../../googleAnalytics'
import { renderWithTheme } from '../../test/render'
import ConsentBanner from './index'

afterEach(() => {
  window.localStorage.clear()
})

describe('ConsentBanner', () => {
  it('não aparece quando o Google Analytics não está ativo', () => {
    renderWithTheme(<ConsentBanner enabled={false} />)
    expect(screen.queryByRole('region', { name: 'Aviso de cookies' })).not.toBeInTheDocument()
  })

  it('aparece na primeira visita e some depois de aceitar, lembrando a escolha', async () => {
    const user = userEvent.setup()
    renderWithTheme(<ConsentBanner enabled />)

    await user.click(screen.getByRole('button', { name: 'Aceitar' }))

    expect(screen.queryByRole('region', { name: 'Aviso de cookies' })).not.toBeInTheDocument()
    expect(window.localStorage.getItem(CONSENT_KEY)).toBe('granted')
  })

  it('recusar também fecha e fica salvo', async () => {
    const user = userEvent.setup()
    renderWithTheme(<ConsentBanner enabled />)

    await user.click(screen.getByRole('button', { name: 'Recusar' }))

    expect(window.localStorage.getItem(CONSENT_KEY)).toBe('denied')
  })

  it('não reaparece para quem já escolheu, mas volta pelo link "Cookies"', () => {
    window.localStorage.setItem(CONSENT_KEY, 'denied')
    renderWithTheme(<ConsentBanner enabled />)
    expect(screen.queryByRole('region', { name: 'Aviso de cookies' })).not.toBeInTheDocument()

    act(() => reopenConsent())

    expect(screen.getByRole('region', { name: 'Aviso de cookies' })).toBeInTheDocument()
  })
})
