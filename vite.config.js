import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // If building for GitHub, use the subfolder. Otherwise, default to root.
  base: process.env.BUILD_TARGET === "github" ? "/mubarak-portfolio/" : "/",
  build: {
    chunkSizeWarningLimit: 1000,
  }
});
