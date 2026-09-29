import { render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useTrackSectionViews } from './useTrackSectionViews'

const { trackEvent } = vi.hoisted(() => ({ trackEvent: vi.fn() }))
vi.mock('../analytics', () => ({ trackEvent }))

type Callback = (entries: Partial<IntersectionObserverEntry>[]) => void

/** IntersectionObserver falso: guarda o callback para disparar "entradas" à mão. */
function mockIntersectionObserver() {
  let callback: Callback = vi.fn()
  const observed: Element[] = []
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(cb: Callback) {
        callback = cb
      }
      observe = (el: Element) => observed.push(el)
      unobserve = vi.fn()
      disconnect = vi.fn()
    }
  )
  return {
    observed,
    enter: (el: Element) => callback([{ target: el, isIntersecting: true }]),
  }
}

function Page() {
  useTrackSectionViews(['skills-section', 'contact-section'])
  return (
    <>
      <section id="skills-section" />
      <section id="contact-section" />
    </>
  )
}

describe('useTrackSectionViews', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    trackEvent.mockReset()
  })

  it('registra cada seção uma única vez, sem o sufixo "-section"', () => {
    const io = mockIntersectionObserver()
    render(<Page />)
    const [skills] = io.observed

    io.enter(skills)
    io.enter(skills)

    expect(io.observed).toHaveLength(2)
    expect(trackEvent).toHaveBeenCalledTimes(1)
    expect(trackEvent).toHaveBeenCalledWith('Section Viewed', { section: 'skills' })
  })
})
