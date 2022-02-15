import { useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import type { AppProps } from "next/app";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@local-mui";
import { store, useAppDispatch } from "state/store";
import { createSetProducts } from "state/actions/creators";
import { generatedProducts } from "data/generate";
import theme from "config/theme";
import { WrapperProps } from "types/prop-types";

import "../styles/globals.css";

function ProvideInitialSetup({ children }: WrapperProps) {
  return (
    <ReduxProvider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ProvideInitialization>{children}</ProvideInitialization>
      </MuiThemeProvider>
    </ReduxProvider>
  );
}

function ProvideInitialization({ children }: WrapperProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(createSetProducts(generatedProducts));
  });

  return <>{children}</>;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProvideInitialSetup>
        <Component {...pageProps} />
      </ProvideInitialSetup>
    </>
  );
}

export default MyApp;
