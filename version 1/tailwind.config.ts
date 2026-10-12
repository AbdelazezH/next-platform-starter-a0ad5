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
        ink: "#191815",
        paper: "#f8f8f5",
        bone: "#ffffff",
        line: "#d9dcd8",
        coral: "#ed488f",
        fern: "#168354",
        denim: "#2855cf",
        yellow: "#f5ce49",
        mint: "#adddcc",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Arial", "Helvetica", "sans-serif"],
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
