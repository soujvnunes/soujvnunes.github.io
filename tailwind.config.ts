import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"sofia-pro"', ...defaultTheme.fontFamily.sans],
        serif: ['"freight-display-pro"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        amber: {
          50: "#FFFBF4",
          900: "#1F1402",
          950: "#100A01",
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
} satisfies Config;
