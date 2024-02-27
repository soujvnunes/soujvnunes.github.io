import { defineConfig } from "vite";
import webfontDownload from "vite-plugin-webfont-dl";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), webfontDownload(["https://use.typekit.net/bwb4cjf.css"])],
  resolve: {
    alias: [
      {
        find: "@shared",
        replacement: "/src/shared",
      },
    ],
  },
});
