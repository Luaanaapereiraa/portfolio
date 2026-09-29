/**
 * Google Analytics 4 com Consent Mode v2 (LGPD).
 *
 * - Só carrega se VITE_GA_MEASUREMENT_ID estiver definido (build de produção).
 * - Começa com tudo "denied": sem cookies, o GA recebe apenas sinais anônimos
 *   e estima os números. Cookies de análise só depois do "Aceitar" no aviso.
 * - Anúncios ficam sempre negados (o site não faz remarketing).
 */

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export const CONSENT_KEY = 'ga-consent'
export type Consent = 'granted' | 'denied'

export function getStoredConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

export function isGoogleAnalyticsActive() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

/** Grava a escolha do aviso e atualiza o consentimento no GA. */
export function setConsent(consent: Consent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, consent)
  } catch {
    // sem localStorage o aviso volta na próxima visita; o GA segue com o consentimento atual
  }
  window.gtag?.('consent', 'update', { analytics_storage: consent })
}

/** Evento de janela que reabre o aviso de cookies (link "Cookies" no rodapé). */
export const OPEN_CONSENT_EVENT = 'consent:open'

/** Revoga a escolha: volta a "denied" e pede para o aviso reaparecer. */
export function reopenConsent() {
  try {
    window.localStorage.removeItem(CONSENT_KEY)
  } catch {
    // sem localStorage não há escolha salva para apagar
  }
  window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))
}

/** Injeta o gtag.js. Retorna false (e não faz nada) sem ID ou se já foi iniciado. */
export function initGoogleAnalytics(measurementId = GA_MEASUREMENT_ID) {
  if (!measurementId || isGoogleAnalyticsActive()) return false

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // o gtag.js exige o objeto `arguments`, não um array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments)
  }

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: getStoredConsent() === 'granted' ? 'granted' : 'denied',
    wait_for_update: 500,
  })
  window.gtag('js', new Date())
  window.gtag('config', measurementId)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)
  return true
}

/** Envia um evento para o GA4 (no-op se o GA não foi iniciado). */
export function sendGoogleEvent(name: string, params: Record<string, string | boolean>) {
  window.gtag?.('event', name, params)
}
