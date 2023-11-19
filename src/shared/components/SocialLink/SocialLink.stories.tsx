import type { Meta, StoryObj } from "@storybook/react";
import { SocialLink } from "./SocialLink";

const meta: Meta<typeof SocialLink> = {
  title: "Design System/Social Link",
  component: SocialLink,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SocialLink>;

export const Twitter = {
  name: "Twitter",
  args: {
    href: "https://twitter.com/",
    image: "/icons/twitter.svg",
    alt: "Twitter",
  },
} satisfies Story;

// TODO: Use Discord
export const LinkedIn = {
  name: "LinkedIn",
  args: {
    href: "https://linkedin.com/",
    image: "/icons/linkedin.svg",
    alt: "LinkedIn",
  },
} satisfies Story;
