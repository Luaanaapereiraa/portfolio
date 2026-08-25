import { describe, expect, it } from 'vitest'
import { navItems } from './nav'
import { projects } from './projects'
import { skillGroups, skills } from './skills'
import { contactInfo, getWhatsAppUrl } from './contact'

describe('navItems', () => {
  it('lista as seções principais do portfólio', () => {
    expect(navItems.map((item) => item.to)).toEqual([
      'home-section',
      'skills-section',
      'portfolio-section',
      'contact-section',
    ])
  })
})

describe('skills', () => {
  it('tem nomes únicos, ícones e categorias de full cycle', () => {
    const names = skills.map((skill) => skill.name)
    const groupTitles = skillGroups.map((group) => group.title)

    expect(skills.length).toBeGreaterThan(0)
    expect(new Set(names).size).toBe(names.length)
    expect(groupTitles).toEqual([
      'Frontend',
      'Backend',
      'Cloud & DevOps',
      'Qualidade',
      'Colaboração',
    ])
    expect(names).toEqual(
      expect.arrayContaining(['NestJS', 'MongoDB', 'MySQL', 'Axios', 'Azure', 'Playwright'])
    )
    skills.forEach((skill) => {
      expect(skill.icon).toBeTruthy()
    })
  })
})

describe('projects', () => {
  it('expõe projetos com título, descrição e link válido', () => {
    expect(projects.length).toBeGreaterThan(0)

    projects.forEach((project) => {
      expect(project.title).toBeTruthy()
      expect(project.description).toBeTruthy()
      expect(project.image).toBeTruthy()
      expect(project.link).toMatch(/^https:\/\//)
    })
  })
})

describe('contactInfo', () => {
  it('mantém e-mail, LinkedIn e WhatsApp preenchidos', () => {
    expect(contactInfo.email).toMatch(/@/)
    expect(contactInfo.linkedinUrl).toMatch(/^https:\/\//)
    expect(contactInfo.linkedinLabel).toBeTruthy()
    expect(contactInfo.whatsappLabel).toBe('WhatsApp')
    expect(contactInfo.whatsappNumber).toMatch(/^\d{11}$/)
  })
})

describe('getWhatsAppUrl', () => {
  it('monta o link do WhatsApp com DDI 55 e mensagem', () => {
    expect(getWhatsAppUrl('(11) 99999-9999')).toBe(
      'https://wa.me/5511999999999?text=Ol%C3%A1%21+Vim+pelo+seu+portf%C3%B3lio.'
    )
  })
})
