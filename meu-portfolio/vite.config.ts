/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false,
    restoreMocks: true,
    // getByRole é lento no jsdom; suites com muitos elementos passam de 5s em máquinas mais lentas
    testTimeout: 15000,
  },
})
