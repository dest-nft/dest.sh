import type { Meta, StoryObj } from "@storybook/react";
import { Root } from "./Root";
import { Item } from "./Item";
import { Default as ItemStory } from "./Item.stories";

const meta: Meta<typeof Root> = {
  title: "Design System/Accordion/Root",
  component: Root,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Root>;

export const SingleItem = {
  args: {
    children: <Item {...ItemStory.args} />,
  },
} satisfies Story;

export const MultipleItems = {
  args: {
    children: (
      <>
        <Item {...ItemStory.args} title="Title 1" />
        <Item {...ItemStory.args} title="Title 2" />
        <Item {...ItemStory.args} title="Title 3" />
      </>
    ),
  },
} satisfies Story;
