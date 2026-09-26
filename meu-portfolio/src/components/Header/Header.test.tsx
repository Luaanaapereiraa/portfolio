import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { navItems } from '../../data/nav'
import { renderWithTheme } from '../../test/render'
import Header from './index'

// O botão só aparece no breakpoint mobile (media.md). Como o jsdom não avalia
// media queries, ele fica com display: none aqui; por isso a busca é feita
// pelo aria-label, que independe da visibilidade.
const getMenuButton = (name: string) =>
  screen.getByLabelText(name, { selector: 'button' })

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

    const menuButton = getMenuButton('Abrir menu')
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)

    expect(getMenuButton('Fechar menu')).toHaveAttribute(
      'aria-expanded',
      'true'
    )

    await user.click(getMenuButton('Fechar menu'))
    expect(getMenuButton('Abrir menu')).toHaveAttribute(
      'aria-expanded',
      'false'
    )
  })

  it('fecha o menu ao pressionar Escape', async () => {
    const user = userEvent.setup()
    renderWithTheme(<Header />)

    await user.click(getMenuButton('Abrir menu'))
    fireEvent.keyDown(window, { key: 'Escape' })

    expect(getMenuButton('Abrir menu')).toHaveAttribute(
      'aria-expanded',
      'false'
    )
  })

  it('fecha o menu ao escolher um link', async () => {
    const user = userEvent.setup()
    renderWithTheme(<Header />)

    await user.click(getMenuButton('Abrir menu'))
    await user.click(screen.getByRole('link', { name: '//Skills' }))

    expect(getMenuButton('Abrir menu')).toHaveAttribute(
      'aria-expanded',
      'false'
    )
  })
})
