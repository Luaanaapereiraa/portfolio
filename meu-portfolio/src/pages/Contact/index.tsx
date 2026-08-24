import { Icon } from '@iconify/react'
import { contactChannels } from '../../data/contact'
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
      <p>Entre em contato comigo pelos links abaixo, por e-mail, LinkedIn ou WhatsApp:</p>
      <IconStyle>
        {contactChannels.map((channel) => (
          <ContactCard
            key={channel.id}
            href={channel.href}
            target={channel.external ? '_blank' : undefined}
            rel={channel.external ? 'noopener noreferrer' : undefined}
          >
            <Icon
              icon={channel.icon}
              color={channel.iconColor}
              width={channel.iconWidth}
              height={channel.iconHeight}
            />
            <span>{channel.label}</span>
          </ContactCard>
        ))}
      </IconStyle>
    </ContainerContact>
  )
}

export default Contact
