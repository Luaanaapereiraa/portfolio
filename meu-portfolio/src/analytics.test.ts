import { afterEach, describe, expect, it } from 'vitest'
import { OPT_OUT_KEY, ignoreOptedOut } from './analytics'

const pageview = { type: 'pageview' as const, url: 'https://luanapereira.vercel.app/' }

describe('ignoreOptedOut', () => {
  afterEach(() => {
    window.localStorage.clear()
  })

  it('mantém a visita de quem não pediu para ser ignorado', () => {
    expect(ignoreOptedOut(pageview)).toEqual(pageview)
  })

  it('descarta a visita quando o navegador está marcado', () => {
    window.localStorage.setItem(OPT_OUT_KEY, '1')
    expect(ignoreOptedOut(pageview)).toBeNull()
  })
})
