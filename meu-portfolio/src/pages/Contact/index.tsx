import { Icon } from '@iconify/react'
import { contactInfo } from '../../data/contact'
import { useSectionInView } from '../../hooks/useSectionInView'
import { SectionTitle } from '../../styles/shared'
import {
  ContactCard,
  ContainerContact,
  IconStyle,
  PurpleText,
} from './styles'

const Contact = () => {
  const { ref, inView } = useSectionInView()

  return (
    <ContainerContact id="contact-section" $isActive={inView} ref={ref}>
      <SectionTitle>Contato</SectionTitle>
      <PurpleText>Vamos conversar?</PurpleText>
      <p>Entre em contato comigo pelos links abaixo, por e-mail ou LinkedIn:</p>
      <IconStyle>
        <ContactCard href={`mailto:${contactInfo.email}`}>
          <Icon icon="line-md:email" color="#8519ff" width="64" height="64" />
          <span>{contactInfo.email}</span>
        </ContactCard>
        <ContactCard
          href={contactInfo.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="devicon:linkedin" width="56" height="56" />
          <span>{contactInfo.linkedinLabel}</span>
        </ContactCard>
      </IconStyle>
    </ContainerContact>
  )
}

export default Contact
