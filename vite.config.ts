import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "reset-css/reset";
          @use "sass:color";
          @use "@/styles/variables" as *;
          @use "@/styles/functions" as *;
          @use "@/styles/mixins" as *;
        `
      }
    }
  },
})
