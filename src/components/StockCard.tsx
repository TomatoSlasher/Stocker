import React from "react";
import classes from "./StockCard.module.css";

const ChartCard: React.FC = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
export default ChartCard;
