import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@entities': path.resolve(__dirname, 'src/entities'),
    }
  },
  server: {
    proxy: {
      '/api1': {
        target: 'http://158.160.18.15:5001',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api1/, '')
      },
      '/api2': {
        target: 'http://158.160.18.15:5002',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api2/, '')
      },
      '/api3': {
        target: 'http://158.160.18.15:5003',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api3/, '')
      }
    }
  }
})
