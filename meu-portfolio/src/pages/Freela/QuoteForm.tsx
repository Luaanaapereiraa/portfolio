import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { trackEvent } from '../../analytics'
import { contactInfo, getWhatsAppUrl } from '../../data/contact'
import {
  budgetOptions,
  buildQuoteEmailUrl,
  buildQuoteMessage,
  serviceOptions,
  timelineOptions,
  validateQuote,
  type QuoteErrors,
  type QuoteRequest,
} from '../../data/freela'
import { ButtonLink } from '../../styles/shared'
import { toSlug } from '../../utils/slug'
import { Field, FieldError, Form, FormActions, FormGrid, Hint, SentNotice } from './styles'

export type QuoteChannel = 'whatsapp' | 'email'

interface QuoteFormProps {
  /** abre o canal escolhido; injetável para testes */
  onSend?: (url: string, channel: QuoteChannel) => void
}

const EMPTY: QuoteRequest = { name: '', service: '', timeline: '', budget: '', description: '' }

/** ordem de foco quando há erro: o primeiro campo inválido recebe o foco */
const FIELD_ORDER: (keyof QuoteRequest)[] = ['name', 'service', 'description']

function openChannel(url: string, channel: QuoteChannel) {
  if (channel === 'whatsapp') window.open(url, '_blank', 'noopener,noreferrer')
  else window.location.assign(url)
}

/** Pedido de orçamento: monta a mensagem e abre WhatsApp ou e-mail. Nada é enviado a servidor. */
const QuoteForm = ({ onSend = openChannel }: QuoteFormProps) => {
  const [quote, setQuote] = useState<QuoteRequest>(EMPTY)
  const [errors, setErrors] = useState<QuoteErrors>({})
  const [sent, setSent] = useState<{ url: string; channel: QuoteChannel } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const update =
    (field: keyof QuoteRequest) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setQuote((current) => ({ ...current, [field]: event.target.value }))
      setErrors((current) => ({ ...current, [field]: undefined }))
    }

  const send = (channel: QuoteChannel) => {
    const found = validateQuote(quote)
    setErrors(found)

    const firstInvalid = FIELD_ORDER.find((field) => found[field])
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    const url =
      channel === 'whatsapp'
        ? getWhatsAppUrl(contactInfo.whatsappNumber, buildQuoteMessage(quote))
        : buildQuoteEmailUrl(contactInfo.email, quote)

    trackEvent('Quote Requested', { channel, service: toSlug(quote.service) })
    onSend(url, channel)
    setSent({ url, channel })
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    send('whatsapp')
  }

  const errorProps = (field: keyof QuoteRequest) => ({
    'aria-invalid': Boolean(errors[field]),
    'aria-describedby': errors[field] ? `quote-${field}-error` : undefined,
  })

  return (
    <Form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Pedido de orçamento">
      <FormGrid>
        <Field>
          <label htmlFor="quote-name">Nome *</label>
          <input
            id="quote-name"
            name="name"
            autoComplete="name"
            value={quote.name}
            onChange={update('name')}
            {...errorProps('name')}
          />
          {errors.name && <FieldError id="quote-name-error">{errors.name}</FieldError>}
        </Field>

        <Field>
          <label htmlFor="quote-service">Tipo de projeto *</label>
          <select
            id="quote-service"
            name="service"
            value={quote.service}
            onChange={update('service')}
            {...errorProps('service')}
          >
            <option value="">Selecione</option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {errors.service && <FieldError id="quote-service-error">{errors.service}</FieldError>}
        </Field>

        <Field>
          <label htmlFor="quote-timeline">Prazo</label>
          <select id="quote-timeline" name="timeline" value={quote.timeline} onChange={update('timeline')}>
            <option value="">Selecione</option>
            {timelineOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>

        <Field>
          <label htmlFor="quote-budget">Faixa de investimento</label>
          <select id="quote-budget" name="budget" value={quote.budget} onChange={update('budget')}>
            <option value="">Selecione</option>
            {budgetOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>

        <Field $wide>
          <label htmlFor="quote-description">Sobre o projeto *</label>
          <textarea
            id="quote-description"
            name="description"
            rows={5}
            placeholder="O que você quer construir, para quem, e o que já existe hoje."
            value={quote.description}
            onChange={update('description')}
            {...errorProps('description')}
          />
          {errors.description && (
            <FieldError id="quote-description-error">{errors.description}</FieldError>
          )}
        </Field>
      </FormGrid>

      <FormActions>
        <ButtonLink as="button" type="submit">
          Enviar pelo WhatsApp
        </ButtonLink>
        <ButtonLink as="button" type="button" $variant="ghost" onClick={() => send('email')}>
          Enviar por e-mail
        </ButtonLink>
      </FormActions>
      <Hint>A mensagem abre pronta no app escolhido. Nada fica salvo neste site.</Hint>

      {sent && (
        <SentNotice role="status">
          {sent.channel === 'whatsapp' ? 'Abri o WhatsApp' : 'Abri seu e-mail'} com a mensagem pronta.
          Se nada aconteceu,{' '}
          <a href={sent.url} target="_blank" rel="noopener noreferrer">
            use este link
          </a>
          .
        </SentNotice>
      )}
    </Form>
  )
}

export default QuoteForm
