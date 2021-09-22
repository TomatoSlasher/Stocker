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
    <div className={classes["portfolio-history-container"]}>
      <div className={classes["portfolio-history"]}>
        <h1>Trading History</h1>
        <div className={classes["portfolio-items-container"]}>
          {portfolioHistory.length > 0 ? (
            <div>
              <div className={classes["portfolio-item-header"]}>
                <span className={classes["logo"]}></span>
                <div className={classes["portfolio-item-text"]}>
                  <p
                    className={`${classes.symbol} ${classes["head-text"]} ${classes["symbol-date"]}`}
                  >
                    Symbol/Date
                  </p>
                  <p
                    className={`${classes.qty} ${classes["head-text"]} ${classes["his-amount"]}`}
                  >
                    Quantity
                  </p>
                  <p
                    className={`${classes.type} ${classes["head-text"]} ${classes["his-amount"]}`}
                  >
                    Order Type
                  </p>
                  <p
                    className={`${classes["head-text"]} ${classes["his-amount2"]}`}
                  >
                    Price
                  </p>
                  <p
                    className={`${classes.cost} ${classes["head-text"]} ${classes["his-amount"]}`}
                  >
                    Total Cost
                  </p>
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
                          <h4>{val.symbol}</h4>
                          <p className={classes["portfolio-item-text-date"]}>
                            {val.date}
                          </p>
                        </div>

                        <p
                          className={`${classes.amount} ${classes["his-amount2"]}`}
                        >
                          {val.amount}
                        </p>

                        <p
                          className={
                            val.orderType === "buy"
                              ? classes["buy-order"]
                              : classes["sell-order"]
                          }
                        >
                          {val.orderType}
                        </p>
                        <p className={classes["his-amount2"]}>
                          ${val.stockPrice.toFixed(1)}
                        </p>
                        <p className={classes["his-amount"]}>
                          ${val.orderTotal.toFixed(1)}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className={classes["empty-portfolio"]}>
              <h2>You have no trading history</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default PorfolioHistory;
