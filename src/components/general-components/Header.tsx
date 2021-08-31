import Link from "next/link";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  let items = localStorage.getItem("cashBalance");
  if (items == null) {
    const startingBalance: any = 25000;
    localStorage.setItem("cashBalance", startingBalance);
  }

  return (
    <header>
      <div className={classes["header-container"]}>
        <div className="header-logo">
          <Link href="/">
            <h1 className={classes["logo"]}>Stocker</h1>
          </Link>
        </div>
        <div className={classes["header-menu"]}>
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
        <div className="header-search">
          <input
            placeholder="Search Company"
            type="text"
            className="header-search-input"
          />
          <button>Search</button>
        </div>
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
