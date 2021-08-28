import { Fragment, useState, useRef } from "react";
import classes from "./TradeStock.module.css";
import dynamic from "next/dynamic";
interface ordersType {
  orderAmount: number;
  orderTotal: number;
  stockPrice: number;
  symbol: String;
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
  const buyOrderHandler = () => {
    const orderAmount: any = +orderQuantity.current!.value;
    const stockPrice = props.data[0].price;
    const orderTotal: any = orderAmount * stockPrice;
    const orderObject = {
      symbol: props.data[0].symbol,
      orderAmount,
      stockPrice,
      orderTotal: +orderTotal.toFixed(2),
    };

    let fullfiledOrders: ordersType[] = JSON.parse(
      localStorage.getItem("orderHistory") || "[]"
    );

    if (fullfiledOrders == null) fullfiledOrders = [];

    localStorage.setItem("order", JSON.stringify(orderObject));
    fullfiledOrders.push(orderObject);
    localStorage.setItem("orderHistory", JSON.stringify(fullfiledOrders));
  };
  const completedOrders = JSON.parse(
    localStorage.getItem("orderHistory") || "[]"
  );

  const sortOrders = () => {
    const orderHistory = JSON.parse(
      localStorage.getItem("orderHistory") || "[]"
    );
    const historySort = orderHistory.reduce((res: any, curr: any) => {
      if (res[curr.symbol]) res[curr.symbol].push(curr);
      else Object.assign(res, { [curr.symbol]: [curr] });

      return res;
    }, {});
    const transformedHistory = Object.keys(historySort).map((key) => {
      return historySort[key];
    });

    const allOrders = transformedHistory.map((value, i) => {
      let amount;
      let avgPrice: any;
      let totalValue;
      value.reduce((acc: number, cur: ordersType) => {
        return (amount = acc + cur.orderAmount);
      }, 0);
      value.reduce((acc: number, cur: ordersType) => {
        return (avgPrice = acc + cur.stockPrice);
      }, 0);
      //   value.reduce((acc: number, cur: ordersType) => {
      //     return (value = acc + cur.orderTotal);
      //   }, 0);
      const fixedAvgPrice = avgPrice / transformedHistory[i].length;
      let orderData: any = {
        symbol: value[0].symbol,
        amount,
        avgPrice: +fixedAvgPrice.toFixed(2),
        // totalValue,
      };
      return orderData;
    });
    console.log(allOrders);
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
                  <button onClick={buyOrderHandler}>buy</button>
                </div>
              ) : (
                <div className="sell-button" onClick={sortOrders}>
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
                      return acc + cur.orderAmount;
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
