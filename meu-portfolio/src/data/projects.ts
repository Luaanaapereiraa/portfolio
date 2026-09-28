import Avocat from '../assets/avocatfeed.png'
import PortfolioPreview from '../assets/portfolio-preview.webp'

export type ProjectStatus = 'Em desenvolvimento' | 'Em produção' | 'Concluído'

export interface ProjectLink {
  label: string
  href: string
  external?: boolean
}

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  status: ProjectStatus
  stack: string[]
  links: ProjectLink[]
  image?: string
  /** 'screenshot' ocupa a largura do card (16:10); padrão é logo/ícone centralizado */
  imageKind?: 'screenshot' | 'logo'
  featured?: boolean
  highlights?: string[]
}

export const projects: Project[] = [
  {
    id: 'boxstep',
    title: 'BoxStep',
    tagline: 'Produtividade com IA: de tarefa travada a plano de ação',
    description:
      'Aplicação que usa um agente de IA para transformar tarefas travadas em planos claros e executáveis. Produto que estou construindo de ponta a ponta, da definição do problema à arquitetura, testes e deploy.',
    status: 'Em desenvolvimento',
    featured: true,
    highlights: [
      'Agente de IA com saídas estruturadas e validadas',
      'Monorepo com contratos compartilhados em TypeScript + Zod',
      'PWA com suporte offline',
      'Autenticação Supabase e políticas de acesso no PostgreSQL (RLS)',
      'Cotas de uso e boas práticas de segurança',
      'Testes unitários, de integração e end-to-end',
    ],
    stack: ['Next.js', 'React', 'Fastify', 'Supabase', 'PostgreSQL', 'Zod', 'Playwright'],
    links: [{ label: 'Pedir uma demo', href: '#contact-section' }],
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    tagline: 'Acompanhamento de obras',
    description:
      'Painel para acompanhar a execução de obras por equipamento: progresso por etapa, planejamento semanal, métricas, evidências em foto e geração de RDO.',
    status: 'Em produção',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    links: [
      { label: 'Ver demo', href: 'https://dashboard-hvac.vercel.app', external: true },
      {
        label: 'Código',
        href: 'https://github.com/Luaanaapereiraa/dashboard-hvac',
        external: true,
      },
    ],
  },
  {
    id: 'avocat-feed',
    title: 'AvocatFeed',
    tagline: 'Feed social com interações',
    description:
      'Feed com publicações, comentários, curtidas e edição de perfil, com layout responsivo e testes automatizados.',
    status: 'Concluído',
    image: Avocat,
    stack: ['React', 'Vite', 'CSS Modules', 'Vitest'],
    links: [
      { label: 'Ver demo', href: 'https://avocat-social-feed.vercel.app/', external: true },
      {
        label: 'Código',
        href: 'https://github.com/Luaanaapereiraa/AvocatSocialFeed',
        external: true,
      },
    ],
  },
  {
    id: 'portfolio',
    title: 'Meu Portfólio',
    tagline: 'Este site',
    description:
      'Portfólio responsivo e acessível, orientado a dados e coberto por testes de componentes.',
    status: 'Em produção',
    image: PortfolioPreview,
    imageKind: 'screenshot',
    stack: ['React', 'TypeScript', 'Vite', 'Styled Components', 'Vitest'],
    links: [
      {
        label: 'Código',
        href: 'https://github.com/Luaanaapereiraa/portfolio',
        external: true,
      },
    ],
  },
]
