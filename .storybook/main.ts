import type { StorybookConfig } from "@storybook/nextjs";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: { autodocs: "tag" },
  staticDirs: [
    "../public",
    {
      from: "../public",
      to: "public",
    },
  ],
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.plugins = config.resolve.plugins ?? [];
      config.resolve.plugins.push(
        new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
      );
    }

    return config;
  },
};

export default config;
