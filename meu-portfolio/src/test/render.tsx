import { render, type RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'

export function renderWithTheme(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    ),
    ...options,
  })
}
