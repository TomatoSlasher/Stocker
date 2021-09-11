import classes from "./Footer.module.css";
import Link from "next/link";
import reactImg from "../../../public/imgs/react.png";
import typeScriptImg from "../../../public/imgs/typescript.png";
import nextImg from "../../../public/imgs/nextjs.png";
import reduxImg from "../../../public/imgs/redux.png";
const Footer = () => {
  const react: any = reactImg;
  const typeScript: any = typeScriptImg;
  const nextjs: any = nextImg;
  const redux: any = reduxImg;
  return (
    <div>
      <div className={classes["spacer"]}></div>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-left"]}>
          <div className={classes["footer-logo"]}>
            <div>
              <h1 className={classes["logo"]}>Stocker</h1>
              <svg
                width="75"
                height="60"
                viewBox="0 0 24 24"
                data-icon="chart-area"
              >
                <path d="M2.002 11.748c-.017-.376.1-.76.348-1.044.46-.526 1.2-.522 1.655.02l2.857 3.395 4.99-5.842c.218-.256.516-.4.826-.4.31 0 .61.143.828.4l2.526 2.943 3.765-5.513c.085-.176.203-.328.343-.444.463-.396 1.118-.344 1.53.15.22.267.33.61.33.955v12.268C22 19.39 21.473 20 20.824 20H3.176C2.526 20 2 19.39 2 18.636v-6.818c0-.023 0-.047.002-.07z"></path>
              </svg>
            </div>

            <p className="copyright">© 2021 Stocker</p>
          </div>

          <div className={classes["footer-links-container"]}>
            <div className={classes["footer-links"]}>
              <h2 className={classes["about-link"]}>Markets</h2>
              <Link href="/most-active">
                <p className={classes["markets-link"]}>Most Active</p>
              </Link>
              <Link href="/most-gainers">
                <p className={classes["markets-link"]}>Most Gainer</p>
              </Link>
              <Link href="/most-losers">
                <p className={classes["markets-link"]}>Most Loser</p>
              </Link>
            </div>
            <Link href="/about">
              <div className={classes["footer-links"]}>
                <h2 className={classes["about-link"]}>About</h2>
              </div>
            </Link>

            <div className={classes["footer-links"]}>
              <h2 className={classes["about-link"]}>Indexes</h2>
              <Link href="/most-active">
                <p className={classes["markets-link"]}>S&P 500</p>
              </Link>
              <Link href="/most-gainers">
                <p className={classes["markets-link"]}>Dow Jones Industrial</p>
              </Link>
              <Link href="/most-losers">
                <p className={classes["markets-link"]}>Nasdaq</p>
              </Link>
              <Link href="/most-losers">
                <p className={classes["markets-link"]}>Russell 2000</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes["footer-right"]}>
          <div className={classes["footer-description"]}>
            <p className={classes["footer-p"]}>
              This project makes you be able to research public companies and
              view their financials and their historical stock prices etc., and
              you can also start paper-trading in your portfolio with a starting
              balance of $25,000 (all trading data is stored in local storage),
              this website is built with the financialmodelingprep.com API for
              most of the data and with LightWeight Charts library for the
              interactive charts.
            </p>
            <h1>Built with:</h1>
            <div className={classes["built-with"]}>
              <img
                className={classes["react-img"]}
                src={react.src}
                alt="react logo"
              />
              <img
                className={classes["typescript-img"]}
                src={typeScript.src}
                alt="react logo"
              />
              <img
                className={classes["next-img"]}
                src={nextjs.src}
                alt="react logo"
              />
              <img
                className={classes["bulit-with-img"]}
                src={redux.src}
                alt="react logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
