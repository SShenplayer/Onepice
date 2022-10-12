import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //通过vite defineConfig.server配置参数
  server: {
    port: 8888
  }
})
