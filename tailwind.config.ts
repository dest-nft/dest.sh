import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clashDisplay: ["var(--font-clash-display)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // gray: "rgba(98, 98, 98, 0.1)",
        gray: "rgba(98, 98, 98, 0.25)",
        // btnBG: "rgba(255, 255, 255, 0.07)",
        btnBG: "rgba(255, 255, 255, 0.15)",
        // btnBGHeader: "rgba(74, 74, 74, 0.11)",
        btnBGHeader: "rgba(255,255,255,0.15)",
        white: "#ffffff",
        black: "#000000",
        green: "rgba(17, 205, 126, 1)",
        yellow: "rgba(242, 254, 103, 1)",
        btnBGHeaderHEX: "#1a1a1a",
        btnBGHeaderHEXItem: "#222222",
        borderColor: "rgba(255, 255, 255, 0.7)",
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};

export default config;
