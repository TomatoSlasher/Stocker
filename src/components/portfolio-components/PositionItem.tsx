import { useEffect, useState } from "react";
import classes from "./CurrentPortfolio.module.css";
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
      `https://financialmodelingprep.com/api/v3/profile/${props.data.symbol}?apikey=66e243b7036752eb5c9078cdacfe8625`
    )
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        if (data[0]) {
          setCurrentPrice(data[0].price);
        }
      });
  }, []);

  const positionTotalValue = currentPrice * props.data.amount;
  return (
    <li key={props.data.symbol} className={classes["portfolio-item"]}>
      <img src={props.data.image} alt="" />
      <div className={classes["portfolio-item-text"]}>
        <p>{props.data.symbol}</p>
        <p>{props.data.amount}</p>
        <p>{positionTotalValue.toFixed(2)}</p>
      </div>
    </li>
  );
};
export default PositionItem;
