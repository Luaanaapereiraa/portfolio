import { useEffect, useRef, type ComponentProps } from 'react'
import { gsap } from '../../animations/gsap'
import { ButtonLink } from '../../styles/shared'

const MAGNETIC_QUERY = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
const STRENGTH = 0.3

/** Botão que é "puxado" levemente em direção ao mouse (só desktop, sem reduced motion). */
const MagneticButton = (props: ComponentProps<typeof ButtonLink>) => {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !window.matchMedia?.(MAGNETIC_QUERY).matches) return

    const xTo = gsap.quickTo(element, 'x', { duration: 0.45, ease: 'power3.out' })
    const yTo = gsap.quickTo(element, 'y', { duration: 0.45, ease: 'power3.out' })

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect()
      xTo((event.clientX - (rect.left + rect.width / 2)) * STRENGTH)
      yTo((event.clientY - (rect.top + rect.height / 2)) * STRENGTH)
    }
    const onLeave = () => {
      xTo(0)
      yTo(0)
    }

    // o GSAP controla o transform; a transição CSS de transform deixaria o movimento "atrasado"
    element.style.transition = 'box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease'
    element.addEventListener('pointermove', onMove)
    element.addEventListener('pointerleave', onLeave)

    return () => {
      element.removeEventListener('pointermove', onMove)
      element.removeEventListener('pointerleave', onLeave)
      element.style.transition = ''
      gsap.set(element, { clearProps: 'transform' })
    }
  }, [])

  return <ButtonLink ref={ref} {...props} />
}

export default MagneticButton
