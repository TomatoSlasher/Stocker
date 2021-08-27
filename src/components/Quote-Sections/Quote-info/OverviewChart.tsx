import { useState, useRef, useEffect } from "react";
import { createChart } from "lightweight-charts";
import classes from "./OverviewChart.module.css";

const OverViewChart: React.FC<any> = (props) => {
  const [dateChange, setDateChange] = useState(21);
  const dataSixMonths = props.data.values.slice(0, dateChange);
  const chartContainerRef = useRef<any>(null);

  const transformToGraphData = dataSixMonths.map(
    (val: {
      datetime: string;
      close: number;
    }): { time: string; value: number } => {
      return { time: val.datetime, value: val.close };
    }
  );
  transformToGraphData.reverse();

  useEffect(() => {
    if (chartContainerRef.current.childNodes[1]) {
      chartContainerRef.current.childNodes[1].remove();
    }
    const chart: any = createChart(chartContainerRef.current, {
      width: 500,
      height: 250,
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
      layout: {
        fontSize: 16,
        fontFamily: "Arial",
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
  }, [dateChange]);

  return (
    <div className={classes["chart-dates-container"]} ref={chartContainerRef}>
      <div className={classes["chart-dates-wrapper"]}>
        <ul className={classes["chart-dates-ul"]}>
          <li
            className={classes["chart-dates"]}
            onClick={() => setDateChange(8)}
          >
            10D
          </li>
          <li
            className={classes["chart-dates"]}
            onClick={() => setDateChange(21)}
          >
            1M
          </li>
          <li
            className={classes["chart-dates"]}
            onClick={() => setDateChange(21 * 3)}
          >
            3M
          </li>
          <li
            className={classes["chart-dates"]}
            onClick={() => setDateChange(21 * 6)}
          >
            6M
          </li>
          <li
            className={classes["chart-dates"]}
            onClick={() => setDateChange(21 * 12)}
          >
            1Y
          </li>
          <li
            className={classes["chart-dates"]}
            onClick={() => setDateChange(21 * 12 * 4)}
          >
            4Y
          </li>
        </ul>
      </div>
    </div>
  );
};
export default OverViewChart;
