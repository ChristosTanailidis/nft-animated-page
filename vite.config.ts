import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})

vueCompilerOptions: {
  isCustomElement: tag => {
    return /^x-/.test(tag)
  }
}
