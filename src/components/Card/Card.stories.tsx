import { Meta, StoryFn } from "@storybook/react";
import { Card } from "./Card";
import { CardProps } from "./Card.types";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    titleColor: {
      control: "color",
    },
    descriptionColor: {
      control: "color",
    },
    hidden: {
      control: "boolean",
    },
  },
};

export default meta;
const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "web developer",
  content:
    "GitHub does not provide a built-in feature to track who has read or viewed your files. However, there are some indirect methods you can use to gain insights into how your repositories are being accessed.",
  image:
    "https://www.2440media.com/sites/default/files/assets/images/blog/The%20Difference%20between%20Web%20Designer%2C%20Web%20Developer%2C%20and%20Web%20Programmer.jpg",
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "web developer",
  content:
    "GitHub does not provide a built-in feature to track who has read or viewed your files. However, there are some indirect methods you can use to gain insights into how your repositories are being accessed.",
  disabled: true,
  image:
    "https://www.2440media.com/sites/default/files/assets/images/blog/The%20Difference%20between%20Web%20Designer%2C%20Web%20Developer%2C%20and%20Web%20Programmer.jpg",
};
