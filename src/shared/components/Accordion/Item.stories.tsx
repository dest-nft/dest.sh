import type { Meta, StoryObj } from "@storybook/react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { Item } from "./Item";

const meta: Meta<typeof Item> = {
  component: Item,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Default = {
  args: {
    title: "Title",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas maecenas. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Et malesuada fames ac turpis egestas sed tempus urna. Auctor neque vitae tempus quam pellentesque nec. Nunc sed augue lacus viverra. Ornare suspendisse sed nisi lacus sed viverra. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Vitae ultricies leo integer malesuada. Ullamcorper malesuada proin libero nunc consequat interdum. Vulputate sapien nec sagittis aliquam malesuada.",
  },
  decorators: [
    (story) => (
      <RadixAccordion.Root type="single" collapsible>
        {story()}
      </RadixAccordion.Root>
    ),
  ],
} satisfies Story;
