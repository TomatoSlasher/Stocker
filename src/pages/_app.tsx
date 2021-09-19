import "../styles/styles.css";
import Footer from "../components/general-components/Footer";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import dynamic from "next/dynamic";
import store from "../store/index";
import { Provider } from "react-redux";
import Head from "next/head";

const Header = dynamic(
  () => import("../components/general-components/Header"),
  {
    ssr: false,
  }
);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Stocker</title>
        <link rel="shortcut icon" href="/up.ico" />
      </Head>
      <Provider store={store}>
        <Header />

        <Component {...pageProps} />
        <Footer />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
