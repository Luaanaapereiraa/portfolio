import { useEffect } from 'react'
import { trackEvent } from '../analytics'

/**
 * Conta como "vista" quando a seção entra nos 60% de cima da tela. Usar margem (e não
 * uma fração da seção) funciona para seções mais altas que a tela, como Skills no celular.
 */
const ROOT_MARGIN = '0px 0px -40% 0px'

/**
 * Registra "Section Viewed" uma vez por visita para cada seção (pelo id do elemento).
 * Mostra até onde as pessoas chegam na página — um funil de engajamento.
 */
export function useTrackSectionViews(sectionIds: readonly string[]) {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const seen = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (!entry.isIntersecting || seen.has(id)) return
          seen.add(id)
          trackEvent('Section Viewed', { section: id.replace(/-section$/, '') })
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: ROOT_MARGIN }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])
}
