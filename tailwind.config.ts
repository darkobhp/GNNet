import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f3f7fb",
          100: "#dbe7f2",
          200: "#b5cde0",
          300: "#86aaca",
          400: "#5c87b3",
          500: "#406c98",
          600: "#2f547a",
          700: "#24415f",
          800: "#1b3147",
          900: "#102030"
        }
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(15, 23, 42, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;

