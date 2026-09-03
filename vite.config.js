import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Setting base to './' forces relative paths so it works everywhere
  base: './', 
  build: {
    chunkSizeWarningLimit: 1000,
  }
});
