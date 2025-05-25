import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/ibm-js-course-project/',
  plugins: [
    tailwindcss(),
  ],
})