import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Meta, StoryObj } from "@storybook/react";

import { Divider } from ".";

export default {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as Meta;

export const Basic: StoryObj = {};

export const Responsive: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "iphonexr",
    },
  },
};
