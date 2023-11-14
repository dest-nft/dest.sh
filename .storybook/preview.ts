import type { Preview } from "@storybook/react";
import localFont from "next/font/local";
import React from "react";
import "../src/app/tailwind.css";

const clashDisplay = localFont({
  src: "../fonts/clash-display.ttf",
  display: "swap",
  variable: "--font-clash-display",
});

const outfit = localFont({
  src: "../fonts/outfit.ttf",
  display: "swap",
  variable: "--font-outfit",
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return React.createElement(
        "div",
        {
          className: `${clashDisplay.variable} ${outfit.variable} font-outfit`,
        },
        React.createElement(Story)
      );
    },
  ],
};

export default preview;
