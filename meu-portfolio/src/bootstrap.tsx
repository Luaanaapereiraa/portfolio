import React, { type ReactElement } from 'react'
import { createRoot } from 'react-dom/client'
import { applyOptOutFromUrl, isOptedOut } from './analytics'
import { initGoogleAnalytics } from './googleAnalytics'
import './index.css'

/** Inicialização comum a todas as páginas do site (home e /freela). */
export function mount(app: ReactElement) {
  // antes de renderizar: o primeiro pageview já respeita ?nao-rastrear
  applyOptOutFromUrl()

  // Google Analytics só em produção, com ID configurado e sem opt-out
  if (import.meta.env.PROD && !isOptedOut()) {
    initGoogleAnalytics()
  }

  const rootElement = document.getElementById('root')

  if (!rootElement) {
    throw new Error('Elemento root não encontrado')
  }

  createRoot(rootElement).render(<React.StrictMode>{app}</React.StrictMode>)
}
