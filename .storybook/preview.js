import { ChakraBaseProvider } from "@chakra-ui/react";
import { addDecorator } from "@storybook/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { themes } from "../styles/themes";

addDecorator((StoryFn) => (
  <ChakraBaseProvider theme={themes}>
    <StoryFn />
  </ChakraBaseProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
