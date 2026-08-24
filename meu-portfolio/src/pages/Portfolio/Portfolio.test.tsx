import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { projects } from '../../data/projects'
import { renderWithTheme } from '../../test/render'
import Portfolio from './index'

describe('Portfolio', () => {
  it('renderiza os projetos com link para o GitHub', () => {
    renderWithTheme(<Portfolio />)

    expect(screen.getByRole('heading', { name: 'Projetos' })).toBeInTheDocument()

    projects.forEach((project) => {
      const link = screen.getByRole('link', { name: new RegExp(project.title, 'i') })
      expect(link).toHaveAttribute('href', project.link)
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})
