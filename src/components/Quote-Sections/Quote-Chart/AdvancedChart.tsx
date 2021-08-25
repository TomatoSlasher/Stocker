import { useEffect, useRef, useState } from "react";
import classes from "./AdvancedChart.module.css";
import { createChart } from "lightweight-charts";

const AdvancedChart: React.FC<{ chart: any }> = (props) => {
  console.log(props.chart);

  const [dateChange, setDateChange] = useState(300);
  const chartTime = props.chart.values.slice(0, dateChange);
  //   const chartContainerRef = useRef<any>(null);

  const transformToGraphData = chartTime.map(
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
  const chartVolume = chartTime.map(
    (val: { datetime: string; volume: number }) => {
      return {
        time: val.datetime,
        value: val.volume,
        color: "green",
      };
    }
  );
  console.log(transformToGraphData);
  transformToGraphData.reverse();
  useEffect(() => {
    const chartCanvas = document.querySelector(".tv-lightweight-charts");

    if (chartCanvas) {
      chartCanvas.remove();
    }
    const chart: any = createChart(document.body, {
      width: 800,
      height: 500,
    });
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#00B061",
      downColor: "#FF3031",
    });

    candlestickSeries.setData(transformToGraphData);

    var volumeSeries = chart.addHistogramSeries({
      color: "#26a69a",
      priceFormat: {
        type: "volume",
      },
      priceScaleId: "",
      scaleMargins: {
        bottom: 0,
      },
    });
    volumeSeries.setData(chartVolume);

    //     grid: {
    //       vertLines: {
    //         visible: false,
    //       },
    //       horzLines: {
    //         visible: false,
    //       },
    //     },
    //     layout: {
    //       fontSize: 16,
    //       fontFamily: "Arial",
    //     },
    //   });

    //   chart.timeScale().fitContent();
    //   const areaSeries = chart.addAreaSeries();
    //   areaSeries.setData(transformToGraphData);
    //   areaSeries.applyOptions({
    //     priceLineWidth: 0,

    //     priceLineStyle: 2,
    //   });
    //   const dataLastEl = dataSixMonths.length - 1;

    //   if (+dataSixMonths[0].close > +dataSixMonths[dataLastEl].close) {
    //     areaSeries.applyOptions({
    //       lineColor: "#34A853",
    //       topColor: "rgba(52, 168, 83, 0.4)",
    //       bottomColor: "rgba(52, 168, 83, 0)",

    //       lineWidth: 3,
    //     });
    //   } else {
    //     areaSeries.applyOptions({
    //       lineColor: "#EA4335",
    //       topColor: "rgba(234, 67, 53, 0.4)",
    //       bottomColor: "rgba(234, 67, 53, 0)",
    //       lineWidth: 3,
    //     });
    //   }
  }, [dateChange]);

  return (
    <div
      className={classes["chart-dates-container"]}
      // ref={chartContainerRef}
    >
      {/* <div className={classes["chart-dates-wrapper"]}>
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
      </div> */}
    </div>
  );
};
export default AdvancedChart;
