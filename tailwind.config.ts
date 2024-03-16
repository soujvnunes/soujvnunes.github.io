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
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
} satisfies Config;
