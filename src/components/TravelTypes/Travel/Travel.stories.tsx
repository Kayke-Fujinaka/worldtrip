import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Meta, StoryObj } from "@storybook/react";

import { Travel } from ".";
import Surf from "../../../../public/assets/surf.svg";

export default {
  title: "Components/Travel",
  component: Travel,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as Meta;

export const Basic: StoryObj = {
  args: {
    image: Surf.src,
    text: "praia",
  },
};

export const Responsive: StoryObj = {
  args: {
    image: Surf.src,
    text: "praia",
  },
  parameters: {
    viewport: {
      defaultViewport: "iphonexr",
    },
  },
};
