export const navItems = [
  { to: 'home-section', label: '//Sobre mim' },
  { to: 'skills-section', label: '//Skills' },
  { to: 'portfolio-section', label: '//Projetos' },
  { to: 'contact-section', label: '//Contato' },
] as const

export type NavItem = (typeof navItems)[number]
