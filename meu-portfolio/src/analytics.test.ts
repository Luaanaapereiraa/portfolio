import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  OPT_OUT_KEY,
  applyOptOutFromUrl,
  ignoreOptedOut,
  installClickTracking,
  installErrorTracking,
  trackEvent,
} from './analytics'

const { track } = vi.hoisted(() => ({ track: vi.fn() }))
vi.mock('@vercel/analytics/react', () => ({ track }))

const pageview = { type: 'pageview' as const, url: 'https://luanapereira.vercel.app/' }

afterEach(() => {
  window.localStorage.clear()
  track.mockReset()
  document.body.innerHTML = ''
  window.history.replaceState(null, '', '/')
})

describe('ignoreOptedOut', () => {
  it('mantém a visita de quem não pediu para ser ignorado', () => {
    expect(ignoreOptedOut(pageview)).toEqual(pageview)
  })

  it('descarta a visita quando o navegador está marcado', () => {
    window.localStorage.setItem(OPT_OUT_KEY, '1')
    expect(ignoreOptedOut(pageview)).toBeNull()
  })
})

describe('applyOptOutFromUrl', () => {
  it('?nao-rastrear marca o navegador e some da URL, mantendo o resto', () => {
    window.history.replaceState(null, '', '/?nao-rastrear&utm_source=linkedin#contact-section')
    applyOptOutFromUrl()

    expect(window.localStorage.getItem(OPT_OUT_KEY)).toBe('1')
    expect(window.location.search).toBe('?utm_source=linkedin')
    expect(window.location.hash).toBe('#contact-section')
  })

  it('?rastrear desfaz o opt-out', () => {
    window.localStorage.setItem(OPT_OUT_KEY, '1')
    window.history.replaceState(null, '', '/?rastrear')
    applyOptOutFromUrl()

    expect(window.localStorage.getItem(OPT_OUT_KEY)).toBeNull()
    expect(window.location.search).toBe('')
  })
})

describe('trackEvent', () => {
  it('envia no máximo 2 propriedades, com valores de até 255 caracteres', () => {
    trackEvent('JS Error', { message: 'x'.repeat(300), source: 'app.js:1', extra: 'ignorada' })

    const [name, props] = track.mock.calls[0]
    expect(name).toBe('JS Error')
    expect(Object.keys(props)).toEqual(['message', 'source'])
    expect(props.message).toHaveLength(255)
  })

  it('também envia para o GA4, com nomes em snake_case e erro como "exception"', () => {
    const gtag = vi.fn()
    window.gtag = gtag

    trackEvent('Contact Clicked', { channel: 'whatsapp' })
    trackEvent('JS Error', { message: 'boom', source: 'index.js:7' })
    delete window.gtag

    expect(gtag).toHaveBeenCalledWith('event', 'contact_click', { channel: 'whatsapp' })
    expect(gtag).toHaveBeenCalledWith('event', 'exception', {
      description: 'boom @ index.js:7',
      fatal: false,
    })
  })

  it('não envia nada com opt-out', () => {
    window.localStorage.setItem(OPT_OUT_KEY, '1')
    trackEvent('CTA Clicked', { cta: 'ver-projetos' })
    expect(track).not.toHaveBeenCalled()
  })
})

describe('installClickTracking', () => {
  let remove: () => void

  beforeEach(() => {
    remove = installClickTracking()
  })

  afterEach(() => {
    remove()
  })

  it('transforma data-track-* em evento, inclusive clicando num filho', () => {
    document.body.innerHTML = `
      <a href="#x" data-track="Project Link Clicked" data-track-project="boxstep" data-track-link="pedir-uma-demo">
        <span id="inner">Pedir uma demo</span>
      </a>`
    document.getElementById('inner')?.click()

    expect(track).toHaveBeenCalledWith('Project Link Clicked', {
      project: 'boxstep',
      link: 'pedir-uma-demo',
    })
  })

  it('ignora cliques fora de elementos rastreados', () => {
    document.body.innerHTML = '<button id="b">sem rastreio</button>'
    document.getElementById('b')?.click()
    expect(track).not.toHaveBeenCalled()
  })
})

describe('installErrorTracking', () => {
  it('registra erros de JavaScript com mensagem e arquivo:linha', () => {
    const remove = installErrorTracking()
    window.dispatchEvent(
      new ErrorEvent('error', {
        message: 'x is not a function',
        filename: 'https://site/assets/index-abc.js',
        lineno: 42,
      })
    )
    remove()

    expect(track).toHaveBeenCalledWith('JS Error', {
      message: 'x is not a function',
      source: 'index-abc.js:42',
    })
  })
})
