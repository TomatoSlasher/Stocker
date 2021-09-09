import dynamic from "next/dynamic";
import classes from "./indexStyle.module.css";
const AdvancedChart = dynamic(
  () => import("../components/Quote-Sections/Quote-Chart/AdvancedChart"),
  {
    ssr: false,
  }
);
const SP500 = (props: any) => {
  return (
    <div className={classes["index-container"]}>
      <h1 className={classes["index-h1"]}>S&P 500</h1>
      <AdvancedChart chart={props.chart} />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const fetchHistoricalPrice = await fetch(
    `https://api.twelvedata.com/time_series?symbol=GSPC&interval=1day&outputsize=5000&apikey=a24970c9566c49739e8009cdb3a639f0`
  );

  const historicalData = await fetchHistoricalPrice.json();

  return {
    props: {
      chart: historicalData,
    },
  };
}

export default SP500;
