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
      expect.arrayContaining([
        'NestJS',
        'Fastify',
        'PostgreSQL',
        'Supabase',
        'MongoDB',
        'MySQL',
        'Axios',
        'AWS',
        'Azure',
        'Playwright',
      ])
    )
    skills.forEach((skill) => {
      expect(skill.icon).toBeTruthy()
    })
  })
})

describe('projects', () => {
  it('expõe projetos com título, descrição, stack e links válidos', () => {
    expect(projects.length).toBeGreaterThan(0)
    expect(new Set(projects.map((project) => project.id)).size).toBe(projects.length)

    projects.forEach((project) => {
      expect(project.title).toBeTruthy()
      expect(project.tagline).toBeTruthy()
      expect(project.description).toBeTruthy()
      expect(project.stack.length).toBeGreaterThan(0)
      expect(project.links.length).toBeGreaterThan(0)
      project.links.forEach((link) => {
        expect(link.href).toMatch(link.external ? /^https:\/\// : /^#/)
      })
    })
  })

  it('destaca o DestravAI e não lista mais o PomodoroDev', () => {
    const featured = projects.filter((project) => project.featured)

    expect(featured.map((project) => project.title)).toEqual(['DestravAI'])
    expect(featured[0].highlights?.length).toBeGreaterThan(0)
    expect(projects.some((project) => /pomodoro/i.test(project.title))).toBe(false)
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
