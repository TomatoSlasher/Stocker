import Link from "next/link";
import { useState } from "react";
import classes from "./Header.module.css";
import HeaderSearch from "./header-components/HeaderSearch";
const Header: React.FC = () => {
  let items = localStorage.getItem("cashBalance");
  if (items == null) {
    const startingBalance: any = 25000;
    localStorage.setItem("cashBalance", startingBalance);
  }
  const [marketsDropdown, setMarketsDropdown] = useState(false);

  return (
    <header>
      <div className={classes["header-container"]}>
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
        <div className={classes["header-menu"]}>
          <h3
            onClick={() => setMarketsDropdown(!marketsDropdown)}
            className={classes["markets-menu"]}
          >
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
            <div className={classes["menu-dropdown"]}>
              <Link href="/most-active">
                <p className={classes["header-menu-markets"]}>Most Active</p>
              </Link>

              <Link href="/most-gainers">
                <p className={classes["header-menu-markets"]}>Most Gainer</p>
              </Link>
              <Link href="/most-losers">
                <p className={classes["header-menu-markets"]}>Most Loser</p>
              </Link>
            </div>
          )}
        </div>
        <HeaderSearch />
        <div className="header-portfolio">
          <Link href="/portfolio">
            <button>Portfolio</button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
