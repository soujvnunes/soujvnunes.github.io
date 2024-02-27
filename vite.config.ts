import { defineConfig } from "vite";
import webfontDownload from "vite-plugin-webfont-dl";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), webfontDownload()],
  resolve: {
    alias: [
      {
        find: "@shared",
        replacement: "/src/shared",
      },
    ],
  },
});
