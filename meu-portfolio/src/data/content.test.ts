import { describe, expect, it } from 'vitest'
import { navItems } from './nav'
import { projects } from './projects'
import { skills } from './skills'
import { contactInfo } from './contact'

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
  it('tem nomes únicos e ícones definidos', () => {
    const names = skills.map((skill) => skill.name)

    expect(skills.length).toBeGreaterThan(0)
    expect(new Set(names).size).toBe(names.length)
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
  it('mantém e-mail e LinkedIn preenchidos', () => {
    expect(contactInfo.email).toMatch(/@/)
    expect(contactInfo.linkedinUrl).toMatch(/^https:\/\//)
    expect(contactInfo.linkedinLabel).toBeTruthy()
  })
})
