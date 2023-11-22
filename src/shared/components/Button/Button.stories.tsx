import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: <>Button</>,
  },
};

export const OnClick: Story = {
  args: {
    children: <>Click me</>,
    onClick: () => alert("Clicked!"),
  },
};
