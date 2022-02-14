import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "state/store";
import { WrapperProps } from "types/prop-types";

import "../styles/globals.css";

function ProvideSetup({ children }: WrapperProps) {
  return <Provider store={store}>{children}</Provider>;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProvideSetup>
      <Component {...pageProps} />
    </ProvideSetup>
  );
}

export default MyApp;
