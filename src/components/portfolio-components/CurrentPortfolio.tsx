import { useState, useEffect } from "react";
import classes from "./CurrentPortfolio.module.css";
import PositionItem from "./PositionItem";

const CurrentPortfolio = () => {
  interface ordersType {
    amount: number;
    totalValue: number;
    symbol: string;
    image: string;
  }
  //resest mkt value
  const startingMktValue: any = 0;
  localStorage.setItem("marketValue", startingMktValue);

  const portfolio: [] = JSON.parse(
    localStorage.getItem("allPositions") || "[]"
  );

  const [hasPortfolio, setHasPortfolio] = useState(true);

  return (
    <div className="current-portfolio-container">
      <h1>Positions</h1>
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
            {portfolio.map((val: ordersType, i) => {
              return <PositionItem key={i} data={val} />;
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
