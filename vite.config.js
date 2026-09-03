import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/mubarak-portfolio/",
    // base: '/', // Ensures assets are fetched relative to the root path
  build: {
  chunkSizeWarningLimit: 1000,
}
});