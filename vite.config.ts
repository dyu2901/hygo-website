import { defineConfig } from 'vitest/config'; // Import from 'vitest/config'
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/HYGO-Healthcare/",
  test: {
    globals: true, // Enables global variables like `expect`
    environment: 'jsdom', // Simulates a browser-like environment
    setupFiles: './src/setupTests.ts', // Points to your setup file
  },
  build: {
    outDir: 'dist', // Ensure this is set to 'dist'
  },
});
