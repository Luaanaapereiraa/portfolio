import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { skills } from '../../data/skills'
import { renderWithTheme } from '../../test/render'
import Skills from './index'

describe('Skills', () => {
  it('renderiza todas as skills cadastradas', () => {
    renderWithTheme(<Skills />)

    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()
    skills.forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeInTheDocument()
    })
  })
})
