import { useState } from "react";
import classes from "./TradeMsg.module.css";
const TradMsg: React.FC<{ errorTitle: string; errorMsg: string }> = (props) => {
  const [hasError, setHasError] = useState(true);
  const overlayHandler = () => {
    setHasError(false);
  };
  return (
    <div className={classes["trade-msg-wrapper"]}>
      {hasError && (
        <div className={classes["trade-msg-container"]}>
          <div className={classes["header-container"]}>
            <svg
              className={classes["error-icon"]}
              width="17"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="exclamation"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
            >
              <path
                fill="white"
                d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"
              ></path>
            </svg>
            <svg
              width="15"
              onClick={overlayHandler}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
              className={classes["close-btn"]}
            >
              <path
                fill="white"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
          </div>
          <h2>{props.errorTitle}</h2>
          <p>{props.errorMsg}</p>
        </div>
      )}
    </div>
  );
};
export default TradMsg;
