import { useEffect, useState } from 'react'
import {
  OPEN_CONSENT_EVENT,
  getStoredConsent,
  isGoogleAnalyticsActive,
  setConsent,
  type Consent,
} from '../../googleAnalytics'
import { ButtonLink } from '../../styles/shared'
import { Actions, Banner, Label } from './styles'

interface ConsentBannerProps {
  /** padrão: só aparece se o Google Analytics foi iniciado (produção + ID configurado) */
  enabled?: boolean
}

/** Aviso de cookies do Google Analytics (LGPD). Some depois da escolha, que fica salva. */
const ConsentBanner = ({ enabled = isGoogleAnalyticsActive() }: ConsentBannerProps) => {
  const [open, setOpen] = useState(() => enabled && getStoredConsent() === null)

  useEffect(() => {
    if (!enabled) return
    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_CONSENT_EVENT, reopen)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen)
  }, [enabled])

  if (!open) return null

  const choose = (consent: Consent) => {
    setConsent(consent)
    setOpen(false)
  }

  return (
    <Banner aria-label="Aviso de cookies">
      <p>
        <Label>Cookies de análise</Label>
        Uso o Google Analytics para entender como o portfólio é visitado. Nada de anúncios
        ou venda de dados. Você aceita cookies de análise?
      </p>
      <Actions>
        <ButtonLink as="button" type="button" $variant="ghost" onClick={() => choose('denied')}>
          Recusar
        </ButtonLink>
        <ButtonLink as="button" type="button" onClick={() => choose('granted')}>
          Aceitar
        </ButtonLink>
      </Actions>
    </Banner>
  )
}

export default ConsentBanner
