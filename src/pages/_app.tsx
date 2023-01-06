import { ChakraBaseProvider } from "@chakra-ui/react";
import { themes } from "@styles/themes";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={themes}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
}

export default MyApp;
