import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@context': '/src/context',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@scss': '/src/scss',
      '@utils': '/src/utils',
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
