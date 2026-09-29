import { track } from '@vercel/analytics/react'
import { sendGoogleEvent } from './googleAnalytics'

/** Chave no localStorage que desliga a contagem neste navegador (ex.: as suas visitas). */
export const OPT_OUT_KEY = 'va-disable'

/** `?nao-rastrear` liga o opt-out neste navegador; `?rastrear` desliga. */
const OPT_OUT_PARAM = 'nao-rastrear'
const OPT_IN_PARAM = 'rastrear'

/** Limite de tamanho de valor de propriedade no Vercel Analytics. */
const MAX_VALUE_LENGTH = 255

export type EventName =
  | 'Section Viewed'
  | 'CTA Clicked'
  | 'Project Link Clicked'
  | 'Contact Clicked'
  | 'JS Error'

type EventProps = Record<string, string>

/** Nomes no padrão do GA4 (snake_case). `exception` é o evento padrão de erro do GA. */
const GOOGLE_EVENT_NAMES: Record<EventName, string> = {
  'Section Viewed': 'section_view',
  'CTA Clicked': 'cta_click',
  'Project Link Clicked': 'project_link_click',
  'Contact Clicked': 'contact_click',
  'JS Error': 'exception',
}

export function isOptedOut() {
  try {
    return Boolean(window.localStorage.getItem(OPT_OUT_KEY))
  } catch {
    // localStorage bloqueado (modo privado etc.): segue contando
    return false
  }
}

/** Descarta eventos (analytics e speed insights) quando o navegador está marcado para não ser contado. */
export function ignoreOptedOut<T>(event: T): T | null {
  return isOptedOut() ? null : event
}

/**
 * Lê `?nao-rastrear` / `?rastrear` da URL, grava a preferência e limpa o parâmetro
 * da barra de endereço (para não ir parar em links compartilhados).
 */
export function applyOptOutFromUrl() {
  const url = new URL(window.location.href)
  const optOut = url.searchParams.has(OPT_OUT_PARAM)
  const optIn = url.searchParams.has(OPT_IN_PARAM)
  if (!optOut && !optIn) return

  try {
    if (optOut) window.localStorage.setItem(OPT_OUT_KEY, '1')
    else window.localStorage.removeItem(OPT_OUT_KEY)
  } catch {
    // sem localStorage não há como lembrar a preferência
  }

  url.searchParams.delete(OPT_OUT_PARAM)
  url.searchParams.delete(OPT_IN_PARAM)
  window.history.replaceState(null, '', url.pathname + url.search + url.hash)
}

/**
 * Ponto único de envio de eventos, para Vercel Analytics e Google Analytics 4.
 * Máximo de 2 propriedades por evento (limite do Vercel Analytics no plano Pro).
 */
export function trackEvent(name: EventName, props: EventProps = {}) {
  if (isOptedOut()) return

  const safeProps = Object.fromEntries(
    Object.entries(props)
      .slice(0, 2)
      .map(([key, value]) => [key, value.slice(0, MAX_VALUE_LENGTH)])
  )
  track(name, safeProps)

  if (name === 'JS Error') {
    sendGoogleEvent('exception', {
      description: `${safeProps.message ?? ''} @ ${safeProps.source ?? ''}`.slice(0, MAX_VALUE_LENGTH),
      fatal: false,
    })
  } else {
    sendGoogleEvent(GOOGLE_EVENT_NAMES[name], safeProps)
  }
}

/**
 * Cliques rastreados por atributos no HTML, sem acoplar componentes ao analytics:
 * `data-track="CTA Clicked" data-track-cta="ver-projetos" data-track-section="hero"`.
 */
export function installClickTracking() {
  const onClick = (event: MouseEvent) => {
    const target = (event.target as Element | null)?.closest<HTMLElement>('[data-track]')
    if (!target) return

    const props: EventProps = {}
    Object.entries(target.dataset).forEach(([key, value]) => {
      // data-track-cta → dataset.trackCta → "cta"
      if (key.startsWith('track') && key !== 'track' && value) {
        props[key.charAt(5).toLowerCase() + key.slice(6)] = value
      }
    })
    trackEvent(target.dataset.track as EventName, props)
  }

  document.addEventListener('click', onClick, { capture: true })
  return () => document.removeEventListener('click', onClick, { capture: true })
}

/** Erros de JavaScript dos visitantes (sem stack/PII: só mensagem e arquivo:linha). */
export function installErrorTracking() {
  const onError = (event: ErrorEvent) => {
    const file = event.filename ? event.filename.split('/').pop() : 'desconhecido'
    trackEvent('JS Error', {
      message: event.message || 'erro sem mensagem',
      source: `${file}:${event.lineno ?? 0}`,
    })
  }
  const onRejection = (event: PromiseRejectionEvent) => {
    const reason = event.reason instanceof Error ? event.reason.message : String(event.reason)
    trackEvent('JS Error', { message: reason, source: 'promise' })
  }

  window.addEventListener('error', onError)
  window.addEventListener('unhandledrejection', onRejection)
  return () => {
    window.removeEventListener('error', onError)
    window.removeEventListener('unhandledrejection', onRejection)
  }
}
