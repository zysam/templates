import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import pkg from './package.json';
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
    __APP_NAME__: JSON.stringify(pkg.name),
    __APP_AUTHOR__: JSON.stringify(pkg.author),
    __APP_REPO__: JSON.stringify(pkg.repository),
    __BUILD_DATE__: JSON.stringify(new Date().toLocaleDateString()),
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("@tanstack")) {
            return "tanstack";
          }
          if (id.includes("react") || id.includes("react-dom")) {
            return "react-vendor";
          }
        },
      },
    },
  },
  plugins: [
    tsconfigPaths(), 
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      verboseFileRoutes: false,
    }),
    react(), 
    tailwindcss()
  ],
});
