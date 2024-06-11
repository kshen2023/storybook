import type { Meta, StoryFn } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    hidden: { control: "boolean" },
  },
};

export default meta;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Label Default",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Label Disabled ",
  disabled: true,
};
