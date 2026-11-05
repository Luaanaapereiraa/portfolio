import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { contactInfo } from '../../data/contact'
import { renderWithTheme } from '../../test/render'
import QuoteForm from './QuoteForm'

const { trackEvent } = vi.hoisted(() => ({ trackEvent: vi.fn() }))
vi.mock('../../analytics', () => ({ trackEvent }))

afterEach(() => {
  trackEvent.mockReset()
})

async function fillValidQuote(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText('Nome *'), 'Ana')
  await user.selectOptions(screen.getByLabelText('Tipo de projeto *'), 'Apps e MVPs')
  await user.selectOptions(screen.getByLabelText('Prazo'), '1 a 3 meses')
  await user.type(screen.getByLabelText('Sobre o projeto *'), 'Um app para minha academia.')
}

describe('QuoteForm', () => {
  it('mostra os erros, foca o primeiro campo inválido e não envia nada', async () => {
    const user = userEvent.setup()
    const onSend = vi.fn()
    renderWithTheme(<QuoteForm onSend={onSend} />)

    await user.click(screen.getByRole('button', { name: 'Enviar pelo WhatsApp' }))

    expect(screen.getByText('Diga como posso te chamar.')).toBeInTheDocument()
    expect(screen.getByText('Escolha o tipo de projeto.')).toBeInTheDocument()
    expect(screen.getByLabelText('Nome *')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Nome *')).toHaveFocus()
    expect(onSend).not.toHaveBeenCalled()
    expect(trackEvent).not.toHaveBeenCalled()
  })

  it('limpa o erro do campo quando a pessoa corrige', async () => {
    const user = userEvent.setup()
    renderWithTheme(<QuoteForm onSend={vi.fn()} />)

    await user.click(screen.getByRole('button', { name: 'Enviar pelo WhatsApp' }))
    await user.type(screen.getByLabelText('Nome *'), 'A')

    expect(screen.queryByText('Diga como posso te chamar.')).not.toBeInTheDocument()
  })

  it('envia pelo WhatsApp com a mensagem pronta e registra o lead', async () => {
    const user = userEvent.setup()
    const onSend = vi.fn()
    renderWithTheme(<QuoteForm onSend={onSend} />)

    await fillValidQuote(user)
    await user.click(screen.getByRole('button', { name: 'Enviar pelo WhatsApp' }))

    const [url, channel] = onSend.mock.calls[0]
    const text = new URL(url).searchParams.get('text') ?? ''
    expect(channel).toBe('whatsapp')
    expect(url).toMatch(/^https:\/\/wa\.me\/55\d+\?/)
    expect(text).toContain('Nome: Ana')
    expect(text).toContain('Projeto: Apps e MVPs')
    expect(text).toContain('Prazo: 1 a 3 meses')
    expect(trackEvent).toHaveBeenCalledWith('Quote Requested', {
      channel: 'whatsapp',
      service: 'apps-e-mvps',
    })
    expect(screen.getByRole('status')).toHaveTextContent('Abri o WhatsApp')
  })

  it('envia por e-mail para o endereço do portfólio', async () => {
    const user = userEvent.setup()
    const onSend = vi.fn()
    renderWithTheme(<QuoteForm onSend={onSend} />)

    await fillValidQuote(user)
    await user.click(screen.getByRole('button', { name: 'Enviar por e-mail' }))

    const [url, channel] = onSend.mock.calls[0]
    expect(channel).toBe('email')
    expect(url.startsWith(`mailto:${contactInfo.email}?subject=`)).toBe(true)
    expect(screen.getByRole('status')).toHaveTextContent('Abri seu e-mail')
  })
})
