import type { Preview } from "@storybook/react";
import React from "react";
import { clashDisplay, outfit } from "@/fonts";
import "../src/tailwind.css";

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
    (story) => {
      return React.createElement(
        "div",
        {
          className: `${clashDisplay.variable} ${outfit.variable} font-outfit`,
        },
        story(),
      );
    },
  ],
};

export default preview;
