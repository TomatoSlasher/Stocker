import { useEffect, useRef, useState } from "react";
import classes from "./AdvancedChart.module.css";
import { createChart } from "lightweight-charts";
import { useMediaQuery } from "react-responsive";

const AdvancedChart: React.FC<{ chart: any }> = (props) => {
  const [dateChange, setDateChange] = useState(22 * 3);
  const [chartType, setChartType] = useState("line");
  const chartContainerRef = useRef<any>(null);
  const [activeDrop, setActiveDrop] = useState(false);
  const [currentChartType, setCurrentChartType] = useState("line");
  const [chartWidth, setChartWidth] = useState(1300);
  const [chartHeight, setChartHeight] = useState(550);

  const isFull = useMediaQuery({ query: "(min-width: 1341px)" });
  const isLaptop = useMediaQuery({ query: "(max-width: 1340px)" });
  const isLaptop2 = useMediaQuery({ query: "(max-width: 1240px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1040px)" });
  const isTablet2 = useMediaQuery({ query: "(max-width: 900px)" });
  const isTablet3 = useMediaQuery({ query: "(max-width: 750px)" });
  const isTablet4 = useMediaQuery({ query: "(max-width: 650px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });
  const isMobile2 = useMediaQuery({ query: "(max-width: 450px)" });

  useEffect(() => {
    if (isFull) {
      setChartWidth(1300);
      setChartHeight(550);
    }
    if (isLaptop) {
      setChartWidth(1200);
    }
    if (isLaptop2) {
      setChartWidth(1000);
    }
    if (isTablet) {
      setChartWidth(850);
      setChartHeight(475);
    }
    if (isTablet2) {
      setChartWidth(700);
      setChartHeight(450);
    }
    if (isTablet3) {
      setChartWidth(600);
      setChartHeight(400);
    }
    if (isTablet4) {
      setChartWidth(500);
      setChartHeight(350);
    }
    if (isMobile) {
      setChartWidth(420);
      setChartHeight(350);
    }
    if (isMobile2) {
      setChartWidth(360);
      setChartHeight(350);
    }
  }, [
    isLaptop,
    isFull,
    isLaptop2,
    isTablet,
    isTablet2,
    isTablet3,
    isTablet4,
    isMobile,
    isMobile2,
  ]);
  const dropHandler = () => {
    setActiveDrop(!activeDrop);
  };
  const chartCandleData = props.chart.values.map(
    (val: {
      datetime: string;
      open: number;
      high: number;
      low: number;
      close: number;
    }) => {
      return {
        time: val.datetime,
        open: val.open,
        high: val.high,
        low: val.low,
        close: val.close,
      };
    }
  );
  const chartVolume = props.chart.values.map(
    (val: {
      datetime: string;
      volume: number;
      color: string;
      close: number;
      open: number;
    }) => {
      return {
        time: val.datetime,
        value: val.volume,
        color: `${
          val.close > val.open
            ? "rgba(76, 175, 80, .5)"
            : "rgba(248, 22, 30, 0.5)"
        }`,
      };
    }
  );

  const chartLineData = props.chart.values.map(
    (val: {
      datetime: string;
      close: number;
    }): { time: string; value: number } => {
      return { time: val.datetime, value: val.close };
    }
  );

  chartLineData.reverse();

  chartCandleData.reverse();
  chartVolume.reverse();

  useEffect(() => {
    if (chartContainerRef.current.childNodes[0]) {
      chartContainerRef.current.childNodes[0].remove();
    }
    const chart: any = createChart(chartContainerRef.current, {
      width: chartWidth,
      height: chartHeight,
      layout: {
        fontSize: 12,
        fontFamily: "Montserrat, sans-serif",
      },
    });

    chart.timeScale().setVisibleLogicalRange({
      from: props.chart.values.length - dateChange - 2,
      to: props.chart.values.length - 1,
    });

    var volumeSeries = chart.addHistogramSeries({
      color: "rgba(76, 175, 80, .5)",
      priceLineVisible: false,
      lastValueVisible: false,
      priceScaleId: "",
      scaleMargins: {
        top: 0.9,
        bottom: 0,
      },
    });
    volumeSeries.setData(chartVolume);

    if (chartType == "candle") {
      const candlestickSeries = chart.addCandlestickSeries({
        wickVisible: true,
        upColor: "#00B061",
        downColor: "#FF3031",
      });

      candlestickSeries.setData(chartCandleData);
    }

    if (chartType == "areaGradient") {
      const areaSeries = chart.addAreaSeries();
      areaSeries.setData(chartLineData);
      areaSeries.applyOptions({
        priceLineWidth: 0,

        priceLineStyle: 2,
      });
      const dataLastEl = props.chart.values.length - 1;

      if (
        +props.chart.values[dateChange].close < +props.chart.values[0].close
      ) {
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
    if (chartType == "line") {
      const lineSeries = chart.addLineSeries();

      lineSeries.setData(chartLineData);
      const dataLastEl = props.chart.values.length - 1;

      if (
        +props.chart.values[dateChange].close < +props.chart.values[0].close
      ) {
        lineSeries.applyOptions({
          color: "#34A853",
        });
      } else {
        lineSeries.applyOptions({
          color: "#EA4335",
        });
      }
    }

    if (chartType == "bar") {
      const barSeries = chart.addBarSeries({
        thinBars: false,
        upColor: "#00B061",
        downColor: "#FF3031",
      });

      barSeries.setData(chartCandleData);
    }
    if (chartType == "barThin") {
      const barSeries = chart.addBarSeries({
        upColor: "#00B061",
        downColor: "#FF3031",
      });

      barSeries.setData(chartCandleData);
    }

    if (chartType == "area") {
      const areaSeries = chart.addAreaSeries();
      areaSeries.setData(chartLineData);
      areaSeries.applyOptions({
        priceLineWidth: 0,

        priceLineStyle: 2,
      });
      const dataLastEl = props.chart.values.length - 1;

      if (
        +props.chart.values[dateChange].close < +props.chart.values[0].close
      ) {
        areaSeries.applyOptions({
          lineColor: "#34A853",
          topColor: "rgb(52, 168, 83)",
          bottomColor: "rgb(52, 168, 83)",

          lineWidth: 3,
        });
      } else {
        areaSeries.applyOptions({
          lineColor: "#EA4335",
          topColor: "rgb(234, 67, 53)",
          bottomColor: "rgb(234, 67, 53)",
          lineWidth: 3,
        });
      }
    }
  }, [dateChange, chartType, chartWidth, chartHeight]);

  return (
    <div className={classes["chart-container"]}>
      <div className={classes["chart-dates-container"]}>
        <div className={classes["chart-dates-wrapper"]}>
          <ul className={classes["chart-dates-ul"]}>
            <li
              className={
                dateChange == 8
                  ? classes["active-chart-date"]
                  : classes["chart-dates"]
              }
              onClick={() => setDateChange(8)}
            >
              10D
            </li>
            <li
              className={
                dateChange == 22
                  ? classes["active-chart-date"]
                  : classes["chart-dates"]
              }
              onClick={() => setDateChange(22)}
            >
              1M
            </li>
            <li
              className={
                dateChange == 22 * 3
                  ? classes["active-chart-date"]
                  : classes["chart-dates"]
              }
              onClick={() => setDateChange(22 * 3)}
            >
              3M
            </li>
            <li
              className={
                dateChange == 22 * 6
                  ? classes["active-chart-date"]
                  : classes["chart-dates"]
              }
              onClick={() => setDateChange(22 * 6)}
            >
              6M
            </li>
            <li
              className={
                dateChange == 22 * 12
                  ? classes["active-chart-date"]
                  : classes["chart-dates"]
              }
              onClick={() => setDateChange(22 * 12)}
            >
              1Y
            </li>
            <li
              className={
                dateChange == 22 * 12 * 2
                  ? classes["active-chart-date"]
                  : classes["chart-dates"]
              }
              onClick={() => setDateChange(22 * 12 * 2)}
            >
              2Y
            </li>
            <li
              className={
                dateChange == 22 * 12 * 5 ||
                dateChange == props.chart.values.length - 2
                  ? classes["active-chart-date"]
                  : classes["chart-dates"]
              }
              onClick={() =>
                props.chart.values.length < 22 * 12 * 5
                  ? setDateChange(props.chart.values.length - 2)
                  : setDateChange(22 * 12 * 5)
              }
            >
              5Y
            </li>
            <li
              className={
                dateChange == props.chart.values.length - 1
                  ? classes["active-chart-date"]
                  : classes["chart-dates"]
              }
              onClick={() => setDateChange(props.chart.values.length - 1)}
            >
              MAX
            </li>
          </ul>
          <div className={classes["active-chart-container"]}>
            <div onClick={dropHandler} className={classes["active-chart"]}>
              <div className="chart-name">
                {chartType === "line" && (
                  <div className={classes["chart-type"]}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      data-icon="line-type-line"
                    >
                      <path
                        fill="#202a35"
                        d="M9.048 19.345c-.263 0-.518-.103-.707-.293l-2.985-2.986L2.71 18.73c-.39.39-1.022.393-1.415.003-.392-.39-.393-1.023-.004-1.414l3.354-3.375c.186-.19.44-.295.707-.295h.003c.265 0 .52.105.707.293l2.625 2.625 2.623-6.52c.125-.312.398-.54.726-.607.332-.07.67.034.908.272l4.28 4.265 3.774-9.352c.207-.512.794-.757 1.302-.553.513.207.76.79.554 1.3l-4.34 10.752c-.127.312-.4.538-.73.606-.327.067-.667-.034-.905-.272L12.6 12.195l-2.624 6.523c-.125.312-.4.54-.728.606-.066.014-.134.02-.2.02"
                      ></path>
                    </svg>
                    <p className={classes["chart-type-name"]}>Line</p>
                  </div>
                )}
                {chartType === "area" && (
                  <div className={classes["chart-type"]}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      data-icon="chart-area"
                    >
                      <path
                        fill="#202a35"
                        d="M2.002 11.748c-.017-.376.1-.76.348-1.044.46-.526 1.2-.522 1.655.02l2.857 3.395 4.99-5.842c.218-.256.516-.4.826-.4.31 0 .61.143.828.4l2.526 2.943 3.765-5.513c.085-.176.203-.328.343-.444.463-.396 1.118-.344 1.53.15.22.267.33.61.33.955v12.268C22 19.39 21.473 20 20.824 20H3.176C2.526 20 2 19.39 2 18.636v-6.818c0-.023 0-.047.002-.07z"
                      ></path>
                    </svg>
                    <p className={classes["chart-type-name"]}>Area</p>
                  </div>
                )}
                {chartType === "areaGradient" && (
                  <div className={classes["chart-type"]}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      data-icon="chart-area"
                    >
                      <path
                        fill="#202a35"
                        d="M2.002 11.748c-.017-.376.1-.76.348-1.044.46-.526 1.2-.522 1.655.02l2.857 3.395 4.99-5.842c.218-.256.516-.4.826-.4.31 0 .61.143.828.4l2.526 2.943 3.765-5.513c.085-.176.203-.328.343-.444.463-.396 1.118-.344 1.53.15.22.267.33.61.33.955v12.268C22 19.39 21.473 20 20.824 20H3.176C2.526 20 2 19.39 2 18.636v-6.818c0-.023 0-.047.002-.07z"
                      ></path>
                    </svg>
                    <p className={classes["chart-type-name"]}>Area Gradient</p>
                  </div>
                )}
                {chartType === "candle" && (
                  <div className={classes["chart-type"]}>
                    {" "}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      data-icon="chart-candle"
                    >
                      <path
                        fill="#202a35"
                        d="M18 24c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v22c0 .6-.4 1-1 1zM6 24c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v22c0 .6-.4 1-1 1zM3 7h6c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1zM8 20H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2zM4 9v9h4V9H4zM15 4h6c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zM20 17h-4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2zM16 6v9h4V6h-4z"
                      ></path>
                    </svg>
                    <p className={classes["chart-type-name"]}>Candle</p>
                  </div>
                )}
                {chartType === "bar" && (
                  <div className={classes["chart-type"]}>
                    {" "}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      data-icon="chart-bar"
                    >
                      <path
                        fill="#202a35"
                        d="M7 24c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v22c0 .6-.4 1-1 1zM17 24c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v22c0 .6-.4 1-1 1zM23 7h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zM7 17H1c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zM13 11H7c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zM17 17h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1z"
                      ></path>
                    </svg>
                    <p className={classes["chart-type-name"]}>Bar</p>
                  </div>
                )}
                {chartType === "barThin" && (
                  <div className={classes["chart-type"]}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      data-icon="chart-bar"
                    >
                      <path
                        fill="#202a35"
                        d="M7 24c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v22c0 .6-.4 1-1 1zM17 24c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v22c0 .6-.4 1-1 1zM23 7h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zM7 17H1c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zM13 11H7c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zM17 17h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1z"
                      ></path>
                    </svg>
                    <p className={classes["chart-type-name"]}>Bar Thin</p>
                  </div>
                )}
              </div>
              <svg
                width="25"
                height="25"
                viewBox="0 0 48 48"
                data-icon="caret-down"
              >
                <path
                  fill="#202a35"
                  d="M24.21 33.173l12.727-12.728c.78-.78.78-2.048 0-2.828-.78-.78-2.047-.78-2.828 0l-9.9 9.9-9.9-9.9c-.78-.78-2.047-.78-2.827 0-.78.78-.78 2.047 0 2.828L24.21 33.173z"
                ></path>
              </svg>
            </div>
            {activeDrop && (
              <div className={classes["chart-type-container"]}>
                <div
                  className={classes["chart-type"]}
                  onClick={() => {
                    setActiveDrop(false);
                    setChartType("line");
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    data-icon="line-type-line"
                  >
                    <path
                      fill="#202a35"
                      d="M9.048 19.345c-.263 0-.518-.103-.707-.293l-2.985-2.986L2.71 18.73c-.39.39-1.022.393-1.415.003-.392-.39-.393-1.023-.004-1.414l3.354-3.375c.186-.19.44-.295.707-.295h.003c.265 0 .52.105.707.293l2.625 2.625 2.623-6.52c.125-.312.398-.54.726-.607.332-.07.67.034.908.272l4.28 4.265 3.774-9.352c.207-.512.794-.757 1.302-.553.513.207.76.79.554 1.3l-4.34 10.752c-.127.312-.4.538-.73.606-.327.067-.667-.034-.905-.272L12.6 12.195l-2.624 6.523c-.125.312-.4.54-.728.606-.066.014-.134.02-.2.02"
                    ></path>
                  </svg>
                  <p className={classes["chart-type-name"]}>Line</p>
                </div>

                <div
                  className={classes["chart-type"]}
                  onClick={() => {
                    setActiveDrop(false);
                    setChartType("area");
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    data-icon="chart-area"
                  >
                    <path
                      fill="#202a35"
                      d="M2.002 11.748c-.017-.376.1-.76.348-1.044.46-.526 1.2-.522 1.655.02l2.857 3.395 4.99-5.842c.218-.256.516-.4.826-.4.31 0 .61.143.828.4l2.526 2.943 3.765-5.513c.085-.176.203-.328.343-.444.463-.396 1.118-.344 1.53.15.22.267.33.61.33.955v12.268C22 19.39 21.473 20 20.824 20H3.176C2.526 20 2 19.39 2 18.636v-6.818c0-.023 0-.047.002-.07z"
                    ></path>
                  </svg>
                  <p className={classes["chart-type-name"]}>Area</p>
                </div>
                <div
                  className={classes["chart-type"]}
                  onClick={() => {
                    setActiveDrop(false);
                    setChartType("areaGradient");
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    data-icon="chart-area"
                  >
                    <path
                      fill="#202a35"
                      d="M2.002 11.748c-.017-.376.1-.76.348-1.044.46-.526 1.2-.522 1.655.02l2.857 3.395 4.99-5.842c.218-.256.516-.4.826-.4.31 0 .61.143.828.4l2.526 2.943 3.765-5.513c.085-.176.203-.328.343-.444.463-.396 1.118-.344 1.53.15.22.267.33.61.33.955v12.268C22 19.39 21.473 20 20.824 20H3.176C2.526 20 2 19.39 2 18.636v-6.818c0-.023 0-.047.002-.07z"
                    ></path>
                  </svg>
                  <p className={classes["chart-type-name"]}>Area Gradient</p>
                </div>
                <div
                  className={classes["chart-type"]}
                  onClick={() => {
                    setActiveDrop(false);
                    setChartType("candle");
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    data-icon="chart-candle"
                  >
                    <path
                      fill="#202a35"
                      d="M18 24c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v22c0 .6-.4 1-1 1zM6 24c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v22c0 .6-.4 1-1 1zM3 7h6c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1zM8 20H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2zM4 9v9h4V9H4zM15 4h6c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zM20 17h-4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2zM16 6v9h4V6h-4z"
                    ></path>
                  </svg>
                  <p className={classes["chart-type-name"]}>Candle</p>
                </div>
                <div
                  className={classes["chart-type"]}
                  onClick={() => {
                    setActiveDrop(false);
                    setChartType("bar");
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    data-icon="chart-bar"
                  >
                    <path
                      fill="#202a35"
                      d="M7 24c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v22c0 .6-.4 1-1 1zM17 24c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v22c0 .6-.4 1-1 1zM23 7h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zM7 17H1c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zM13 11H7c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zM17 17h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1z"
                    ></path>
                  </svg>
                  <p className={classes["chart-type-name"]}>Bar</p>
                </div>
                <div
                  className={classes["chart-type"]}
                  onClick={() => {
                    setActiveDrop(false);
                    setChartType("barThin");
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    data-icon="chart-bar"
                  >
                    <path
                      fill="#202a35"
                      d="M7 24c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v22c0 .6-.4 1-1 1zM17 24c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v22c0 .6-.4 1-1 1zM23 7h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zM7 17H1c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zM13 11H7c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zM17 17h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1z"
                    ></path>
                  </svg>
                  <p className={classes["chart-type-name"]}>Bar Thin</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={classes["advanced-chart-container"]}
          ref={chartContainerRef}
        ></div>
      </div>
    </div>
  );
};
export default AdvancedChart;
