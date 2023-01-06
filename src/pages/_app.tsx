import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@/../styles/global";
import themes from "@/../styles/themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
