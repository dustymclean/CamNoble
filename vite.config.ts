import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all envs regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // CRITICAL: This allows GitHub Pages to find your assets at /CamNoble/
    base: '/CamNoble/', 
    
    plugins: [react()],
    
    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    define: {
      // Mapping your env variables so they are accessible in your code
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },

    resolve: {
      alias: {
        // Allows you to use '@' to reference the root folder in imports
        '@': path.resolve(__dirname, './'),
      }
    },

    build: {
      // Ensures the build output matches the folder gh-pages expects
      outDir: 'dist',
      // Generates a manifest file which can help with debugging paths
      manifest: true,
    }
  };
});
