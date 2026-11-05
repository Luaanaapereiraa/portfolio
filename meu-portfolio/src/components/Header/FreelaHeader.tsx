import styled from 'styled-components'
import { media } from '../../styles/breakpoints'
import { ButtonLink } from '../../styles/shared'
import { BrandId, HeaderWrapper, LogoMark, Nav, ScrollProgress } from './styles'

const BrandAnchor = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  flex-shrink: 0;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  ${media.sm} {
    a {
      padding: 0.65rem 0.8rem;
    }
  }
`

/** Cabeçalho da página /freela: volta ao portfólio + atalho fixo para o orçamento. */
const FreelaHeader = () => (
  <HeaderWrapper>
    <Nav aria-label="Principal">
      <BrandAnchor href="/" aria-label="Voltar ao portfólio">
        <LogoMark aria-hidden="true">L</LogoMark>
        <BrandId aria-hidden="true">
          <strong>Luana Pereira</strong>
          Freela · sites, apps e sistemas
        </BrandId>
      </BrandAnchor>

      <Actions>
        <ButtonLink href="/" $variant="ghost">
          Portfólio
        </ButtonLink>
        <ButtonLink
          href="#orcamento"
          data-track="CTA Clicked"
          data-track-cta="pedir-orcamento"
          data-track-section="freela-header"
        >
          Pedir orçamento
        </ButtonLink>
      </Actions>
    </Nav>
    <ScrollProgress aria-hidden="true" />
  </HeaderWrapper>
)

export default FreelaHeader
