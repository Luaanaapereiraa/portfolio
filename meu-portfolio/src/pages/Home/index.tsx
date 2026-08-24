import homeIllustration from '../../assets/home-illustration.svg'
import { useSectionInView } from '../../hooks/useSectionInView'
import {
  About,
  AboutPurple,
  ContainerHome,
  ContainerText,
  Illustration,
  MyName,
} from './styles'

const Home = () => {
  const { ref, inView } = useSectionInView()

  return (
    <ContainerHome id="home-section" $isActive={inView} ref={ref}>
      <ContainerText>
        <AboutPurple>Olá, meu nome é</AboutPurple>
        <MyName>Luana sou Desenvolvedora de Software Front end</MyName>
        <About>
          Tenho experiência em Marketing Digital e fiz uma transição para Desenvolvimento
          Web. Me considero uma pessoa curiosa e criativa, além de autodidata e apaixonada
          por aprendizado. Estudo inglês por conta própria e acredito que, na área
          tecnológica, sempre há algo novo para aprender e evoluir. Atualmente, estou
          focada no desenvolvimento das minhas habilidades técnicas em JavaScript, React,
          AWS, TypeScript, Node, GraphQL e React Native para mobile. Estou entusiasmada em
          continuar aprendendo e compartilhar meus conhecimentos com outras pessoas.
        </About>
      </ContainerText>

      <Illustration>
        <img
          src={homeIllustration}
          alt="Ilustração de uma desenvolvedora trabalhando no computador"
        />
      </Illustration>
    </ContainerHome>
  )
}

export default Home
