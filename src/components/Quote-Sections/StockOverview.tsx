import React, { Fragment, useEffect, useState } from "react";
import OverviewDescription from "./Quote-Info/OverviewDescription";
import OverviewHeader from "./Quote-Info/OverviewHeader";
import classes from "./StockOverview.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
const OverviewChart = dynamic(() => import("./Quote-Info/OverviewChart"), {
  ssr: false,
});
const TradeStock = dynamic(() => import("./Quote-Info/TradeStock"), {
  ssr: false,
});
const StockOverview: React.FC<any> = (props) => {
  const router = useRouter();

  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    if (router.pathname === "/symbol/[symbol]/overview") {
      setActiveLink("overview");
    }
    if (router.pathname === "/symbol/[symbol]/chart") {
      setActiveLink("chart");
    }
    if (router.pathname === "/symbol/[symbol]/financials") {
      setActiveLink("financials");
    }
    if (router.pathname === "/symbol/[symbol]/growth") {
      setActiveLink("growth");
    }
  }, [router]);

  return (
    <Fragment>
      <div className={classes["overview-container"]}>
        <div className={classes["overview-content-container"]}>
          <div className={classes["overview-header-container"]}>
            <OverviewHeader data={props.symbol} image={props.image} />
            <TradeStock
              data={props.image}
              historicalData={props.historicalData}
            />
          </div>

          <OverviewDescription description={props.symbol.Description} />
        </div>
        <div className="overview-chart-container">
          <OverviewChart data={props.historicalData} height={310} />
        </div>
      </div>
      <div className={classes["quote-section"]}>
        <ul className={classes["quote-section-ul"]}>
          <Link href={`/symbol/${props.symbol.Symbol}/overview`}>
            <li
              className={
                activeLink === "overview"
                  ? classes["active-path"]
                  : classes["links-header"]
              }
            >
              Summary
            </li>
          </Link>
          <Link href={`/symbol/${props.symbol.Symbol}/chart`}>
            <li
              className={
                activeLink === "chart"
                  ? classes["active-path"]
                  : classes["links-header"]
              }
            >
              Chart
            </li>
          </Link>
          <Link href={`/symbol/${props.symbol.Symbol}/financials`}>
            <li
              className={
                activeLink === "financials"
                  ? classes["active-path"]
                  : classes["links-header"]
              }
            >
              Financials
            </li>
          </Link>
          <Link href={`/symbol/${props.symbol.Symbol}/growth`}>
            <li
              className={
                activeLink === "growth"
                  ? classes["active-path"]
                  : classes["links-header"]
              }
            >
              Financial Growth
            </li>
          </Link>
        </ul>
      </div>
    </Fragment>
  );
};

export default StockOverview;
