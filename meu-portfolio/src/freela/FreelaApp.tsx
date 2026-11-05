import FreelaHeader from '../components/Header/FreelaHeader'
import SiteShell from '../components/SiteShell'
import { FREELA_SECTION_IDS } from '../data/freela'
import FreelaPage from '../pages/Freela'

const FreelaApp = () => (
  <SiteShell sectionIds={FREELA_SECTION_IDS}>
    <FreelaHeader />
    <FreelaPage />
  </SiteShell>
)

export default FreelaApp
