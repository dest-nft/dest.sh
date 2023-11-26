import type { Meta, StoryObj } from "@storybook/react";
import { NoiseBackground } from "./NoiseBackground";

const meta: Meta<typeof NoiseBackground> = {
  title: "Design System/Noise Background",
  component: NoiseBackground,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NoiseBackground>;

export const Default = {} satisfies Story;
