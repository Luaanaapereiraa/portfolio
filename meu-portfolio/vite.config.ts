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
    // Com o CSS do styled-components injetado no jsdom, queries por role
    // (que calculam estilos) ficam mais lentas nas páginas grandes.
    testTimeout: 15000,
  },
})
