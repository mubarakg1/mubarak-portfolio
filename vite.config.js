import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Sets the base folder for GitHub Actions, defaults to root for Vercel
  base: process.env.GITHUB_ACTIONS ? "/mubarak-portfolio/" : "/",
  build: {
    chunkSizeWarningLimit: 1000,
  }
});
