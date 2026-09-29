/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** ID do Google Analytics 4 (ex.: G-ABC123XYZ). Sem ele, o GA não carrega. */
  readonly VITE_GA_MEASUREMENT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
