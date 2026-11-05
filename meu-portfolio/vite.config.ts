/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import { loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Meta tag de verificação do Google Search Console, só quando o código existe
 * (VITE_GOOGLE_SITE_VERIFICATION em .env.production). Sem código, nada é injetado.
 */
function googleSiteVerification(token?: string): Plugin {
  return {
    name: 'google-site-verification',
    transformIndexHtml() {
      if (!token) return []
      return [
        {
          tag: 'meta',
          attrs: { name: 'google-site-verification', content: token },
          injectTo: 'head',
        },
      ]
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'VITE_')

  return {
    plugins: [react(), googleSiteVerification(env.VITE_GOOGLE_SITE_VERIFICATION)],
    build: {
      rollupOptions: {
        // duas páginas HTML (cada uma com título/descrição próprios para o Google)
        input: {
          main: 'index.html',
          freela: 'freela/index.html',
        },
      },
    },
    test: {
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      css: false,
      restoreMocks: true,
      // getByRole é lento no jsdom; suites com muitos elementos passam de 5s em máquinas mais lentas
      testTimeout: 15000,
    },
  }
})
