export const contactInfo = {
  email: 'luanapdsantos@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/luaanaapereiraa',
  linkedinLabel: 'luaanaapereiraa',
  whatsappNumber: '11942455747',
  whatsappLabel: 'WhatsApp',
} as const

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
    icon: 'line-md:email',
    iconColor: '#8519ff',
    iconWidth: 64,
    iconHeight: 64,
  },
  {
    id: 'linkedin',
    href: contactInfo.linkedinUrl,
    label: contactInfo.linkedinLabel,
    icon: 'devicon:linkedin',
    iconWidth: 56,
    iconHeight: 56,
    external: true,
  },
  {
    id: 'whatsapp',
    href: getWhatsAppUrl(contactInfo.whatsappNumber),
    label: contactInfo.whatsappLabel,
    icon: 'ic:baseline-whatsapp',
    iconColor: '#25D366',
    iconWidth: 56,
    iconHeight: 56,
    external: true,
  },
]
