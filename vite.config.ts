import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import webfontDownload from "vite-plugin-webfont-dl";

const aliases = [
  "consts",
  "config",
  "components",
  "containers",
  "hooks",
  "helpers",
  "providers",
  "types",
] as const;

type Alias = {
  [k in (typeof aliases)[number]]: `/src/${k}`;
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    webfontDownload("https://use.typekit.net/bwb4cjf.css"),
    svgr(),
  ],
  resolve: {
    alias: aliases.reduce(
      (acc, cur) => ({ ...acc, [cur]: `/src/${cur}` }),
      {} as Alias,
    ),
  },
  build: {
    target: "esnext",
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
