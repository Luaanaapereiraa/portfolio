import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { navItems } from '../../data/nav'
import { renderWithTheme } from '../../test/render'
import Header from './index'

describe('Header', () => {
  it('renderiza o logo', () => {
    renderWithTheme(<Header />)

    expect(screen.getByRole('link', { name: 'Ir para o início' })).toBeInTheDocument()
  })

  it('renderiza os links de navegação', () => {
    renderWithTheme(<Header />)

    navItems.forEach((item) => {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute(
        'href',
        `#${item.to}`
      )
    })
  })

  it('abre e fecha o menu mobile pelo botão', async () => {
    const user = userEvent.setup()
    renderWithTheme(<Header />)

    const menuButton = screen.getByRole('button', { name: 'Abrir menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)

    expect(screen.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute(
      'aria-expanded',
      'true'
    )

    await user.click(screen.getByRole('button', { name: 'Fechar menu' }))
    expect(screen.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute(
      'aria-expanded',
      'false'
    )
  })

  it('fecha o menu ao pressionar Escape', async () => {
    const user = userEvent.setup()
    renderWithTheme(<Header />)

    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))
    fireEvent.keyDown(window, { key: 'Escape' })

    expect(screen.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute(
      'aria-expanded',
      'false'
    )
  })

  it('fecha o menu ao escolher um link', async () => {
    const user = userEvent.setup()
    renderWithTheme(<Header />)

    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))
    await user.click(screen.getByRole('link', { name: '//Skills' }))

    expect(screen.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute(
      'aria-expanded',
      'false'
    )
  })
})
