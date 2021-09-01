import "../styles/styles.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(
  () => import("../components/general-components/Header"),
  {
    ssr: false,
  }
);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
