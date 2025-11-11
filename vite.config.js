import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    disabled: false,
  },
  build: {
    rollupOptions: {},
  },
  experimental: {
    rollup: false,
  },
  server: {
    host: "localhost",
    watch: {
      usePolling: true,
    },
  },
});
