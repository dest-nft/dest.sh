import type { Meta, StoryObj } from "@storybook/react";
import { DestLink } from "./DestLink";

const meta: Meta<typeof DestLink> = {
  title: "Design System/DEST Link",
  component: DestLink,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DestLink>;

export const Default = {} satisfies Story;
