import React, { useEffect, useState } from "react";
import OverviewChart from "./Quote-Sections/Quote-info/OverviewChart";
import OverviewInfo from "./Quote-Sections/Quote-info/OverviewInfo";
import OverviewHeader from "./Quote-Sections/Quote-info/OverviewHeader";

const StockOverview: React.FC<any> = (props) => {
  return (
    <div className="overview-container">
      <div className="overview-content-container">
        <OverviewHeader data={props.symbol} />
        <OverviewInfo data={props.symbol} />
      </div>
      <div className="overview-chart-container">
        <OverviewChart />
      </div>
    </div>
  );
};

export default StockOverview;
