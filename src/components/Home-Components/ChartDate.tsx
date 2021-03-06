import React, { useEffect, useState } from "react";
import { createChart } from "lightweight-charts";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import classes from "./ChartDate.module.css";
import classes2 from "./StockHeader.module.css";
import { useRef } from "react";
const ChartDate: React.FC = () => {
  const ticker = useSelector((state: { ticker: { ticker: string } }) => {
    return state.ticker.ticker;
  });
  const isTablet = useMediaQuery({ query: "(max-width: 1150px)" });
  const isTablet2 = useMediaQuery({ query: "(max-width: 1050px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 820px)" });
  const isMobile2 = useMediaQuery({ query: "(max-width: 730px)" });
  const isMobile3 = useMediaQuery({ query: "(max-width: 620px)" });
  const isMobile4 = useMediaQuery({ query: "(max-width: 500px)" });
  const isMobile5 = useMediaQuery({ query: "(max-width: 420px)" });

  const isLaptop = useMediaQuery({ query: "(min-width: 1151px)" });

  const [dateChange, setDateChange] = useState(22);
  const [isLoading, setIsLoading] = useState(false);
  const [graphData, setGraphData]: any = useState();
  const chartRef = useRef<any>(null);
  const [activeDate, setActiveDate] = useState("1M");
  const [chartWidth, setChartWidth] = useState(570);
  const [chartHeight, setChartHeight] = useState(250);

  useEffect(() => {
    if (isLaptop) {
      setChartWidth(570);
    }
    if (isTablet) {
      setChartWidth(510);
    }
    if (isTablet2) {
      setChartWidth(430);
    }
    if (isMobile) {
      setChartWidth(350);
      setChartHeight(175);
    } else {
      setChartHeight(250);
    }

    if (isMobile2) {
      setChartWidth(570);
    }
    if (isMobile3) {
      setChartWidth(460);
    }
    if (isMobile4) {
      setChartWidth(370);
    }
    if (isMobile5) {
      setChartWidth(330);
    }
  }, [
    isTablet,
    isLaptop,
    isTablet2,
    isMobile,
    isMobile2,
    isMobile3,
    isMobile4,
    isMobile5,
  ]);

  useEffect(() => {
    if (chartRef.current.childNodes[1] != null) {
      chartRef.current.childNodes[1].remove();
      setIsLoading(true);
    }
  }, [dateChange, ticker, chartWidth, chartHeight, graphData]);
  useEffect(() => {
    const fetchDataHandler = async () => {
      const fetchData = await fetch(
        `https://api.twelvedata.com/time_series?symbol=${ticker}&interval=1day&outputsize=2000&apikey=a24970c9566c49739e8009cdb3a639f0`
      );

      const data = await fetchData.json();
      setGraphData(data);
      setDateChange(21);
      setActiveDate("1M");
    };
    fetchDataHandler();
  }, [ticker]);

  useEffect(() => {
    if (graphData && chartRef.current) {
      const dataSixMonths = graphData.values.slice(0, dateChange);

      const transformToGraphData = dataSixMonths.map(
        (val: {
          datetime: string;
          close: number;
        }): { time: string; value: number } => {
          return { time: val.datetime, value: val.close };
        }
      );
      transformToGraphData.reverse();

      const chart: any = createChart(chartRef.current, {
        width: chartWidth,
        height: chartHeight,
        layout: {
          fontSize: 12,
          fontFamily: "Montserrat, sans-serif",
        },
      });
      chart.applyOptions({
        handleScroll: false,
        handleScale: false,
        priceScale: {
          autoScale: true,
          borderVisible: false,
        },

        grid: {
          vertLines: {
            visible: false,
          },
          horzLines: {
            visible: false,
          },
        },
      });

      chart.timeScale().fitContent();
      const areaSeries = chart.addAreaSeries();
      areaSeries.setData(transformToGraphData);
      areaSeries.applyOptions({
        priceLineWidth: 0,

        priceLineStyle: 2,
      });
      const dataLastEl = dataSixMonths.length - 1;

      if (+dataSixMonths[0].close > +dataSixMonths[dataLastEl].close) {
        areaSeries.applyOptions({
          lineColor: "#34A853",
          topColor: "rgba(52, 168, 83, 0.4)",
          bottomColor: "rgba(52, 168, 83, 0)",

          lineWidth: 3,
        });
      } else {
        areaSeries.applyOptions({
          lineColor: "#EA4335",
          topColor: "rgba(234, 67, 53, 0.4)",
          bottomColor: "rgba(234, 67, 53, 0)",
          lineWidth: 3,
        });
      }
    }
    setIsLoading(false);
  }, [dateChange, graphData, chartWidth, chartHeight, ticker]);
  return (
    <div className={classes["chart-whole"]}>
      {isLoading ? (
        <div className={classes["spinner-container"]}>
          <div className={classes["lds-ripple"]}>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className={classes["chart-dates-container"]} ref={chartRef}>
          <div
            className={classes["chart-dates-wrapper"]}
            id="chart-dates-container"
          >
            <ul className={classes["chart-dates-ul"]}>
              <li
                className={
                  activeDate == "10D"
                    ? classes["active-date"]
                    : classes["chart-dates"]
                }
                onClick={() => {
                  setActiveDate("10D");
                  setDateChange(8);
                }}
              >
                10D
              </li>
              <li
                className={
                  activeDate == "1M"
                    ? classes["active-date"]
                    : classes["chart-dates"]
                }
                onClick={() => {
                  setActiveDate("1M");
                  setDateChange(22);
                }}
              >
                1M
              </li>
              <li
                className={
                  activeDate == "3M"
                    ? classes["active-date"]
                    : classes["chart-dates"]
                }
                onClick={() => {
                  setActiveDate("3M");
                  setDateChange(22 * 3);
                }}
              >
                3M
              </li>
              <li
                className={
                  activeDate == "6M"
                    ? classes["active-date"]
                    : classes["chart-dates"]
                }
                onClick={() => {
                  setActiveDate("6M");
                  setDateChange(22 * 6);
                }}
              >
                6M
              </li>
              <li
                className={
                  activeDate == "1Y"
                    ? classes["active-date"]
                    : classes["chart-dates"]
                }
                onClick={() => {
                  setActiveDate("1Y");
                  setDateChange(22 * 12);
                }}
              >
                1Y
              </li>
              <li
                className={
                  activeDate == "4Y"
                    ? classes["active-date"]
                    : classes["chart-dates"]
                }
                onClick={() => {
                  setActiveDate("4Y");
                  setDateChange(22 * 12 * 4);
                }}
              >
                4Y
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default ChartDate;
