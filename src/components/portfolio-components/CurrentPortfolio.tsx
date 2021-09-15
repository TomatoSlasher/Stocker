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
    <div className={classes["current-portfolio-wrapper"]}>
      <div className={classes["current-portfolio-container"]}>
        <h1>Positions ({portfolio.length})</h1>
        <div className={classes["portfolio-items-container"]}>
          {hasPortfolio ? (
            <div className={classes["portfolio-item-header-container"]}>
              <div className={classes["portfolio-item-header"]}>
                <p className={classes["logo"]}></p>
                <div className={classes["portfolio-item-text"]}>
                  <p className={classes["head-text"]}>Symbol</p>
                  <p className={classes["head-text"]}>Quantity</p>
                  <p className={classes["avg-price"]}>Avg Price</p>
                  <p className={classes["mkt-value"]}>Mkt Value</p>
                </div>
              </div>
              <ul className={classes["portfolio-items-list"]}>
                {portfolio.map((val: ordersType, i) => {
                  return <PositionItem key={i} data={val} />;
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
    </div>
  );
};
export default CurrentPortfolio;
