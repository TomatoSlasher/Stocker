import { Fragment, useState } from "react";
import classes from "./TradeStock.module.css";
import dynamic from "next/dynamic";

const OverviewChart = dynamic(() => import("./OverviewChart"), {
  ssr: false,
});
const TradeStock: React.FC<{ data: any; historicalData: any }> = (props) => {
  console.log(props);
  const [overlay, setOverlay] = useState(false);
  const [orderType, setOrderType]: any = useState(true);
  const overlayHandler = () => {
    setOverlay(!overlay);
  };
  return (
    <Fragment>
      <div>
        <button onClick={overlayHandler}>Trade</button>
      </div>
      {overlay && (
        <div className={classes["trade-overlay"]}>
          <div className={classes["trade-wrapper"]}>
            <button onClick={overlayHandler} className="close">
              close
            </button>
            <div className={classes["trade-container"]}>
              <OverviewChart data={props.historicalData} />
              <div className={classes["stock-info"]}>
                <div className="stock-text-container">
                  <p className={classes["stock-name"]}>
                    {props.data[0].companyName}
                  </p>
                  <div className={classes["ticker-price"]}>
                    <h2 className={classes["company-symbol"]}>
                      {props.data[0].symbol}
                    </h2>
                    <h2 className={classes["company-price"]}>
                      ${props.data[0].price}
                    </h2>
                  </div>
                </div>

                <img
                  className={classes["company-logo"]}
                  src={props.data[0].image}
                  alt="company logo"
                />
              </div>
              <div className={classes["trade-values"]}>
                <p className="trade-values-section">Quantity</p>
                <input
                  placeholder="Shares Amount"
                  min="1"
                  type="number"
                  className={classes["input-number"]}
                />
              </div>
              <div className={classes["trade-values"]}>
                <p className="trade-values-section">Order Type</p>
                <div className="buy-sell">
                  <button
                    onClick={() => setOrderType(true)}
                    className={orderType ? classes["buy-order"] : ""}
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => setOrderType(false)}
                    className={!orderType ? classes["sell-order"] : ""}
                  >
                    Sell
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default TradeStock;
