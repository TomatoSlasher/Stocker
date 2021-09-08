import { useState, useEffect } from "react";
import classes from "./IndexQuote.module.css";
import { createChart } from "lightweight-charts";
import { useRef } from "react";

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
  useEffect(() => {
    const fetchIndex = async () => {
      const fetchGSPCIndex = await fetch(
        `https://financialmodelingprep.com/api/v3/quote/%5EGSPC?apikey=c32c062e2e731dc049a0374a77ac2c9b`
      );
      const GSPCIndexData = await fetchGSPCIndex.json();

      const fetchDowIndex = await fetch(
        `https://financialmodelingprep.com/api/v3/quote/%5EDJI?apikey=c32c062e2e731dc049a0374a77ac2c9b`
      );
      const DowIndexData = await fetchDowIndex.json();

      const fetchIXICIndex = await fetch(
        `https://financialmodelingprep.com/api/v3/quote/%5EIXIC?apikey=c32c062e2e731dc049a0374a77ac2c9b`
      );
      const IXICIndexData = await fetchIXICIndex.json();

      const fetchRUTIndex = await fetch(
        `https://financialmodelingprep.com/api/v3/quote/%5ERUT?apikey=c32c062e2e731dc049a0374a77ac2c9b`
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
    const fetchIndexHistorical = async (index: string, el: any) => {
      const fetchGSPCIndex = await fetch(
        `https://financialmodelingprep.com/api/v3/historical-price-full/%5E${index}?apikey=c32c062e2e731dc049a0374a77ac2c9b`
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
        width: 180,
        height: 100,
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
    };

    fetchIndexHistorical("GSPC", SPRef);
    fetchIndexHistorical("DJI", DOWRef);
    fetchIndexHistorical("IXIC", NASRef);
    fetchIndexHistorical("RUT", RUTRef);
  }, [SPRef.current, DOWRef.current, RUTRef.current, NASRef.current]);
  return (
    <div className="indexes-container">
      {currentIndexData.length > 0 && (
        <ul className={classes["index-ul"]}>
          <li className={classes["index-li"]}>
            <div className={classes["index-text-container"]}>
              <h3 className={classes["index-name"]}>S&P 500</h3>
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
              <h3 className={classes["index-name"]}>Dow 30</h3>
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
              <h3 className={classes["index-name"]}>Nasdaq</h3>
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
              <h3 className={classes["index-name"]}>Russell 2000</h3>
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
