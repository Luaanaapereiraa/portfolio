import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { processSteps, services } from '../../data/freela'
import { renderWithTheme } from '../../test/render'
import FreelaPage from './index'

describe('FreelaPage', () => {
  it('apresenta a oferta, os serviços e as etapas', () => {
    renderWithTheme(<FreelaPage />)

    expect(
      screen.getByRole('heading', { level: 1, name: /Seu projeto, do rascunho ao ar/i })
    ).toBeInTheDocument()
    services.forEach((service) => {
      expect(screen.getByRole('article', { name: service.title })).toBeInTheDocument()
    })
    processSteps.forEach((step) => {
      expect(screen.getByRole('heading', { name: step.title })).toBeInTheDocument()
    })
  })

  it('mostra o BoxStep como caso, com link para o produto no ar', () => {
    renderWithTheme(<FreelaPage />)

    const card = screen.getByRole('article', { name: 'BoxStep' })
    expect(within(card).getByAltText('Preview do projeto BoxStep')).toBeInTheDocument()
    const link = within(card).getByRole('link', { name: /Acessar o BoxStep/i })
    expect(link.getAttribute('href')).toMatch(/^https:\/\/boxstep\.app\//)
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('mostra a Ferro Air como referência de site, com print e link', () => {
    renderWithTheme(<FreelaPage />)

    const card = screen.getByRole('article', { name: 'Ferro Air' })
    expect(within(card).getByAltText('Preview do projeto Ferro Air')).toBeInTheDocument()
    expect(within(card).getByRole('link', { name: /Ver site/i })).toHaveAttribute(
      'href',
      'https://www.ferroair.com.br/'
    )
  })

  it('mostra o demo do Dashboard, sem o link de código (que fica só na home)', () => {
    renderWithTheme(<FreelaPage />)

    const card = screen.getByRole('article', { name: 'Dashboard' })
    expect(within(card).getByRole('link', { name: /Ver demo/i })).toBeInTheDocument()
    expect(within(card).queryByRole('link', { name: /Código/i })).not.toBeInTheDocument()
  })

  it('oferece SEO e GEO (otimização para IAs) nos sites', () => {
    renderWithTheme(<FreelaPage />)

    const sites = screen.getByRole('article', { name: 'Sites e landing pages' })
    expect(within(sites).getByText('SEO e GEO')).toBeInTheDocument()
    expect(within(sites).getByText(/ChatGPT e Gemini \(GEO\)/)).toBeInTheDocument()
  })

  it('leva ao formulário de orçamento', () => {
    renderWithTheme(<FreelaPage />)

    screen.getAllByRole('link', { name: 'Pedir orçamento' }).forEach((link) => {
      expect(link).toHaveAttribute('href', '#orcamento')
    })
    expect(screen.getByRole('form', { name: 'Pedido de orçamento' })).toBeInTheDocument()
  })
})
