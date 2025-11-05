import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // When running in development locally, proxy API calls to the local backend.
  // This does not affect production builds or Vercel deployment.
  server: mode === 'development' ? {
    port: 5173,
    open: true,
    proxy: {
      // Forward any /api requests to the backend running on localhost:5000
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path
      }
    }
  } : undefined
}));
