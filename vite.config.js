import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/shweta-portfolio/', // 👈 Add this line
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
