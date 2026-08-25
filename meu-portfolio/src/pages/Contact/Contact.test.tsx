import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { contactInfo, getWhatsAppUrl } from '../../data/contact'
import { renderWithTheme } from '../../test/render'
import Contact from './index'

describe('Contact', () => {
  it('oferece links de e-mail, LinkedIn e WhatsApp', () => {
    renderWithTheme(<Contact />)

    expect(screen.getByRole('heading', { name: 'Contato' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: contactInfo.email })).toHaveAttribute(
      'href',
      `mailto:${contactInfo.email}`
    )
    expect(
      screen.getByRole('link', { name: contactInfo.linkedinLabel })
    ).toHaveAttribute('href', contactInfo.linkedinUrl)
    expect(screen.getByRole('link', { name: 'WhatsApp' })).toHaveAttribute(
      'href',
      getWhatsAppUrl(contactInfo.whatsappNumber)
    )
  })
})
