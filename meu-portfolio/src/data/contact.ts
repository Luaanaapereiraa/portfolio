import { defaultTheme } from '../styles/themes/default'

export const contactInfo = {
  email: 'luanapdsantos@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/luaanaapereiraa',
  linkedinLabel: 'luaanaapereiraa',
  whatsappNumber: '11942455747',
  whatsappLabel: 'WhatsApp',
} as const

const ACCENT = defaultTheme.accent

const DEFAULT_WHATSAPP_MESSAGE = 'Olá! Vim pelo seu portfólio.'

export function getWhatsAppUrl(
  phone: string,
  message = DEFAULT_WHATSAPP_MESSAGE
) {
  let digits = phone.replace(/\D/g, '')

  if (digits && !digits.startsWith('55')) {
    digits = `55${digits}`
  }

  const url = new URL(`https://wa.me/${digits}`)
  url.searchParams.set('text', message)
  return url.toString()
}

export interface ContactChannel {
  id: string
  href: string
  label: string
  /** rótulo curto do canal, exibido acima do endereço */
  caption: string
  icon: string
  iconColor?: string
  iconWidth: number
  iconHeight: number
  external?: boolean
}

export const contactChannels: ContactChannel[] = [
  {
    id: 'email',
    href: `mailto:${contactInfo.email}`,
    label: contactInfo.email,
    caption: 'E-mail',
    icon: 'mdi:email-outline',
    iconColor: ACCENT,
    iconWidth: 28,
    iconHeight: 28,
  },
  {
    id: 'linkedin',
    href: contactInfo.linkedinUrl,
    label: contactInfo.linkedinLabel,
    caption: 'LinkedIn',
    icon: 'mdi:linkedin',
    iconColor: ACCENT,
    iconWidth: 28,
    iconHeight: 28,
    external: true,
  },
  {
    id: 'whatsapp',
    href: getWhatsAppUrl(contactInfo.whatsappNumber),
    label: contactInfo.whatsappLabel,
    caption: 'Mensagem',
    icon: 'ic:baseline-whatsapp',
    iconColor: ACCENT,
    iconWidth: 28,
    iconHeight: 28,
    external: true,
  },
]
