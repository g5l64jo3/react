import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/react/' : '/',
  server: {
    host: '127.0.0.1',
    port: 5175,
  },
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
});
