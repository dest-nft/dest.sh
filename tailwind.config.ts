import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/shared/components/**/*.tsx", "./src/app/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        clashDisplay: ["var(--font-clash-display)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "noise": "url('/images/noise.svg')",
      },

      colors: {
        gray: "rgba(98, 98, 98, 0.25)",
        btnBG: "rgba(255, 255, 255, 0.15)",
        btnBGHeader: "rgba(255,255,255,0.15)",
        white: "rgba(255, 255, 255, 1)",
        black: "rgba(0, 0, 0, 1)",
        green: "rgba(17, 205, 126, 1)",
        yellow: "rgba(242, 254, 103, 1)",
        btnBGHeaderHEX: "rgba(26, 26, 26, 1)",
        btnBGHeaderHEXItem: "rgba(34, 34, 34, 0.5)",
        borderColor: "rgba(255, 255, 255, 0.7)",
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};

export default config;
