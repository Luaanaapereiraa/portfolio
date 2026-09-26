import { fireEvent, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useTilt } from './useTilt'

function TiltBox() {
  const tilt = useTilt<HTMLDivElement>(10)
  return (
    <div
      data-testid="box"
      ref={tilt.ref}
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
    />
  )
}

function mockMatchMedia(matches: boolean) {
  vi.stubGlobal('matchMedia', (query: string) => ({ matches, media: query }))
}

function setup() {
  const { getByTestId } = render(<TiltBox />)
  const box = getByTestId('box')
  box.getBoundingClientRect = () =>
    ({ left: 0, top: 0, width: 200, height: 100 }) as DOMRect
  return box
}

describe('useTilt', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('inclina seguindo o mouse e volta ao centro ao sair', () => {
    mockMatchMedia(true)
    const box = setup()

    fireEvent.pointerMove(box, { clientX: 200, clientY: 0 })
    expect(box.style.getPropertyValue('--tilt-x')).toBe('5.00deg')
    expect(box.style.getPropertyValue('--tilt-y')).toBe('5.00deg')

    fireEvent.pointerLeave(box)
    expect(box.style.getPropertyValue('--tilt-x')).toBe('0deg')
    expect(box.style.getPropertyValue('--tilt-y')).toBe('0deg')
  })

  it('não inclina em touch ou com movimento reduzido', () => {
    mockMatchMedia(false)
    const box = setup()

    fireEvent.pointerMove(box, { clientX: 200, clientY: 0 })
    expect(box.style.getPropertyValue('--tilt-x')).toBe('')
  })
})
