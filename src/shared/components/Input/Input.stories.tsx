import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Design System/Input",
  component: Input,
};

export default meta;
export type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter your name",
    id: "name",
    labelText: "Enter your name",
  },
  decorators: [
    (Story) => (
      <div className="bg-btnBGHeaderHEXItem">
        <Story />
      </div>
    ),
  ],
};

export const Textarea: Story = {
  args: {
    placeholder: "Enter your description",
    id: "description",
    labelText: "Enter your description",
    rows: 3,
  },
  decorators: [
    (Story) => (
      <div className="bg-btnBGHeaderHEXItem">
        <Story />
      </div>
    ),
  ],
};
