import { useState } from "react";
import classes from "./PortfolioHistory.module.css";
const PorfolioHistory = () => {
  interface ordersType {
    amount: number;
    orderTotal: number;
    stockPrice: number;
    symbol: String;
    orderType: string;
    date: string;
    image: string;
  }

  const portfolioHistory: [] = JSON.parse(
    localStorage.getItem("orderHistory") || "[]"
  );
  const [hasPortfolio, setHasPortfolio] = useState(true);
  return (
    <div className={classes["portfolio-history"]}>
      <h1>Trading History</h1>
      <div className={classes["portfolio-items-container"]}>
        {hasPortfolio ? (
          <div>
            <div className={classes["portfolio-item-header"]}>
              <span className={classes["logo"]}></span>
              <div className={classes["portfolio-item-text"]}>
                <p className={classes["symbol-date"]}>Symbol/Date</p>
                <p className={classes["his-amount"]}>Quantity</p>
                <p className={classes["his-amount"]}>Order Type</p>
                <p className={classes["his-amount2"]}>Price</p>
                <p className={classes["his-amount"]}>Total Cost</p>
              </div>
            </div>
            <ul className={classes["portfolio-items-list"]}>
              {portfolioHistory.map((val: ordersType, i) => {
                return (
                  <li key={i} className={classes["portfolio-item"]}>
                    <img
                      className={classes["logo-img"]}
                      src={val.image}
                      alt=""
                    />
                    <div className={classes["portfolio-item-text"]}>
                      <div className={classes["symbol-date"]}>
                        <p>{val.symbol}</p>
                        <p className={classes["portfolio-item-text-date"]}>
                          {val.date}
                        </p>
                      </div>

                      <p className={classes["his-amount"]}>{val.amount}</p>

                      <p
                        className={
                          val.orderType === "buy"
                            ? classes["buy-order"]
                            : classes["sell-order"]
                        }
                      >
                        {val.orderType}
                      </p>
                      <p className={classes["his-amount2"]}>{val.stockPrice}</p>
                      <p className={classes["his-amount"]}>{val.orderTotal}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className={classes["empty-portfolio"]}>
            <h1>You have no open positions</h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default PorfolioHistory;
