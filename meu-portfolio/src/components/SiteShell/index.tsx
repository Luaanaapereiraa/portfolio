import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { useEffect, type ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { ignoreOptedOut, installClickTracking, installErrorTracking } from '../../analytics'
import { useTrackSectionViews } from '../../hooks/useTrackSectionViews'
import { GlobalStyle } from '../../styles/global'
import { defaultTheme } from '../../styles/themes/default'
import ConsentBanner from '../ConsentBanner'
import Footer from '../Footer'

interface SiteShellProps {
  /** ids das seções desta página para o evento "Section Viewed" */
  sectionIds: readonly string[]
  children: ReactNode
}

/** Casca comum das páginas: tema, rastreamento, rodapé, aviso de cookies e analytics. */
const SiteShell = ({ sectionIds, children }: SiteShellProps) => {
  useEffect(() => {
    const removeClicks = installClickTracking()
    const removeErrors = installErrorTracking()
    return () => {
      removeClicks()
      removeErrors()
    }
  }, [])
  useTrackSectionViews(sectionIds)

  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
      <Footer />
      <ConsentBanner />
      <GlobalStyle />
      {/* Vercel Web Analytics: sem cookies; só envia no build de produção */}
      <Analytics
        mode={import.meta.env.PROD ? 'production' : 'development'}
        debug={false}
        beforeSend={ignoreOptedOut}
      />
      {/* Core Web Vitals de visitantes reais (LCP, INP, CLS) */}
      {import.meta.env.PROD && <SpeedInsights beforeSend={ignoreOptedOut} />}
    </ThemeProvider>
  )
}

export default SiteShell
