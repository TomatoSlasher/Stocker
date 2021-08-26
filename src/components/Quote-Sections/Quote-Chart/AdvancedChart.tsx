import { useEffect, useRef, useState } from "react";
import classes from "./AdvancedChart.module.css";
import { createChart } from "lightweight-charts";

const AdvancedChart: React.FC<{ chart: any }> = (props) => {
  console.log(props.chart.values);

  const [dateChange, setDateChange] = useState(props.chart.values.length - 22);
  //   const chartContainerRef = useRef<any>(null);

  const candleData = props.chart.values.map(
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
  candleData.reverse();
  chartVolume.reverse();
  useEffect(() => {
    const chartCanvas = document.querySelector(".tv-lightweight-charts");

    if (chartCanvas) {
      chartCanvas.remove();
    }
    const chart: any = createChart(document.body, {
      width: 900,
      height: 600,
    });
    const candlestickSeries = chart.addCandlestickSeries({
      wickVisible: true,
      upColor: "#00B061",
      downColor: "#FF3031",
    });

    candlestickSeries.setData(candleData);

    var volumeSeries = chart.addHistogramSeries({
      // base: 0,
      color: "rgba(76, 175, 80, .5)",
      priceScaleId: "",
      scaleMargins: {
        top: 0.9,
        bottom: 0,
      },
    });
    volumeSeries.setData(chartVolume);
    chart.timeScale().scrollToPosition(0);
    chart.timeScale().setVisibleLogicalRange({
    from: props.chart.values.length - dateChange,
    to: props.chart.values.length - 1,
});


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
    //   areaSeries.setData(candleData);
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
            onClick={() => setDateChange(22)}
          >
            1M
          </li>
          <li
            className={classes["chart-dates"]}
            onClick={() => setDateChange(22 * 3)}
          >
            3M
          </li>
          <li
            className={classes["chart-dates"]}
            onClick={() => setDateChange(22 * 6)}
          >
            6M
          </li>
          <li
            className={classes["chart-dates"]}
            onClick={() => setDateChange(22 * 12)}
          >
            1Y
          </li>
          <li
            className={classes["chart-dates"]}
            onClick={() => setDateChange(22 * 12 * 2)}
          >
            2Y
          </li>
          <li
            className={classes["chart-dates"]}
            onClick={() => setDateChange(22 * 12 * 5)}
          >
            5Y
          </li>
          <li
            className={classes["chart-dates"]}
            onClick={() => setDateChange(4999)}
          >
            MAX
          </li>
        </ul>

      </div>
    </div>
  );
};
export default AdvancedChart;
