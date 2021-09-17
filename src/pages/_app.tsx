import "../styles/styles.css";
import Footer from "../components/general-components/Footer";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import dynamic from "next/dynamic";
import store from "../store/index";
import { Provider } from "react-redux";

const Header = dynamic(
  () => import("../components/general-components/Header"),
  {
    ssr: false,
  }
);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Provider store={store}>
        <Header />

        <Component {...pageProps} />
        <Footer />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
