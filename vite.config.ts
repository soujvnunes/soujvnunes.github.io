import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import webfontDownload from "vite-plugin-webfont-dl";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    webfontDownload("https://use.typekit.net/bwb4cjf.css"),
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
        find: "containers",
        replacement: "/src/containers",
      },
      {
        find: "hooks",
        replacement: "/src/hooks",
      },
      {
        find: "helpers",
        replacement: "/src/helpers",
      },
      {
        find: "providers",
        replacement: "/src/providers",
      },
    ],
  },
  build: {
    target: "esnext",
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
