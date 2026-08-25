export const breakpoints = {
  sm: 480,
  md: 768,
  lg: 1024,
} as const

export const media = {
  sm: `@media (max-width: ${breakpoints.sm}px)`,
  md: `@media (max-width: ${breakpoints.md}px)`,
  lg: `@media (max-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: 1280px)`,
  xxl: `@media (min-width: 1600px)`,
} as const
