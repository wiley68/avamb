import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/dist/',
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, '')
        },
      },
      {
        find: '@tailwindConfig',
        replacement: () => './src/css/tailwind.config.js',
      },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assetsmobile/[name].[hash][extname]',
        chunkFileNames: 'assetsmobile/[name].[hash].js',
        entryFileNames: 'assetsmobile/[name].[hash].js',
      },
    },
  },
})
