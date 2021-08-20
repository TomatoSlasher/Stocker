import React, { useEffect, useState } from "react";
// import OverviewChart from "./Quote-info/OverviewChart";
import OverviewDescription from "./Quote-info/OverviewDescription";
import OverviewHeader from "./Quote-info/OverviewHeader";
import classes from "./StockOverview.module.css";
import dynamic from "next/dynamic";

const OverviewChart = dynamic(() => import("./Quote-info/OverviewChart"), {
  ssr: false,
});

const StockOverview: React.FC<any> = (props) => {
  return (
    <div className={classes["overview-container"]}>
      <div className="overview-content-container">
        <OverviewHeader data={props.symbol} />
        <OverviewDescription description={props.symbol[0].description} />
      </div>
      <div className="overview-chart-container">
        <OverviewChart data={props.historicalData} />
      </div>
    </div>
  );
};

export default StockOverview;
