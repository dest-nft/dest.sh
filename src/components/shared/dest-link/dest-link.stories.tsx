import type { Meta, StoryObj } from "@storybook/react";
import { DestLink } from "./dest-link";

const meta: Meta<typeof DestLink> = {
  component: DestLink,
};

export default meta;
export type Story = StoryObj<typeof DestLink>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div className="flex flex-col">
          <p className="text-xl md:text-2xl font-bold">DevBrother</p>
          <p className="text-xs font-medium">Top Web Deweloper</p>
        </div>
      </>
    ),
    href: "https://devbrother.com/",
    target: "_blank",
  },
};
