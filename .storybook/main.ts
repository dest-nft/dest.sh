import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: { name: "@storybook/nextjs" },
  docs: { autodocs: "tag" },
  staticDirs: [
    "../public",
    {
      from: "../public/fonts",
      to: "public/fonts",
    },
  ],
};

export default config;
