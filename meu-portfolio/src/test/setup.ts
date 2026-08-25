import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { createElement, type ReactNode } from 'react'
import { afterEach, vi } from 'vitest'

afterEach(() => {
  cleanup()
})

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
