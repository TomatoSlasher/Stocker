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
  const overlayHandler = () => {
    setOverlay(!overlay);
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

    let currentPostitions: ordersType[] = JSON.parse(
      localStorage.getItem("allPositions") || "[]"
    );
    if (currentPostitions == null) currentPostitions = [];

    currentPostitions.push(orders);
    localStorage.setItem("allPositions", JSON.stringify(currentPostitions));
  };

  const completedOrders = JSON.parse(
    localStorage.getItem("orderHistory") || "[]"
  );
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
                  ref={orderQuantity}
                  defaultValue="1"
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
              {orderType ? (
                <div className="buy-button">
                  <button onClick={() => orderHandler("buy")}>buy</button>
                </div>
              ) : (
                <div
                  className="sell-button"
                  onClick={() => orderHandler("sell")}
                >
                  <button>sell</button>
                </div>
              )}
              <div>
                <p className="owned-shares">
                  Owned {props.data[0].symbol} Shares:{" "}
                  {completedOrders
                    .filter(
                      (val: ordersType) => val.symbol == props.data[0].symbol
                    )
                    .reduce((acc: any, cur: any) => {
                      return acc + cur.amount;
                    }, 0)}
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
