import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/react-practice-apps',
  build: {},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
