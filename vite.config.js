import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // In production this is api/chat.js (Vercel Edge Function). Locally,
      // scripts/dev-api-server.js stands in so `npm run dev` alone works
      // without a Vercel login.
      '/api': 'http://localhost:8787',
    },
  },
})
