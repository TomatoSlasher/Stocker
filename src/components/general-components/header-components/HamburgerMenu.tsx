import classes from "./HamburgerMenu.module.css";
import { hamburgerActions } from "../../../store/index";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const HamburgerMenu = () => {
  const overlay = useRef<HTMLDivElement>(null);
  const hamContainer = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const closeMenu = () => {
    const ham: any = hamContainer.current;
    ham.classList.add("hide");
    setTimeout(() => {
      dispatch(hamburgerActions.getMenu(false));
    }, 500);
  };

  const outsideClickHandler = (e: any) => {
    if (e.target === overlay.current) {
      closeMenu();
    }
  };

  return (
    <div
      className={classes["hamburger-overlay"]}
      onClick={outsideClickHandler}
      ref={overlay}
    >
      <div className={`${classes["hamburger-container"]}`} ref={hamContainer}>
        <svg
          width="20"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
          className={classes["close-btn"]}
          onClick={closeMenu}
        >
          <path
            fill="#202a35"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          ></path>
        </svg>
        <div className={`${classes.markets} ${classes["link-container"]}`}>
          <h1>Markets</h1>
          <div className={classes["link-items"]}>
            <Link href="/most-active">
              <h4> Most Active</h4>
            </Link>
          </div>
          <div className={classes["link-items"]}>
            <Link href="/most-gainers">
              <h4> Most Gainer</h4>
            </Link>
          </div>
          <div className={classes["link-items"]}>
            <Link href="/most-losers">
              <h4>Most Loser</h4>
            </Link>
          </div>
        </div>
        <div className={classes["link-container"]}>
          <h1>Indexes</h1>
          <div className={classes["link-items"]}>
            <Link href="/SP500">
              <h4> S&P 500</h4>
            </Link>
          </div>
          <div className={classes["link-items"]}>
            <Link href="/DOW">
              <h4> Dow Jones 30</h4>
            </Link>
          </div>
          <div className={classes["link-items"]}>
            <Link href="/NASDAQ">
              <h4> Nasdaq</h4>
            </Link>
          </div>
        </div>
        {/* <div className={classes["link-container2"]}>
          <Link href="/about">
            <h1 className={classes["about-link"]}>About</h1>
          </Link>
        </div> */}
      </div>
    </div>
  );
};
export default HamburgerMenu;
