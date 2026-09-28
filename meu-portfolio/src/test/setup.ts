import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { createElement, type ReactNode } from 'react'
import { afterEach, vi } from 'vitest'

afterEach(() => {
  cleanup()
})

// jsdom não tem matchMedia (o ScrollTrigger usa ao registrar). Nenhuma media query
// "casa", então as animações de entrada não rodam e o conteúdo fica visível.
if (!window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: () => false,
    }),
  })
}

vi.mock('react-intersection-observer', () => ({
  useInView: () => {
    const ref = vi.fn()
    return Object.assign([ref, true], { ref, inView: true })
  },
}))

vi.mock('react-scroll', () => ({
  Link: ({
    to,
    children,
    onClick,
    ...props
  }: {
    to: string
    children: ReactNode
    onClick?: () => void
    [key: string]: unknown
  }) => createElement('a', { href: `#${to}`, onClick, ...props }, children),
}))

vi.mock('@iconify/react', () => ({
  Icon: ({ icon }: { icon: string }) =>
    createElement('span', { 'data-testid': `icon-${icon}` }),
}))
