import type { Meta, StoryObj } from "@storybook/react";
import { Emoji } from "./Emoji";

const meta: Meta<typeof Emoji> = {
  title: "Design System/Emoji",
  component: Emoji,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Emoji>;

export const GreenFire = {
  args: { type: "green-fire" },
} satisfies Story;

export const GreenHeartEyes = {
  args: { type: "green-heart-eyes" },
} satisfies Story;

export const SparklesCat = {
  args: { type: "sparkles-cat" },
} satisfies Story;

export const TongueCat = {
  args: { type: "tongue-cat" },
} satisfies Story;
