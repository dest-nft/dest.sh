import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default = {
  args: {
    children: "Button",
  },
} satisfies Story;

export const Disabled = {
  args: {
    children: "Button",
    disabled: true,
  },
} satisfies Story;
