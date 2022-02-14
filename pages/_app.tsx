import { Provider as ReduxProvider } from "react-redux";
import type { AppProps } from "next/app";
import { ThemeProvider as MuiThemeProvider } from "@local-mui";
import theme from "config/theme";
import { store } from "state/store";
import { WrapperProps } from "types/prop-types";

import "../styles/globals.css";

function ProvideSetup({ children }: WrapperProps) {
  return (
    <ReduxProvider store={store}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ReduxProvider>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProvideSetup>
      <Component {...pageProps} />
    </ProvideSetup>
  );
}

export default MyApp;
