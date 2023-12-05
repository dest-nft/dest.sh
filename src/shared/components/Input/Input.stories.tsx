import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Design System/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default = {
  args: {
    placeholder: "Enter your name",
    id: "name",
    labelText: "Enter your name",
  },
} satisfies Story;

export const Textarea = {
  args: {
    placeholder: "Enter your description",
    id: "description",
    labelText: "Enter your description",
    rows: 3,
  },
} satisfies Story;

export const WithError = {
  args: {
    placeholder: "Enter your name",
    id: "name",
    labelText: "Enter your name",
    error: "This field is required",
  },
} satisfies Story;
