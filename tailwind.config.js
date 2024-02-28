import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
