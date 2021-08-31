import React, { Fragment, useEffect, useState } from "react";
import OverviewDescription from "./Quote-Info/OverviewDescription";
import OverviewHeader from "./Quote-Info/OverviewHeader";
import classes from "./StockOverview.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";

const OverviewChart = dynamic(() => import("./Quote-Info/OverviewChart"), {
  ssr: false,
});
const TradeStock = dynamic(() => import("./Quote-Info/TradeStock"), {
  ssr: false,
});
const StockOverview: React.FC<any> = (props) => {
  return (
    <Fragment>
      <div className={classes["overview-container"]}>
        <div className="overview-content-container">
          <OverviewHeader data={props.symbol} image={props.image} />
          <TradeStock
            data={props.image}
            historicalData={props.historicalData}
          />
          <OverviewDescription description={props.symbol.Description} />
        </div>
        <div className="overview-chart-container">
          <OverviewChart data={props.historicalData} />
        </div>
      </div>
      <div className="quote-section">
        <ul className={classes["quote-section-ul"]}>
          <Link href={`/symbol/${props.symbol.Symbol}/overview`}>
            <li>Summary</li>
          </Link>
          <Link href={`/symbol/${props.symbol.Symbol}/chart`}>
            <li>Chart</li>
          </Link>
          <Link href={`/symbol/${props.symbol.Symbol}/financials`}>
            <li>Financials</li>
          </Link>
          <Link href={`/symbol/${props.symbol.Symbol}/growth`}>
            <li>Financial Growth</li>
          </Link>
        </ul>
      </div>
    </Fragment>
  );
};

export default StockOverview;
