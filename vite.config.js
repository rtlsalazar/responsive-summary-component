import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  publicDir: './rsc',
  build: {
    outDir: './build'
  },
  server: {
    port: 80,
    host: true
  }
})