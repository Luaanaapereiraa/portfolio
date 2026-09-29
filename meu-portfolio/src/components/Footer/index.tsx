import { ContainerFooter, Online, StatusBar } from './styles'

const Footer = () => {
  return (
    <ContainerFooter>
      <StatusBar>
        <p>Projetado e desenvolvido por Luana Pereira</p>
        <p>
          <Online aria-hidden="true">● </Online>v2.0 · São Paulo, BR · {new Date().getFullYear()}
        </p>
      </StatusBar>
    </ContainerFooter>
  )
}

export default Footer
