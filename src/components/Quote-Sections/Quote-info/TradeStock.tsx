import { Fragment, useState, useRef } from "react";
import classes from "./TradeStock.module.css";
import dynamic from "next/dynamic";
interface ordersType {
  amount: number;
  orderTotal: number;
  stockPrice: number;
  symbol: String;
  orderType: string;
  date: string;
  image: string;
}
const OverviewChart = dynamic(() => import("./OverviewChart"), {
  ssr: false,
});
const TradeStock: React.FC<{ data: any; historicalData: any }> = (props) => {
  const [overlay, setOverlay] = useState(false);
  const [orderType, setOrderType]: any = useState(true);
  const orderQuantity = useRef<HTMLInputElement>(null);
  const [currentAmount, setCurrentAmount] = useState(1);
  const overlayHandler = () => {
    setOverlay(!overlay);
  };
  const currentAmountHandler = () => {
    setCurrentAmount(+orderQuantity.current!.value);
  };
  const orderHandler = (type: string) => {
    const allPositions = JSON.parse(
      localStorage.getItem("allPositions") || "[]"
    );
    const includedInAllPosistions = allPositions.some(
      (val: ordersType) => val.symbol == props.data[0].symbol
    );
    if (type == "sell" && !includedInAllPosistions) {
      return;
    }

    const amount: any = +orderQuantity.current!.value;
    const stockPrice = props.data[0].price;
    const orderTotal: any = amount * stockPrice;
    let today = new Date().toString().slice(0, 21);
    const positionAmount = allPositions
      .filter((val: ordersType) => val.symbol == props.data[0].symbol)
      .some((val: ordersType) => val.amount >= amount);

    if (type == "sell" && !positionAmount) return;

    const orderObject = {
      symbol: props.data[0].symbol,
      amount,
      stockPrice,
      orderTotal: +orderTotal.toFixed(2),
      orderType: type,
      date: today,
      image: props.data[0].image,
    };

    let fullfiledOrders: ordersType[] = JSON.parse(
      localStorage.getItem("orderHistory") || "[]"
    );
    if (fullfiledOrders == null) fullfiledOrders = [];

    localStorage.setItem("order", JSON.stringify(orderObject));
    fullfiledOrders.push(orderObject);
    localStorage.setItem("orderHistory", JSON.stringify(fullfiledOrders));

    if (type == "sell" && positionAmount) {
      allPositions.forEach((val: any, i: number) => {
        if (val.symbol == props.data[0].symbol) {
          val.amount = val.amount - amount;
          const newTotalValue = val.totalValue - stockPrice * amount;
          val.totalValue = +newTotalValue.toFixed(2);
          if (val.amount == 0) {
            allPositions.splice(i, 1);
          }
        }
      }, allPositions);

      localStorage.setItem("allPositions", JSON.stringify(allPositions));
      let cashBalance: any = localStorage.getItem("cashBalance");
      cashBalance = +cashBalance + orderObject.orderTotal;
      localStorage.setItem("cashBalance", cashBalance);
      return;
    }

    const positionSymbol = allPositions
      .filter((val: ordersType) => val.symbol == props.data[0].symbol)
      .some((val: ordersType) => val.symbol >= props.data[0].symbol);

    if (type == "buy" && positionSymbol && allPositions.length > 0) {
      allPositions.forEach((val: any) => {
        if (val.symbol == props.data[0].symbol) {
          val.amount = val.amount + amount;
          const newTotalValue = val.totalValue + stockPrice * amount;
          val.totalValue = +newTotalValue.toFixed(2);
        }
      }, allPositions);
      localStorage.setItem("allPositions", JSON.stringify(allPositions));
      // update cash balance
      let cashBalance: any = localStorage.getItem("cashBalance");
      cashBalance = +cashBalance - orderObject.orderTotal;
      localStorage.setItem("cashBalance", cashBalance);

      return;
    }

    let latestOrders: ordersType[] = JSON.parse(
      localStorage.getItem("order") || "[]"
    );

    newOrders(latestOrders);
  };

  const newOrders = (orders: any) => {
    orders = {
      symbol: orders.symbol,
      amount: orders.amount,
      totalValue: orders.orderTotal,
      image: orders.image,
    };
    let cashBalance: any = localStorage.getItem("cashBalance");
    cashBalance = +cashBalance - orders.totalValue;
    localStorage.setItem("cashBalance", cashBalance);
    let currentPostitions: ordersType[] = JSON.parse(
      localStorage.getItem("allPositions") || "[]"
    );
    if (currentPostitions == null) currentPostitions = [];

    currentPostitions.push(orders);
    localStorage.setItem("allPositions", JSON.stringify(currentPostitions));
  };

  const completedOrders = JSON.parse(
    localStorage.getItem("allPositions") || "[]"
  );
  const priceAmount = props.data[0].price * currentAmount;
  return (
    <Fragment>
      <div>
        <button className={classes["trade-btn"]} onClick={overlayHandler}>
          Trade
        </button>
      </div>
      {overlay && (
        <div className={classes["trade-overlay"]}>
          <div className={classes["trade-wrapper"]}>
            <div className={classes["trade-container"]}>
              <div className={classes["trade-header-container"]}>
                <h1>Paper Trading</h1>

                <svg
                  width="20"
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
                    fill="#202a35"
                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                  ></path>
                </svg>
              </div>

              <OverviewChart data={props.historicalData} height={180} />
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
                <h3 className="trade-values-section">Quantity</h3>
                <input
                  placeholder="Shares Amount"
                  min="1"
                  type="number"
                  className={classes["input-number"]}
                  ref={orderQuantity}
                  defaultValue="1"
                  onChange={currentAmountHandler}
                />
              </div>
              <div className={classes["trade-values"]}>
                <h3 className="trade-values-section">Order Type</h3>
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
              <div className={classes["trade-values"]}>
                <h3 className="trade-values-section">Estimated Amount </h3>
                <div className="buy-sell">${priceAmount.toFixed(2)}</div>
              </div>
              {orderType ? (
                <div className={classes["buy-button"]}>
                  <button onClick={() => orderHandler("buy")}>Buy</button>
                </div>
              ) : (
                <div
                  className={classes["sell-button"]}
                  onClick={() => orderHandler("sell")}
                >
                  <button>Sell</button>
                </div>
              )}
              <div>
                <p className="owned-shares">
                  Owned {props.data[0].symbol} Shares:{" "}
                  {completedOrders
                    ? completedOrders.filter((val: ordersType) => {
                        if (val.symbol === props.data[0].symbol) {
                          return val.amount;
                        }
                      })
                    : 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default TradeStock;
