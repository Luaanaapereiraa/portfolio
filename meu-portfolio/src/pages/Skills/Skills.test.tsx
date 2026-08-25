import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { skillGroups, skills } from '../../data/skills'
import { renderWithTheme } from '../../test/render'
import Skills from './index'

describe('Skills', () => {
  it('renderiza as categorias e todas as skills cadastradas', () => {
    renderWithTheme(<Skills />)

    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()

    skillGroups.forEach((group) => {
      expect(screen.getByRole('heading', { name: group.title })).toBeInTheDocument()
    })

    skills.forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeInTheDocument()
    })
  })
})
