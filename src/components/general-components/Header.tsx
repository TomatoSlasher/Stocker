import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import classes from "./Header.module.css";
import HeaderSearch from "./header-components/HeaderSearch";
import IndexesQuote from "./IndexsQuote";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  let items = localStorage.getItem("cashBalance");
  if (items == null) {
    const startingBalance: any = 25000;
    localStorage.setItem("cashBalance", startingBalance);
  }
  const [marketsDropdown, setMarketsDropdown] = useState(false);
  const [IndexDropDown, setindexDropDown] = useState(false);
  const [showIndex, setShowIndex] = useState(true);
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    if (router.pathname === "/most-gainers") {
      setShowIndex(false);
    } else if (router.pathname === "/most-active") {
      setShowIndex(false);
    } else if (router.pathname === "/most-losers") {
      setShowIndex(false);
    } else if (router.pathname === "/portfolio") {
      setShowIndex(false);
    } else {
      setShowIndex(true);
    }
  }, [router]);

  return (
    <Fragment>
      <header>
        <div className={classes["header-container"]}>
          <div className={classes["logo-markets-container"]}>
            <div className="header-logo">
              <Link href="/">
                <div className={classes["logo-container"]}>
                  <h1 className={classes["logo"]}>Stocker</h1>

                  <svg
                    width="30"
                    height="45"
                    viewBox="0 0 24 24"
                    data-icon="chart-area"
                  >
                    <path d="M2.002 11.748c-.017-.376.1-.76.348-1.044.46-.526 1.2-.522 1.655.02l2.857 3.395 4.99-5.842c.218-.256.516-.4.826-.4.31 0 .61.143.828.4l2.526 2.943 3.765-5.513c.085-.176.203-.328.343-.444.463-.396 1.118-.344 1.53.15.22.267.33.61.33.955v12.268C22 19.39 21.473 20 20.824 20H3.176C2.526 20 2 19.39 2 18.636v-6.818c0-.023 0-.047.002-.07z"></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div
              onMouseEnter={() => setMarketsDropdown(true)}
              onMouseLeave={() => setMarketsDropdown(false)}
              className={classes["header-menu"]}
            >
              <h3 className={classes["markets-menu"]}>
                Markets
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                  data-icon="caret-down"
                >
                  <path d="M24.21 33.173l12.727-12.728c.78-.78.78-2.048 0-2.828-.78-.78-2.047-.78-2.828 0l-9.9 9.9-9.9-9.9c-.78-.78-2.047-.78-2.827 0-.78.78-.78 2.047 0 2.828L24.21 33.173z"></path>
                </svg>
              </h3>
              {marketsDropdown && (
                <div className={classes["drop-wrapper"]}>
                  <div className={classes["menu-dropdown"]}>
                    <Link href="/most-active">
                      <p className={classes["header-menu-markets"]}>
                        Most Active
                      </p>
                    </Link>

                    <Link href="/most-gainers">
                      <p className={classes["header-menu-markets"]}>
                        Most Gainer
                      </p>
                    </Link>
                    <Link href="/most-losers">
                      <p className={classes["header-menu-markets"]}>
                        Most Loser
                      </p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setindexDropDown(true)}
              onMouseLeave={() => setindexDropDown(false)}
              className={classes["header-menu2"]}
            >
              <h3 className={classes["markets-menu"]}>
                Indexes
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                  data-icon="caret-down"
                >
                  <path d="M24.21 33.173l12.727-12.728c.78-.78.78-2.048 0-2.828-.78-.78-2.047-.78-2.828 0l-9.9 9.9-9.9-9.9c-.78-.78-2.047-.78-2.827 0-.78.78-.78 2.047 0 2.828L24.21 33.173z"></path>
                </svg>
              </h3>
              {IndexDropDown && (
                <div className={classes["drop-wrapper"]}>
                  <div className={classes["menu-dropdown"]}>
                    <Link href="/SP500">
                      <p className={classes["header-menu-markets"]}>S&P 500</p>
                    </Link>

                    <Link href="/DOW">
                      <p className={classes["header-menu-markets"]}>
                        Dow Jones 30
                      </p>
                    </Link>
                    <Link href="/NASDAQ">
                      <p className={classes["header-menu-markets"]}>Nasdaq</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className={classes["header-about"]}>
              <Link href="/about">
                <h3>About</h3>
              </Link>
            </div>
          </div>
          <div className={classes["search-portfolio-header"]}>
            <HeaderSearch />
            <div className="header-portfolio">
              <Link href="/portfolio">
                <button className={classes["portfolio-btn"]}>Portfolio</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {showIndex ? <IndexesQuote /> : ""}
    </Fragment>
  );
};
export default Header;
