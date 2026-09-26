import { useCallback, useRef, type PointerEvent } from 'react'

const TILT_QUERY = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

function canTilt() {
  return typeof window !== 'undefined' && window.matchMedia?.(TILT_QUERY).matches
}

/**
 * Inclina levemente o elemento seguindo o mouse (só desktop, respeitando
 * reduced motion). Escreve as CSS vars --tilt-x/--tilt-y direto no elemento
 * para não re-renderizar o React a cada movimento.
 */
export function useTilt<T extends HTMLElement>(maxDegrees = 6) {
  const ref = useRef<T>(null)

  const onPointerMove = useCallback(
    (event: PointerEvent<T>) => {
      const element = ref.current
      if (!element || !canTilt()) return

      const rect = element.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      element.style.setProperty('--tilt-x', `${(-y * maxDegrees).toFixed(2)}deg`)
      element.style.setProperty('--tilt-y', `${(x * maxDegrees).toFixed(2)}deg`)
    },
    [maxDegrees]
  )

  const onPointerLeave = useCallback(() => {
    ref.current?.style.setProperty('--tilt-x', '0deg')
    ref.current?.style.setProperty('--tilt-y', '0deg')
  }, [])

  return { ref, onPointerMove, onPointerLeave }
}
