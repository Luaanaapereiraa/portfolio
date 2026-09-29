import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  CONSENT_KEY,
  OPEN_CONSENT_EVENT,
  initGoogleAnalytics,
  isGoogleAnalyticsActive,
  reopenConsent,
  setConsent,
} from './googleAnalytics'

/** Chamadas do gtag viram objetos `arguments` no dataLayer; converte para arrays. */
const calls = () => (window.dataLayer ?? []).map((entry) => Array.from(entry as ArrayLike<unknown>))
const lastCall = () => calls()[calls().length - 1]

afterEach(() => {
  delete window.gtag
  delete window.dataLayer
  window.localStorage.clear()
  document.head.querySelectorAll('script[src*="googletagmanager"]').forEach((el) => el.remove())
})

describe('initGoogleAnalytics', () => {
  it('não carrega nada sem ID configurado', () => {
    expect(initGoogleAnalytics('')).toBe(false)
    expect(isGoogleAnalyticsActive()).toBe(false)
    expect(document.querySelector('script[src*="googletagmanager"]')).toBeNull()
  })

  it('começa com consentimento negado e carrega o gtag.js com o ID', () => {
    expect(initGoogleAnalytics('G-TESTE123')).toBe(true)

    const [consent, js, config] = calls()
    expect(consent).toEqual([
      'consent',
      'default',
      expect.objectContaining({ analytics_storage: 'denied', ad_storage: 'denied' }),
    ])
    expect(js[0]).toBe('js')
    expect(config).toEqual(['config', 'G-TESTE123'])
    expect(
      document.querySelector('script[src="https://www.googletagmanager.com/gtag/js?id=G-TESTE123"]')
    ).not.toBeNull()
  })

  it('respeita um aceite salvo em visita anterior', () => {
    window.localStorage.setItem(CONSENT_KEY, 'granted')
    initGoogleAnalytics('G-TESTE123')

    expect(calls()[0][2]).toEqual(expect.objectContaining({ analytics_storage: 'granted' }))
  })

  it('não inicia duas vezes', () => {
    initGoogleAnalytics('G-TESTE123')
    expect(initGoogleAnalytics('G-TESTE123')).toBe(false)
  })
})

describe('consentimento', () => {
  it('setConsent salva a escolha e atualiza o GA', () => {
    initGoogleAnalytics('G-TESTE123')
    setConsent('granted')

    expect(window.localStorage.getItem(CONSENT_KEY)).toBe('granted')
    expect(lastCall()).toEqual(['consent', 'update', { analytics_storage: 'granted' }])
  })

  it('reopenConsent revoga (volta a denied) e pede o aviso de novo', () => {
    initGoogleAnalytics('G-TESTE123')
    setConsent('granted')
    const onOpen = vi.fn()
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen)

    reopenConsent()
    window.removeEventListener(OPEN_CONSENT_EVENT, onOpen)

    expect(window.localStorage.getItem(CONSENT_KEY)).toBeNull()
    expect(lastCall()).toEqual(['consent', 'update', { analytics_storage: 'denied' }])
    expect(onOpen).toHaveBeenCalledTimes(1)
  })
})
