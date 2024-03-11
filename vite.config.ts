import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import webfontDownload from "vite-plugin-webfont-dl";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    webfontDownload([
      "https://use.typekit.net/bwb4cjf.css",
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
    ]),
    svgr(),
  ],
  resolve: {
    alias: [
      {
        find: "consts",
        replacement: "/src/consts",
      },
      {
        find: "config",
        replacement: "/src/config",
      },
      {
        find: "components",
        replacement: "/src/components",
      },
      {
        find: "hooks",
        replacement: "/src/hooks",
      },
      {
        find: "assets",
        replacement: "/src/assets",
      },
    ],
  },
  build: {
    target: "esnext",
  },
});
