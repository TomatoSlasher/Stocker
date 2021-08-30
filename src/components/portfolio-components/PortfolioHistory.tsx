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
    <div className={"portfolio-history"}>
      <h1>Portfolio History</h1>
      <div className={classes["portfolio-items-container"]}>
        {hasPortfolio ? (
          <ul className={classes["portfolio-items-list"]}>
            <li className={classes["portfolio-item-header"]}>
              <p className="logo">Logo</p>
              <div className={classes["portfolio-item-text"]}>
                <p className={classes["header-date"]}>Symbol/Date</p>
                <p>Amount</p>
                <p>Order Type</p>
                <p>Price</p>
                <p>Order Value</p>
              </div>
            </li>
            {portfolioHistory.map((val: ordersType) => {
              return (
                <li className={classes["portfolio-item"]}>
                  <img src={val.image} alt="" />
                  <div className={classes["portfolio-item-text"]}>
                    <div className="symbol-date">
                      <p>{val.symbol}</p>
                      <p className={classes["portfolio-item-text-date"]}>
                        {val.date}
                      </p>
                    </div>

                    <p>{val.amount}</p>

                    <p>{val.orderType}</p>
                    <p>{val.stockPrice}</p>
                    <p>{val.orderTotal}</p>
                  </div>
                </li>
              );
            })}
          </ul>
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
