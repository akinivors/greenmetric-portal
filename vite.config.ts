import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Environment variables configuration
  envPrefix: ['VITE_'], // Only expose env vars that start with VITE_
  server: {
    port: 5183, // Default Vite port
    host: true // Allow external connections
  },
  build: {
    sourcemap: true // Generate source maps for debugging
  }
})
