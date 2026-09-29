import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { ignoreOptedOut, installClickTracking, installErrorTracking } from './analytics'
import ConsentBanner from './components/ConsentBanner'
import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import { navItems } from './data/nav'
import { useTrackSectionViews } from './hooks/useTrackSectionViews'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

const SECTION_IDS = navItems.map((item) => item.to)

const App = () => {
  useEffect(() => {
    const removeClicks = installClickTracking()
    const removeErrors = installErrorTracking()
    return () => {
      removeClicks()
      removeErrors()
    }
  }, [])
  useTrackSectionViews(SECTION_IDS)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <main>
        <Home />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
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

export default App
