import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"sofia-pro"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        amber: {
          50: "#FFFBF4",
          900: "#1F1402",
          950: "#100A01",
        },
        linkedin: {
          400: "#3782CD",
          500: "#0A66C2",
        },
        behance: {
          400: "#2E76FF",
          500: "#0057FF",
        },
      },
    },
  },
} satisfies Config;
