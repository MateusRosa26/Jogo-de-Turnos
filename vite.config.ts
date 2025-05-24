import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Base path para GitHub Pages ou raiz para outros deploys
  const base = mode === 'production' && process.env.GITHUB_PAGES 
    ? '/Jogo-de-Turnos/' 
    : '/';

  return {
    plugins: [react()],
    base,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
    },
    build: {
      rollupOptions: {
        external: [],
      }
    }
  }
})
