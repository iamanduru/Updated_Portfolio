import type { Config } from "tailwindcss"
import animatePlugin from "tailwindcss-animate"

const config: Config = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    fontFamily: {
      sans: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {
      
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
      colors: {
        teal: {
          100: "#E9F6FB",
          200: "#BEE5F3",
          300: "#92D4EB",
          400: "#67C4E3",
          500: "#3CB3DC",
          600: "#2299C2",
          700: "#1B7797",
          800: "#124C6D",
          900: "#0A2230",
        },
        blue: {
          100: "#E9FAFA",
          200: "#BFF2F0",
          300: "#94EAE7",
          400: "#69E1DD",
          500: "#3FD9D4",
          600: "#25BFBB",
          700: "#1D9591",
          800: "#146A67",
          900: "#0C3F3E",
        },
        pink: {
          100: "#FFE5E5",
          200: "#FFB2B2",
          300: "#FF7F7F",
          400: "#FE4C4C",
          500: "#FF1919",
          600: "#E50000",
          700: "#B20000",
          800: "#7F0000",
          900: "#4C0000",
        },
        white: {
          100: "#F9F8F5",
          200: "#F3EEE0",
          300: "#ECE3CC",
          400: "#E5D8B8",
          500: "#DDD0A4",
          600: "#C3AF87",
          700: "#77633B",
          800: "#55462A",
          900: "#332A19",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animatePlugin],
}

export default config
