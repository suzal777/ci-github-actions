import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const base = "/ci-github-actions/";

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
