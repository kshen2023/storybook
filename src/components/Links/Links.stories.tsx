import type { Meta, StoryFn } from "@storybook/react";
import { Links } from "./Links";
import { LinkProps } from "./Links.types";

const meta: Meta = {
  title: "Components/Link",
  component: Links,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: { control: "color" },
    bgColor: { control: "color" },
    disabled: { control: "boolean" },
    hidden: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;

const Template: StoryFn<LinkProps> = (args) => <Links {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Link Default",
  href: "#",
};

export const Hover = Template.bind({});
Hover.args = {
  children: " Link Hover",
  href: "#",
  color: "#3b8026",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Link Disabled",
  disabled: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  children: "Link Hidden",
  href: "#",
  hidden: true,
};
