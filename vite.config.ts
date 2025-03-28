import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  console.log(env['VITE_APP_TYPE']) 

  return {
    plugins: [react()],
    define: {
      __APP_TYPE__: JSON.stringify(env['VITE_APP_TYPE'])
    },
    server: {
      port: env['VITE_APP_TYPE'] === "client" ? 5175 : 5174
    },
    resolve: {
      alias:{
        '@shared': path.resolve(__dirname, 'src/shared'),
        '@widgets': path.resolve(__dirname, 'src/widgets'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@entities': path.resolve(__dirname, 'src/entities'),
      }
    }
  }
})
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias:{
//       '@shared': path.resolve(__dirname, 'src/shared'),
//       '@widgets': path.resolve(__dirname, 'src/widgets'),
//       '@pages': path.resolve(__dirname, 'src/pages'),
//       '@features': path.resolve(__dirname, 'src/features'),
//       '@entities': path.resolve(__dirname, 'src/entities'),
//     }
//   }
// })
