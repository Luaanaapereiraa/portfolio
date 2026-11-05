/**
 * Conteúdo da página /freela. Textos e opções ficam aqui para serem editados
 * sem mexer nos componentes.
 */

export interface FreelaService {
  id: string
  title: string
  /** para quem é o serviço, em uma frase */
  audience: string
  includes: string[]
}

export const services: FreelaService[] = [
  {
    id: 'sites',
    title: 'Sites e landing pages',
    audience:
      'Para negócios e profissionais que precisam ser encontrados no Google (SEO) e nas respostas de IAs como ChatGPT e Gemini (GEO), e transformar visitas em contatos.',
    includes: ['Responsivo', 'SEO e GEO', 'Analytics', 'Publicação e domínio'],
  },
  {
    id: 'apps',
    title: 'Apps e MVPs',
    audience: 'Para tirar uma ideia do papel e validar com usuários reais, do zero ao ar.',
    includes: ['Web e mobile', 'Login e banco de dados', 'IA quando fizer sentido', 'Deploy'],
  },
  {
    id: 'sistemas',
    title: 'Sistemas internos e dashboards',
    audience: 'Para empresas que vivem de planilha e precisam de controle e visibilidade.',
    includes: ['Painéis e relatórios', 'Automações', 'Integrações', 'Permissões de acesso'],
  },
  {
    id: 'manutencao',
    title: 'Manutenção e melhorias',
    audience: 'Para sites e apps que já existem e precisam evoluir, corrigir ou ficar mais rápidos.',
    includes: ['Correções', 'Performance', 'Novas funcionalidades', 'Acessibilidade'],
  },
]

export interface ProcessStep {
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Conversa',
    description: 'Entendo o objetivo, o prazo e o orçamento. Sem compromisso.',
  },
  {
    title: 'Proposta',
    description: 'Escopo, prazo e valor por escrito, antes de qualquer linha de código.',
  },
  {
    title: 'Desenvolvimento',
    description: 'Entregas semanais com um link para você acompanhar e opinar.',
  },
  {
    title: 'Publicação',
    description: 'Coloco no ar, explico como usar e combinamos o suporte.',
  },
]

export const differentiators = [
  'Você fala direto com quem desenvolve, sem intermediários',
  'Sites com SEO para o Google e GEO para IAs como ChatGPT, Gemini e Perplexity',
  'Qualidade de produto: testes, acessibilidade e performance',
  'Experiência em produtos de fintech, edtech e gestão de processos',
]

/** ids das seções da página /freela (analytics: "Section Viewed") */
export const FREELA_SECTION_IDS = ['servicos', 'processo', 'casos', 'orcamento'] as const

/** projetos do portfólio exibidos como casos na página (ids de data/projects) */
export const caseProjectIds = ['boxstep', 'ferroair', 'dashboard'] as const

export const OTHER_SERVICE = 'Outro'

export const serviceOptions = [...services.map((service) => service.title), OTHER_SERVICE]

export const timelineOptions = ['Menos de 1 mês', '1 a 3 meses', 'Mais de 3 meses', 'Sem pressa']

export const budgetOptions = [
  'Até R$ 3 mil',
  'R$ 3 mil a R$ 8 mil',
  'R$ 8 mil a R$ 20 mil',
  'Acima de R$ 20 mil',
  'Ainda não sei',
]

export interface QuoteRequest {
  name: string
  service: string
  timeline: string
  budget: string
  description: string
}

export type QuoteErrors = Partial<Record<keyof QuoteRequest, string>>

export const MIN_DESCRIPTION_LENGTH = 15

export function validateQuote(quote: QuoteRequest): QuoteErrors {
  const errors: QuoteErrors = {}
  if (!quote.name.trim()) errors.name = 'Diga como posso te chamar.'
  if (!quote.service) errors.service = 'Escolha o tipo de projeto.'
  if (quote.description.trim().length < MIN_DESCRIPTION_LENGTH) {
    errors.description = `Conte um pouco mais sobre o projeto (mínimo de ${MIN_DESCRIPTION_LENGTH} caracteres).`
  }
  return errors
}

/** Mensagem que vai pronta para o WhatsApp ou e-mail. Campos opcionais só entram se preenchidos. */
export function buildQuoteMessage(quote: QuoteRequest) {
  const lines = [
    'Olá, Luana! Vim pelo seu portfólio e quero um orçamento.',
    '',
    `Nome: ${quote.name.trim()}`,
    `Projeto: ${quote.service}`,
  ]
  if (quote.timeline) lines.push(`Prazo: ${quote.timeline}`)
  if (quote.budget) lines.push(`Investimento: ${quote.budget}`)
  lines.push('', 'Sobre o projeto:', quote.description.trim())
  return lines.join('\n')
}

export function buildQuoteEmailUrl(email: string, quote: QuoteRequest) {
  const subject = `Orçamento: ${quote.service} (${quote.name.trim()})`
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    buildQuoteMessage(quote)
  )}`
}
