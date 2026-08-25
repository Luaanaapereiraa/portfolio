import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithTheme } from '../../test/render'
import Footer from './index'

describe('Footer', () => {
  it('exibe o crédito de autoria', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByText('Designed & Developed by Luana Pereira')
    ).toBeInTheDocument()
  })
})
