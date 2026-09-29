import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { projects } from '../../data/projects'
import { renderWithTheme } from '../../test/render'
import Portfolio from './index'

describe('Portfolio', () => {
  it('renderiza cada projeto com seus links', () => {
    renderWithTheme(<Portfolio />)

    expect(screen.getByRole('heading', { name: 'Projetos' })).toBeInTheDocument()

    projects.forEach((project) => {
      const card = screen.getByRole('article', { name: project.title })

      project.links.forEach((link) => {
        const anchor = within(card).getByRole('link', {
          name: `${link.label} — ${project.title}`,
        })
        expect(anchor).toHaveAttribute('href', link.href)

        if (link.external) {
          expect(anchor).toHaveAttribute('target', '_blank')
          expect(anchor).toHaveAttribute('rel', 'noopener noreferrer')
        } else {
          expect(anchor).not.toHaveAttribute('target')
        }
      })
    })
  })

  it('mostra o BoxStep em destaque com os diferenciais técnicos', () => {
    renderWithTheme(<Portfolio />)

    const card = screen.getByRole('article', { name: 'BoxStep' })
    expect(within(card).getByText('Em desenvolvimento')).toBeInTheDocument()
    expect(
      within(card).getByRole('list', { name: /Destaques técnicos do BoxStep/i })
    ).toBeInTheDocument()
    expect(within(card).getByRole('link', { name: /Pedir uma demo/i })).toHaveAttribute(
      'href',
      '#contact-section'
    )
  })
})
