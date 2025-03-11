import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@myTypes': path.resolve(__dirname, 'src/types'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@context': path.resolve(__dirname, 'src/context'),
      "@utils": path.resolve(__dirname, 'src/utils')
    }
  }
});
