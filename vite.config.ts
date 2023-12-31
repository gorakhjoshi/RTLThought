import { defineConfig } from 'vite'
import type { InlineConfig } from 'vitest'
import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    testMatch: ['./tests/**/*.test.tsx'],
    globals: true,
  },
} as VitestConfigExport)
