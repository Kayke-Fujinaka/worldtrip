import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Meta, StoryObj } from "@storybook/react";

import { TravelTypes } from ".";

export default {
  title: "Components/Travel",
  component: TravelTypes,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as Meta;

export const WithGroupedItems: StoryObj = {};

export const WithGroupedItemsResponsive: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "iphonexr",
    },
  },
};
