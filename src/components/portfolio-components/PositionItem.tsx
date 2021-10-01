import { useEffect, useState } from "react";
import classes from "./CurrentPortfolio.module.css";
import Link from "next/link";

interface ordersType {
  amount: number;
  totalValue: number;
  symbol: string;
  image: string;
}
const PositionItem: React.FC<any> = (props: { data: ordersType }) => {
  const [currentPrice, setCurrentPrice]: any = useState();

  useEffect(() => {
    fetch(
      `https://financialmodelingprep.com/api/v3/quote-short/${props.data.symbol}?apikey=535bef082516f9e1a33c4e9e493b71ca`
    )
      .then((result) => result.json())
      .then((data) => {
        if (data[0]) {
          setCurrentPrice(data[0].price);
        }
      });
  }, []);

  const positionTotalValue: any = currentPrice * props.data.amount;
  const posChange = positionTotalValue.toFixed(2) - props.data.totalValue;
  const avgPrice = props.data.totalValue / props.data.amount;
  const positionDiff =
    (100 * (positionTotalValue.toFixed(2) - props.data.totalValue)) /
    props.data.totalValue;

  let marketValue: any = localStorage.getItem("marketValue");
  if (marketValue == null) {
    const startingMktValue: any = 0;
    localStorage.setItem("marketValue", startingMktValue);
  }
  if (positionTotalValue) {
    marketValue = +marketValue + positionTotalValue;
    localStorage.setItem("marketValue", marketValue);
  }
  return (
    <li key={props.data.symbol} className={classes["portfolio-item"]}>
      <img className={classes["pos-img"]} src={props.data.image} alt="" />
      <div className={classes["portfolio-item-text"]}>
        <Link href={`/symbol/${props.data.symbol}/overview`}>
          <p className={classes["positions-symbol"]}>{props.data.symbol}</p>
        </Link>

        <p className={classes["pos-qty"]}>{props.data.amount}</p>
        <p className={`${classes["pos-amount"]}  ${classes["positions-avg"]}`}>
          ${avgPrice.toFixed(2)}
        </p>
        <div
          className={`${classes["pos-amount"]}  ${classes["positions-amount"]}`}
        >
          <p>${positionTotalValue.toFixed(2)}</p>
          <p
            className={`${
              positionDiff >= 0
                ? classes["position-up"]
                : classes["position-down"]
            }`}
          >
            <span>
              {positionDiff >= 0 ? "+" : ""}

              {posChange.toFixed(1)}
            </span>
            <span className={classes["change-perc"]}>
              {positionDiff >= 0 ? "+" : ""}
              {positionDiff.toFixed(1) + "%"}
            </span>
          </p>
        </div>
      </div>
    </li>
  );
};
export default PositionItem;
