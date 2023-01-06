import { Meta, StoryObj } from "@storybook/react";

import { Header } from ".";

export default {
  title: "Header",
  component: Header,
  parameters: {
    nextRouter: {
      path: "/",
      asPath: "/",
    },
  },
} as Meta;

export const Primary: StoryObj = {};
