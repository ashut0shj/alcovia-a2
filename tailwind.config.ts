import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A5F", // Navy blue from logo
          light: "#2D4F7C",
          dark: "#0F1F35",
        },
        accent: {
          gold: "#F4A261", // Golden yellow from logo
          maroon: "#8B1538", // Deep maroon/burgundy from logo
          light: "#E76F51",
        },
        background: {
          light: "#FFFFFF",
          offwhite: "#FAFAFA",
          cream: "#F5F5F0",
        },
        text: {
          primary: "#1E3A5F",
          secondary: "#4A5568",
          light: "#718096",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

