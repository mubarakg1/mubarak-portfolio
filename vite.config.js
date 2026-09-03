import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Automatically switches base path between GitHub Pages and Vercel
  base: process.env.GITHUB_ACTIONS ? "/mubarak-portfolio/" : "/",
  build: {
    chunkSizeWarningLimit: 1000,
  }
});
