import type { Meta, StoryObj } from "@storybook/react";
import { DevBrotherLink } from "./DevBrotherLink";

const meta: Meta<typeof DevBrotherLink> = {
  title: "Page Components/Index/Footer/DevBrother Link",
  component: DevBrotherLink,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DevBrotherLink>;

export const Default = {} satisfies Story;
