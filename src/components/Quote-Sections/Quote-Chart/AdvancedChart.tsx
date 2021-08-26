import { useEffect, useRef, useState } from "react";
import classes from "./AdvancedChart.module.css";
import { createChart } from "lightweight-charts";

const AdvancedChart: React.FC<{ chart: any }> = (props) => {
  console.log(props.chart.values);

  const [dateChange, setDateChange] = useState(22 * 3);
  const [chartType, setChartType] = useState('bar');
  //   const chartContainerRef = useRef<any>(null);

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
    const chartCanvas = document.querySelector(".tv-lightweight-charts");

    if (chartCanvas) {
      chartCanvas.remove();
    }
    const chart: any = createChart(document.body, {
      width: 900,
      height: 600,
    });


    chart.timeScale().setVisibleLogicalRange({
    from: props.chart.values.length - dateChange - 1,
    to: props.chart.values.length - 1,
    });


    var volumeSeries = chart.addHistogramSeries({

      color: "rgba(76, 175, 80, .5)",
      priceScaleId: "",
      scaleMargins: {
        top: 0.9,
        bottom: 0,
      },
    });
    volumeSeries.setData(chartVolume);

  if (chartType == 'candle') {
      const candlestickSeries = chart.addCandlestickSeries({
      wickVisible: true,
      upColor: "#00B061",
      downColor: "#FF3031",
    });

    candlestickSeries.setData(chartCandleData);
  }

  if (chartType == 'areaGradient') {
    const areaSeries = chart.addAreaSeries();
    areaSeries.setData(chartLineData);
    areaSeries.applyOptions({
      priceLineWidth: 0,

      priceLineStyle: 2,
    });
    const dataLastEl = props.chart.values.length - 1;

    if (+props.chart.values[dateChange].close < +props.chart.values[0].close) {
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
   if (chartType == 'line') {
     const lineSeries = chart.addLineSeries();

    lineSeries.setData(chartLineData)
    const dataLastEl = props.chart.values.length - 1;


    if (+props.chart.values[dateChange].close < +props.chart.values[0].close) {
      lineSeries.applyOptions({
        color: "#34A853",

      });
    } else {
      lineSeries.applyOptions({
        color: "#EA4335",

      });
    }
  }

  if (chartType == 'bar') {
     const barSeries = chart.addBarSeries({
    thinBars: false,
upColor: "#00B061",
      downColor: "#FF3031",
    });


    barSeries.setData(chartCandleData)
  }
  if (chartType == 'barThin') {
     const barSeries = chart.addBarSeries({
       upColor: "#00B061",
      downColor: "#FF3031",
     });


    barSeries.setData(chartCandleData)
  }

  if (chartType == 'area') {
    const areaSeries = chart.addAreaSeries();
    areaSeries.setData(chartLineData);
    areaSeries.applyOptions({
      priceLineWidth: 0,

      priceLineStyle: 2,
    });
    const dataLastEl = props.chart.values.length - 1;


    if (+props.chart.values[dateChange].close < +props.chart.values[0].close) {
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
    //   areaSeries.setData(chartCandleData);
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
            onClick={() => props.chart.values.length < 22 * 12 * 5 ? setDateChange(props.chart.values.length - 1) :  setDateChange(22 * 12 * 5)}
          >
            5Y
          </li>
          <li
            className={classes["chart-dates"]}
            onClick={() => setDateChange(props.chart.values.length - 1)}
          >
            MAX
          </li>
        </ul>

      </div>
    </div>
  );
};
export default AdvancedChart;
