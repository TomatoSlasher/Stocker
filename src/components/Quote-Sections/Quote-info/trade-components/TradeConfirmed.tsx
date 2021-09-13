import classes from "./TradeConfirmed.module.css";
const TradeConfirmed: React.FC<{
  data: any;
}> = (props: any) => {
  return (
    <div
      className={
        props.data.type == "buy"
          ? classes["order-buy-container"]
          : classes["order-sell-container"]
      }
    >
      <div className={classes["order-confirmed-container"]}>
        <div className={classes["icon-container"]}>
          <svg
            width="80"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="check"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={
              props.data.type == "buy"
                ? classes["order-icon-buy"]
                : classes["order-icon-sell"]
            }
          >
            <path
              fill="white"
              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
            ></path>
          </svg>
        </div>

        <h1>Order Filled</h1>
        <h3>
          {props.data.type == "buy" ? "Bought" : "Sold"} {props.data.amount}{" "}
          {props.data.symbol} {props.data.amount > 1 ? "Shares" : "Share"} at $
          {props.data.price.toFixed(2)}
          /share
        </h3>
        <div className={classes["order-statement"]}></div>
        <div className={classes["order-details"]}>
          <h4 className={classes["order-details-title"]}>Order Details:</h4>
          <div className={classes["order-table"]}>
            <div className={classes["order-row"]}>
              <p>Price</p>
              <p>${props.data.price.toFixed(2)}</p>
            </div>
            <div className={classes["order-row"]}>
              <p>Quantity</p>
              <p>{props.data.amount}</p>
            </div>
            <div className={classes["order-row"]}>
              <p>Order Type</p>
              <p>{props.data.type}</p>
            </div>
            <div className={classes["order-row"]}>
              <p>Order Total</p>
              <p>${props.data.total.toFixed(2)}</p>
            </div>
            <div className={classes["order-row"]}>
              <p>Date</p>
              <p>{props.data.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TradeConfirmed;
