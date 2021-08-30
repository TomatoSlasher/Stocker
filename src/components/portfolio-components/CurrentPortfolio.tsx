import { useState } from "react";
import classes from "./CurrentPortfolio.module.css";

const CurrentPortfolio = () => {
  interface ordersType {
    amount: number;
    totalValue: number;
    symbol: String;
    image: string;
  }

  const portfolio: [] = JSON.parse(
    localStorage.getItem("allPositions") || "[]"
  );
  console.log(portfolio);

  const [hasPortfolio, setHasPortfolio] = useState(true);

  return (
    <div className="current-portfolio-container">
      <h1>Portfolio</h1>
      <div className={classes["portfolio-items-container"]}>
        {hasPortfolio ? (
          <ul className={classes["portfolio-items-list"]}>
            <li className={classes["portfolio-item-header"]}>
              <p className="logo">Logo</p>
              <div className={classes["portfolio-item-text"]}>
                <p>Symbol</p>
                <p>Amount</p>
                <p>Total Value</p>
              </div>
            </li>
            {portfolio.map((val: ordersType) => {
              return (
                <li className={classes["portfolio-item"]}>
                  <img src={val.image} alt="" />
                  <div className={classes["portfolio-item-text"]}>
                    <p>{val.symbol}</p>
                    <p>{val.amount}</p>
                    <p>{val.totalValue}</p>
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
export default CurrentPortfolio;
