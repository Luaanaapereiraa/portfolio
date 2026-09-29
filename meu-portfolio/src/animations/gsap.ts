import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrambleTextPlugin)

export { gsap, ScrollTrigger, useGSAP }

/** Props inline que o GSAP deixa no fim; limpar devolve o controle ao CSS (hover etc.). */
export const CLEAR_ANIMATED_PROPS = 'transform,opacity,visibility'

/**
 * Roda `setup` só se o usuário não pediu movimento reduzido (e reage se isso mudar).
 * Sem matchMedia (SSR/testes) nada anima e o conteúdo fica como está: visível.
 * Retorna o cleanup para ser devolvido dentro do useGSAP.
 */
export function withMotion(setup: () => void | (() => void)) {
  if (typeof window === 'undefined' || !window.matchMedia) return undefined

  const mm = gsap.matchMedia()
  mm.add('(prefers-reduced-motion: no-preference)', setup)
  return () => mm.revert()
}
