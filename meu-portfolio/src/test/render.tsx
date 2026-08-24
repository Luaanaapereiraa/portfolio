import { render, type RenderOptions } from '@testing-library/react'
import type { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'

function Wrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

export function renderWithTheme(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: Wrapper, ...options })
}
