import Header from './components/Header'
import SiteShell from './components/SiteShell'
import { navItems } from './data/nav'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'

const SECTION_IDS = navItems.map((item) => item.to)

const App = () => {
  return (
    <SiteShell sectionIds={SECTION_IDS}>
      <Header />
      <main>
        <Home />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </SiteShell>
  )
}

export default App
