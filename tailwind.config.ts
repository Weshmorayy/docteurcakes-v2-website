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
        dark: {
          950: "#080705",
          900: "#0D0B09",
          850: "#14110E",
          800: "#1A1713",
          700: "#2A2520",
        },
        gold: {
          300: "#F3E5AB",
          400: "#E5C158",
          500: "#D4AF37",
          600: "#C99700",
          700: "#A87B00",
        },
        ivory: {
          50: "#FDFBF7",
          100: "#F7F3EB",
          200: "#EFE8DA",
        },
        wax: {
          900: "#0F1A2E",
          800: "#1B2A4A",
          700: "#2B3E68",
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #C99700 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.2) 50%, transparent 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
