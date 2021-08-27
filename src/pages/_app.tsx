import "../styles/styles.css";
import Header from "../components/general-components/Header";
import type { AppProps /*, AppContext */ } from "next/app";
import { Fragment } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
