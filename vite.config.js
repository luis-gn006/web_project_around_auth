import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://luis-gn006.github.io/web_project_around_auth/',
  plugins: [react()],
  server: {
    port: 3000,
  },
})
