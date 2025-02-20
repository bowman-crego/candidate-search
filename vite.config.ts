import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./env",
  plugins: [react()],
  server: {
    host: true,
    port: 3001,
    open: true,
  },
  preview: {
    allowedHosts: ["https://candidate-search-0my2.onrender.com"]
  }
  
});
