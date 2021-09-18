import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import classes from "./Header.module.css";
import HeaderSearch from "./header-components/HeaderSearch";
import IndexesQuote from "./IndexsQuote";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import HamburgerMenu from "./header-components/HamburgerMenu";
import { useSelector } from "react-redux";
import { hamburgerActions } from "../../store/index";
import { useDispatch } from "react-redux";
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
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 925 });
  const [activeSearch, setActiveSearch] = useState(false);
  const menuState = useSelector((state: { hamburger: { menu: boolean } }) => {
    return state.hamburger.menu;
  });

  useEffect(() => {
    dispatch(hamburgerActions.getMenu(false));
  }, [router]);
  const dispatch = useDispatch();
  const openMenu = () => {
    dispatch(hamburgerActions.getMenu(true));
    console.log(menuState);
  };
  if (menuState) {
    const doc: any = document.body;
    doc.style.overflow = "hidden";
  }
  if (!menuState) {
    const doc: any = document.body;
    doc.style.overflow = "auto";
  }
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  useEffect(() => {
    setActiveSearch(false);
  }, [router]);
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
        {!isTablet && !isMobile && (
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
                        <p className={classes["header-menu-markets"]}>
                          S&P 500
                        </p>
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
                  <button className={classes["portfolio-btn"]}>
                    Portfolio
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
        {isTablet && (
          <div className={classes["header-container"]}>
            <div className={classes["hamburger-btn-container"]}>
              {menuState && <HamburgerMenu />}
              <svg
                width="32"
                height="32"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className={classes["hamburger-btn"]}
                onClick={openMenu}
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </div>

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
            </div>
            <div className={classes["search-portfolio-header"]}>
              {activeSearch && <HeaderSearch />}
              <button
                onClick={() => setActiveSearch(!activeSearch)}
                className={classes["search-button"]}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  data-icon="search"
                >
                  <path d="M9 3C5.686 3 3 5.686 3 9c0 3.313 2.686 6 6 6s6-2.687 6-6c0-3.314-2.686-6-6-6m13.713 19.713c-.387.388-1.016.388-1.404 0l-7.404-7.404C12.55 16.364 10.85 17 9 17c-4.418 0-8-3.582-8-8 0-4.42 3.582-8 8-8s8 3.58 8 8c0 1.85-.634 3.55-1.69 4.905l7.403 7.404c.39.386.39 1.015 0 1.403"></path>
                </svg>
              </button>
              <div className="header-portfolio">
                <Link href="/portfolio">
                  <button className={classes["portfolio-btn"]}>
                    Portfolio
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
        {isMobile && (
          <div className={classes["header-container"]}>
            <div className={classes["left-head"]}>
              <div className={classes["hamburger-btn-container"]}>
                {menuState && <HamburgerMenu />}

                <svg
                  width="32"
                  height="32"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bars"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className={classes["hamburger-btn"]}
                  onClick={openMenu}
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  ></path>
                </svg>
              </div>

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
              </div>
            </div>

            <div className={classes["search-portfolio-header"]}>
              {activeSearch && <HeaderSearch />}
              <button
                onClick={() => setActiveSearch(!activeSearch)}
                className={classes["search-button"]}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  data-icon="search"
                >
                  <path d="M9 3C5.686 3 3 5.686 3 9c0 3.313 2.686 6 6 6s6-2.687 6-6c0-3.314-2.686-6-6-6m13.713 19.713c-.387.388-1.016.388-1.404 0l-7.404-7.404C12.55 16.364 10.85 17 9 17c-4.418 0-8-3.582-8-8 0-4.42 3.582-8 8-8s8 3.58 8 8c0 1.85-.634 3.55-1.69 4.905l7.403 7.404c.39.386.39 1.015 0 1.403"></path>
                </svg>
              </button>
              <div className="header-portfolio">
                <Link href="/portfolio">
                  <button className={classes["portfolio-btn"]}>
                    Portfolio
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      {showIndex ? <IndexesQuote /> : ""}
    </Fragment>
  );
};
export default Header;
