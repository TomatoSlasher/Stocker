import React, { Fragment, useEffect, useState } from "react";
import OverviewDescription from "./Quote-Info/OverviewDescription";
import OverviewHeader from "./Quote-Info/OverviewHeader";
import classes from "./StockOverview.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";

const OverviewChart = dynamic(() => import("./Quote-Info/OverviewChart"), {
  ssr: false,
});

const StockOverview: React.FC<any> = (props) => {
  return (
    <Fragment>
      <div className={classes["overview-container"]}>
        <div className="overview-content-container">
          <OverviewHeader data={props.symbol} image={props.image} />
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

          <Link href={`/symbol/${props.symbol.Symbol}/financials`}>
            <li>Financials</li>
          </Link>

          <li>Insider Trading</li>
          <li>ShareHolders</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default StockOverview;
