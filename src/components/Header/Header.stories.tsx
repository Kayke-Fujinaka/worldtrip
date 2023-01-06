import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Meta, StoryObj } from "@storybook/react";

import { Header } from ".";

export default {
  title: "Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    nextRouter: {
      path: "/",
      asPath: "/",
    },
  },
} as Meta;

export const Basic: StoryObj = {};

export const WithButtonBackToHome: StoryObj = {
  parameters: {
    nextRouter: {
      path: "/continent",
      asPath: "/continent",
    },
  },
};

export const Responsive: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "iphonexr",
    },
  },
};
