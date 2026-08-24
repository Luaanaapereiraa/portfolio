import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('monta as seções principais do portfólio', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: 'Principal' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Projetos' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contato' })).toBeInTheDocument()
    expect(
      screen.getByText('Designed & Developed by Luana Pereira')
    ).toBeInTheDocument()
  })
})
