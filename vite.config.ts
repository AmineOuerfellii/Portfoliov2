import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    allowedHosts: [
      '7966d48c-4f46-4d61-a977-e4c66bdd4518-00-17v0jb6bwlsrk.kirk.replit.dev'
    ]
  }
});
