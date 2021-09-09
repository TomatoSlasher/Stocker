import dynamic from "next/dynamic";
import classes from "./indexStyle.module.css";
import IndexList from "../components/Stock-List/IndexList";

const AdvancedChart = dynamic(
  () => import("../components/Quote-Sections/Quote-Chart/AdvancedChart"),
  {
    ssr: false,
  }
);

const NASDAQ = (props: any) => {
  return (
    <div>
      <div className={classes["index-container"]}>
        <h1 className={classes["index-h1"]}>Nasdaq</h1>
        <AdvancedChart chart={props.chart} />
      </div>
      <IndexList data={props.list} title="Nasdaq Constituents" />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const fetchHistoricalPrice = await fetch(
    `https://api.twelvedata.com/time_series?symbol=IXIC&interval=1day&outputsize=5000&apikey=a24970c9566c49739e8009cdb3a639f0`
  );

  const historicalData = await fetchHistoricalPrice.json();
  const indexList = await fetch(
    `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=b2643679ff15b6f250513b29b37b0375`
  );

  const indexListData = await indexList.json();
  return {
    props: {
      chart: historicalData,
      list: indexListData,
    },
  };
}

export default NASDAQ;
