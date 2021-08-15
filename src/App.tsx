import React, { useEffect } from "react";
import { createChart } from "lightweight-charts";

import "./App.css";
import { Console, time } from "console";

function App() {
  useEffect(() => {
    const fetchDataHanler = async () => {
      const fetchData = await fetch(
        "https://financialmodelingprep.com/api/v3/historical-price-full/AMZN?serietype=line&apikey=1e926fa4ba9f6260f956428ecb9f6a63"
      );

      const data = await fetchData.json();

      const dataSixMonths = data.historical.slice(0, 132);

      const transformToGraphData = dataSixMonths.map(
        (val: {
          date: string;
          close: number;
        }): { time: string; value: number } => {
          return { time: val.date, value: val.close };
        }
      );
      transformToGraphData.reverse();

      const chart = createChart(document.body, { width: 1000, height: 300 });
      const lineSeries = chart.addLineSeries();
      lineSeries.setData(transformToGraphData);
    };

    fetchDataHanler();
  }, []);

  return (
    <div className="mb-3">
      <p>fas</p>
    </div>
  );
}

export default App;
