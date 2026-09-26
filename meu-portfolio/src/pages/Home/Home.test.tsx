import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithTheme } from '../../test/render'
import { heroLayers } from './heroLayers'
import Home from './index'

describe('Home', () => {
  it('apresenta o nome, o posicionamento e a experiência', () => {
    renderWithTheme(<Home />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Luana',
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/Engenheira de Software · Full Stack/)).toBeInTheDocument()
    expect(screen.getByText(/Aberta a oportunidades/i)).toBeInTheDocument()
    expect(screen.getByText('XP Inc.')).toBeInTheDocument()
    expect(screen.getByText(/Hoje estou construindo o/)).toHaveTextContent('DestravAI')
    expect(
      screen.getByAltText(/Luana, engenheira de software/i)
    ).toBeInTheDocument()
  })

  it('mostra os destaques flutuando ao redor da foto', () => {
    renderWithTheme(<Home />)

    expect(screen.getByText(/Construindo o/)).toHaveTextContent('Construindo o DestravAI')
    expect(screen.getByText(/XP Inc\. · Pipefy/)).toBeInTheDocument()
    expect(screen.getByLabelText('Stack: React, Node.js, Supabase')).toBeInTheDocument()
  })

  it('anima os painéis da ilustração como camadas decorativas', () => {
    const { container } = renderWithTheme(<Home />)

    const layers = container.querySelectorAll('[data-layer]')
    expect(layers).toHaveLength(heroLayers.length)
    layers.forEach((layer) => {
      expect(layer).toHaveAttribute('alt', '')
      expect(layer).toHaveAttribute('aria-hidden', 'true')
    })
    // só a foto base é anunciada para leitores de tela
    expect(screen.getAllByRole('img', { name: /Luana/ })).toHaveLength(1)
  })

  it('leva para projetos e contato', () => {
    renderWithTheme(<Home />)

    expect(screen.getByRole('link', { name: 'Ver projetos' })).toHaveAttribute(
      'href',
      '#portfolio-section'
    )
    expect(screen.getByRole('link', { name: 'Vamos conversar' })).toHaveAttribute(
      'href',
      '#contact-section'
    )
  })
})
