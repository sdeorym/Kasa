import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // ✅ Esto soluciona el error

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets' : path.resolve(__dirname, './src/assets'),
      '@utils' : path.resolve(__dirname, './src/utils'),
    },
  },
})
