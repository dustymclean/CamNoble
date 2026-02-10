import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Ensures assets load correctly on GitHub Pages and local subfolders
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Since you are using React 19 and Vite 6+, esbuild is faster.
    // If you prefer Terser, make sure 'npm install -D terser' was successful.
    minify: 'terser', 
    terserOptions: {
      compress: {
        drop_console: true, // Optional: cleans up console logs for production
        drop_debugger: true,
      },
    },
    rollupOptions: {
      input: {
        main: './index.html', // Explicitly points to your entry point
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    // Ensures HMR (Hot Module Replacement) works correctly on Macs
    watch: {
      usePolling: true,
    },
  },
});
