import classes from "./HamburgerMenu.module.css";
import { hamburgerActions } from "../../../store/index";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const HamburgerMenu = () => {
  const overlay = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const closeMenu = () => {
    dispatch(hamburgerActions.getMenu(false));
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
      <div className={classes["hamburger-container"]}>
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
        <div className={classes["link-container"]}>
          <h2>Markets</h2>
          <div className={classes["link-items"]}>Most Active</div>
          <div className={classes["link-items"]}>Most Gainer</div>
          <div className={classes["link-items"]}>Most Loser</div>
        </div>
        <div className={classes["link-container"]}>
          <h2>Indexes</h2>
          <div className={classes["link-items"]}>S&P 500</div>
          <div className={classes["link-items"]}>Dow Jones 30</div>
          <div className={classes["link-items"]}>Nasdaq</div>
        </div>
        <div className={classes["link-container"]}>
          <h2>About</h2>
        </div>
      </div>
    </div>
  );
};
export default HamburgerMenu;
