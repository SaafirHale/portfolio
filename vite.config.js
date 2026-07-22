import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative so the same build works at the domain
// root (saafirhale.github.io) OR a project subpath (saafirhale.github.io/portfolio/).
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 5177, strictPort: true },
})
