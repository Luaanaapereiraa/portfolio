import type { BeforeSendEvent } from '@vercel/analytics/react'

/** Chave no localStorage que desliga a contagem neste navegador (ex.: as suas visitas). */
export const OPT_OUT_KEY = 'va-disable'

/** Descarta eventos quando o navegador está marcado para não ser contado. */
export function ignoreOptedOut(event: BeforeSendEvent) {
  try {
    if (window.localStorage.getItem(OPT_OUT_KEY)) return null
  } catch {
    // localStorage bloqueado (modo privado etc.): segue contando
  }
  return event
}
