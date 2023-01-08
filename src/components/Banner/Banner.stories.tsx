import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Meta, StoryObj } from "@storybook/react";

import { Banner } from ".";

export default {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
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
