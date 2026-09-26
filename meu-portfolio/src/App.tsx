import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'styled-components'
import { ignoreOptedOut } from './analytics'
import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

const App = () => {
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
      <GlobalStyle />
      {/* Vercel Web Analytics: sem cookies; só envia no build de produção */}
      <Analytics
        mode={import.meta.env.PROD ? 'production' : 'development'}
        debug={false}
        beforeSend={ignoreOptedOut}
      />
    </ThemeProvider>
  )
}

export default App
