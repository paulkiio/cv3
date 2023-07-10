import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    strictPort: true,
    host: true,
    port: 5173,
    hmr: {
      overlay: false // https://vitejs.dev/config/server-options.html#server-hmr
    }
  },
})
