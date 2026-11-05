/** "Acessar o BoxStep" → "acessar-o-boxstep": valores estáveis para o analytics. */
export const toSlug = (text: string) =>
  text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
