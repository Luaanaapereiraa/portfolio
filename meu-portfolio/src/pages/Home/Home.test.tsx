import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithTheme } from '../../test/render'
import Home from './index'

describe('Home', () => {
  it('apresenta o nome e o texto sobre a desenvolvedora', () => {
    renderWithTheme(<Home />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Luana sou Desenvolvedora de Software Full Cycle/i,
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/Marketing Digital/i)).toBeInTheDocument()
    expect(
      screen.getByAltText(/Ilustração de uma desenvolvedora/i)
    ).toBeInTheDocument()
  })
})
