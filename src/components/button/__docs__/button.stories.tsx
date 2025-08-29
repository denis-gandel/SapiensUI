import type { Meta, StoryObj } from "@storybook/react-vite";
import Example from "./example";
const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Primary button",
    variant: "primary",
    disabled: false,
    onClick: () => console.log("Primary button :D"),
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary button",
    variant: "secondary",
    disabled: false,
    onClick: () => console.log("Secondary button :D"),
  },
};

export const Link: Story = {
  args: {
    text: "Link button",
    variant: "link",
    disabled: false,
    onClick: () => console.log("Link button :D"),
  },
};
