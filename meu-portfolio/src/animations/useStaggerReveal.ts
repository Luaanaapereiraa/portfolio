import { useRef } from 'react'
import { CLEAR_ANIMATED_PROPS, gsap, useGSAP, withMotion } from './gsap'

export interface RevealGroup {
  /** seletor (dentro do escopo) de cada bloco que dispara a animação ao entrar na tela */
  trigger: string
  /** seletor dos itens dentro do bloco, animados em cascata */
  items: string
  from: gsap.TweenVars
  stagger?: number
}

/**
 * Revela itens em cascata quando cada bloco entra na tela (uma vez só).
 * Devolve o ref do escopo; com reduced motion (ou nos testes) nada é escondido.
 */
export function useStaggerReveal<T extends HTMLElement>(groups: RevealGroup[]) {
  const scope = useRef<T | null>(null)

  useGSAP(
    () =>
      withMotion(() => {
        const q = gsap.utils.selector(scope)
        groups.forEach(({ trigger, items, from, stagger = 0.08 }) => {
          q(trigger).forEach((block) => {
            gsap.from(block.querySelectorAll(items), {
              duration: 0.6,
              ease: 'power3.out',
              ...from,
              stagger,
              clearProps: CLEAR_ANIMATED_PROPS,
              scrollTrigger: { trigger: block, start: 'top 85%', once: true },
            })
          })
        })
      }),
    { scope }
  )

  return scope
}
