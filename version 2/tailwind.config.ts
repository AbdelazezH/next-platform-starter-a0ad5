import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#161918",
        paper: "#f5f6f4",
        bone: "#ffffff",
        line: "#e5e8e4",
        coral: "#087dae",
        fern: "#2f6b41",
        denim: "#066d9d",
        yellow: "#d3ff64",
        mint: "#d3ff64",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Arial", "Helvetica", "sans-serif"],
        handwritten: ["Caveat", "cursive"],
        condensed: ["Anton", "Impact", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 70px rgba(23, 24, 22, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
