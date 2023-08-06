import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  publicDir: './public',
  build: {
    outDir: './build'
  },
  server: {
    port: 80,
    host: true
  }
})