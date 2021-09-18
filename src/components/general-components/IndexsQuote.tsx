import { useState, useEffect } from "react";
import classes from "./IndexQuote.module.css";
import { createChart } from "lightweight-charts";
import { useRef } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const IndexesQuote: React.FC = () => {
  const twoDecimal = (val: any) => {
    return val.toFixed(2);
  };
  const NumberFormat = new Intl.NumberFormat("en-US");
  const [currentIndexData, setCurrentIndexData]: any = useState([]);
  const SPRef = useRef<any>(null);
  const DOWRef = useRef<any>(null);
  const RUTRef = useRef<any>(null);
  const NASRef = useRef<any>(null);
  const [chartWidth, setChartWidth] = useState(180);
  const [chartHeight, setChartHeight] = useState(100);
  const isFull = useMediaQuery({ query: "(min-width: 1151px)" });

  const isTablet = useMediaQuery({ query: "(max-width: 1150px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  useEffect(() => {
    if (isFull) {
      setChartHeight(100);
      setChartWidth(180);
    }
    if (isTablet) {
      setChartWidth(150);
    }
    if (isMobile) {
      setChartHeight(80);
      setChartWidth(150);
    }
  }, [isTablet, isFull, isMobile]);
  useEffect(() => {
    const fetchIndex = async () => {
      const fetchGSPCIndex = await fetch(
        `https://financialmodelingprep.com/api/v3/quote/%5EGSPC?apikey=b2643679ff15b6f250513b29b37b0375`
      );
      const GSPCIndexData = await fetchGSPCIndex.json();

      const fetchDowIndex = await fetch(
        `https://financialmodelingprep.com/api/v3/quote/%5EDJI?apikey=b2643679ff15b6f250513b29b37b0375`
      );
      const DowIndexData = await fetchDowIndex.json();

      const fetchIXICIndex = await fetch(
        `https://financialmodelingprep.com/api/v3/quote/%5EIXIC?apikey=b2643679ff15b6f250513b29b37b0375`
      );
      const IXICIndexData = await fetchIXICIndex.json();

      const fetchRUTIndex = await fetch(
        `https://financialmodelingprep.com/api/v3/quote/%5ERUT?apikey=b2643679ff15b6f250513b29b37b0375`
      );
      const RUTIndexData = await fetchRUTIndex.json();

      let indexData: any = [];
      indexData.push(
        ...GSPCIndexData,
        ...DowIndexData,
        ...IXICIndexData,
        ...RUTIndexData
      );
      setCurrentIndexData(indexData);
    };
    fetchIndex();
  }, []);
  useEffect(() => {
    const fetchIndexHistorical = async (
      index: string,
      el: any,
      key: string
    ) => {
      if (el.current != null) {
        const fetchGSPCIndex = await fetch(
          `https://financialmodelingprep.com/api/v3/historical-price-full/%5E${index}?apikey=${key}`
        );

        const GSPCIndexData = await fetchGSPCIndex.json();
        const historicalData = GSPCIndexData.historical.slice(0, 264);

        const transformToGraphData = historicalData.map(
          (val: {
            date: string;

            close: number;
          }) => {
            return {
              time: val.date,

              value: val.close,
            };
          }
        );

        transformToGraphData.reverse();

        if (el.current.childNodes[1]) {
          el.current.childNodes[1].remove();
        }
        const chart: any = createChart(el.current, {
          width: chartWidth,
          height: chartHeight,
        });
        chart.applyOptions({
          timeScale: {
            visible: false,
          },
          crosshair: {
            vertLine: { visible: false },
            horzLine: { visible: false },
          },

          handleScroll: false,
          handleScale: false,
          priceScale: {
            visible: false,
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
          crosshairMarkerVisible: false,
          priceLineVisible: false,
        });
        const dataLastEl = transformToGraphData.length - 1;

        if (
          transformToGraphData[0].value < transformToGraphData[dataLastEl].value
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
      } else return;
    };

    fetchIndexHistorical("GSPC", SPRef, "ac54a1b35f7700a8b1bdeb404dc14810");
    fetchIndexHistorical("DJI", DOWRef, "ac54a1b35f7700a8b1bdeb404dc14810");
    fetchIndexHistorical("IXIC", NASRef, "66e243b7036752eb5c9078cdacfe8625");
    fetchIndexHistorical("RUT", RUTRef, "66e243b7036752eb5c9078cdacfe8625");
  }, [currentIndexData, chartHeight, chartWidth]);
  return (
    <div className="indexes-container">
      {currentIndexData.length > 0 && (
        <ul className={classes["index-ul"]}>
          <li className={classes["index-li"]}>
            <div className={classes["index-text-container"]}>
              <Link href="/SP500">
                <h3 className={classes["index-name"]}>S&P 500</h3>
              </Link>

              <p className={classes["index-price"]}>
                {NumberFormat.format(twoDecimal(+currentIndexData[0].price))}
              </p>
              <p className={classes["today"]}>Today</p>
              <div className={classes["change-container"]}>
                <p
                  className={
                    currentIndexData[0].price > currentIndexData[0].open
                      ? classes["index-up"]
                      : classes["index-down"]
                  }
                >
                  {twoDecimal(+currentIndexData[0].change)}
                </p>
                <p
                  className={
                    currentIndexData[0].price > currentIndexData[0].open
                      ? classes["index-up"]
                      : classes["index-down"]
                  }
                >
                  {twoDecimal(+currentIndexData[0].changesPercentage) + "%"}
                </p>
              </div>
            </div>

            <div ref={SPRef}>
              <p className={classes["year"]}>1-Year</p>
            </div>
          </li>
          <li className={classes["index-li"]}>
            <div className={classes["index-text-container"]}>
              <Link href="/DOW">
                <h3 className={classes["index-name"]}>Dow 30</h3>
              </Link>

              <p className={classes["index-price"]}>
                {NumberFormat.format(twoDecimal(+currentIndexData[1].price))}
              </p>
              <p className={classes["today"]}>Today</p>
              <div className={classes["change-container"]}>
                <p
                  className={
                    currentIndexData[1].price > currentIndexData[1].open
                      ? classes["index-up"]
                      : classes["index-down"]
                  }
                >
                  {twoDecimal(+currentIndexData[1].change)}
                </p>
                <p
                  className={
                    currentIndexData[1].price > currentIndexData[1].open
                      ? classes["index-up"]
                      : classes["index-down"]
                  }
                >
                  {twoDecimal(+currentIndexData[1].changesPercentage) + "%"}
                </p>
              </div>
            </div>
            <div ref={DOWRef}>
              <p className={classes["year"]}>1-Year</p>
            </div>
          </li>
          <li className={classes["index-li"]}>
            <div className={classes["index-text-container"]}>
              <Link href="/NASDAQ">
                <h3 className={classes["index-name"]}>Nasdaq</h3>
              </Link>

              <p className={classes["index-price"]}>
                {NumberFormat.format(twoDecimal(+currentIndexData[2].price))}
              </p>
              <p className={classes["today"]}>Today</p>
              <div className={classes["change-container"]}>
                <p
                  className={
                    currentIndexData[2].price > currentIndexData[2].open
                      ? classes["index-up"]
                      : classes["index-down"]
                  }
                >
                  {twoDecimal(+currentIndexData[2].change)}
                </p>
                <p
                  className={
                    currentIndexData[2].price > currentIndexData[2].open
                      ? classes["index-up"]
                      : classes["index-down"]
                  }
                >
                  {twoDecimal(+currentIndexData[2].changesPercentage) + "%"}
                </p>
              </div>
            </div>
            <div ref={NASRef}>
              <p className={classes["year"]}>1-Year</p>
            </div>
          </li>
          <li className={classes["index-li"]}>
            <div className={classes["index-text-container"]}>
              <h3 className={`${classes["index-name2"]}`}>Russell 2000</h3>
              <p className={classes["index-price"]}>
                {NumberFormat.format(twoDecimal(+currentIndexData[3].price))}
              </p>
              <p className={classes["today"]}>Today</p>
              <div className={classes["change-container"]}>
                <p
                  className={
                    currentIndexData[3].price > currentIndexData[3].open
                      ? classes["index-up"]
                      : classes["index-down"]
                  }
                >
                  {twoDecimal(+currentIndexData[3].change)}
                </p>
                <p
                  className={
                    currentIndexData[3].price > currentIndexData[3].open
                      ? classes["index-up"]
                      : classes["index-down"]
                  }
                >
                  {twoDecimal(+currentIndexData[3].changesPercentage) + "%"}
                </p>
              </div>
            </div>
            <div ref={RUTRef}>
              <p className={classes["year"]}>1-Year</p>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};
export default IndexesQuote;
