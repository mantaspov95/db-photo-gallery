import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@/': '/src/',
      '@assets': '/src/assets',
      '@constants': '/src/constants',
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
