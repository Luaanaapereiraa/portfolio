import { Icon } from '@iconify/react'
import { contactChannels } from '../../data/contact'
import { useSectionInView } from '../../hooks/useSectionInView'
import { SectionTitle } from '../../styles/shared'
import {
  AccentText,
  ContactCard,
  ContainerContact,
  FreelaLink,
  IconStyle,
} from './styles'

const Contact = () => {
  const { ref, inView } = useSectionInView()

  return (
    <ContainerContact id="contact-section" $isActive={inView} ref={ref}>
      <SectionTitle data-kicker="[04] // canal aberto">Contato</SectionTitle>
      <AccentText>&gt; vamos conversar?</AccentText>
      <p>Aberta a oportunidades e a conversas sobre o BoxStep. Escolha o canal:</p>
      <IconStyle>
        {contactChannels.map((channel) => (
          <ContactCard
            key={channel.id}
            href={channel.href}
            target={channel.external ? '_blank' : undefined}
            rel={channel.external ? 'noopener noreferrer' : undefined}
            data-track="Contact Clicked"
            data-track-channel={channel.id}
          >
            <Icon
              icon={channel.icon}
              color={channel.iconColor}
              width={channel.iconWidth}
              height={channel.iconHeight}
            />
            <span>
              <small aria-hidden="true">{channel.caption}</small>
              {channel.label}
            </span>
          </ContactCard>
        ))}
      </IconStyle>
      <FreelaLink
        href="/freela/"
        data-track="CTA Clicked"
        data-track-cta="freela"
        data-track-section="contato"
      >
        <span aria-hidden="true">▸</span> Tem um projeto para tirar do papel? Também atendo como
        freelancer <span aria-hidden="true">→</span>
      </FreelaLink>
    </ContainerContact>
  )
}

export default Contact
