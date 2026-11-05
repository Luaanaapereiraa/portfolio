import { describe, expect, it } from 'vitest'
import {
  buildQuoteEmailUrl,
  buildQuoteMessage,
  serviceOptions,
  services,
  validateQuote,
  type QuoteRequest,
} from './freela'

const quote: QuoteRequest = {
  name: '  Ana  ',
  service: 'Sites e landing pages',
  timeline: '1 a 3 meses',
  budget: 'R$ 3 mil a R$ 8 mil',
  description: 'Site para minha clínica com agendamento.',
}

describe('validateQuote', () => {
  it('aceita um pedido completo', () => {
    expect(validateQuote(quote)).toEqual({})
  })

  it('exige nome, tipo de projeto e uma descrição mínima', () => {
    const errors = validateQuote({ name: ' ', service: '', timeline: '', budget: '', description: 'curto' })
    expect(Object.keys(errors).sort()).toEqual(['description', 'name', 'service'])
  })
})

describe('buildQuoteMessage', () => {
  it('monta a mensagem com todos os campos, sem espaços sobrando no nome', () => {
    const message = buildQuoteMessage(quote)
    expect(message).toContain('Nome: Ana\n')
    expect(message).toContain('Projeto: Sites e landing pages')
    expect(message).toContain('Prazo: 1 a 3 meses')
    expect(message).toContain('Investimento: R$ 3 mil a R$ 8 mil')
    expect(message.endsWith('Site para minha clínica com agendamento.')).toBe(true)
  })

  it('omite prazo e investimento quando não informados', () => {
    const message = buildQuoteMessage({ ...quote, timeline: '', budget: '' })
    expect(message).not.toContain('Prazo:')
    expect(message).not.toContain('Investimento:')
  })
})

describe('buildQuoteEmailUrl', () => {
  it('gera mailto com assunto e corpo codificados', () => {
    const url = buildQuoteEmailUrl('eu@exemplo.com', quote)
    const params = new URLSearchParams(url.split('?')[1])

    expect(url.startsWith('mailto:eu@exemplo.com?')).toBe(true)
    expect(params.get('subject')).toBe('Orçamento: Sites e landing pages (Ana)')
    expect(params.get('body')).toBe(buildQuoteMessage(quote))
  })
})

describe('opções de serviço', () => {
  it('lista todos os serviços da página e a opção "Outro"', () => {
    expect(serviceOptions).toEqual([...services.map((s) => s.title), 'Outro'])
  })
})
