import { defineConfig } from "vite";
import webfontDownload from "vite-plugin-webfont-dl";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webfontDownload([
      "https://use.typekit.net/bwb4cjf.css",
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
    ]),
  ],
  resolve: {
    alias: [
      {
        find: "@shared",
        replacement: "/src/shared",
      },
    ],
  },
});
