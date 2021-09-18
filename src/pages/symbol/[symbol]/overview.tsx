import { useRouter } from "next/router";
import StockOverview from "../../../components/Quote-Sections/StockOverview";

import OverviewGeneral from "../../../components/Quote-Sections/Quote-General/OverviewGeneral";

const Financials = (props: any) => {
  const router = useRouter();

  return (
    <div>
      {/* <StockOverview
        symbol={props.symbol}
        historicalData={props.historicalData}
        image={props.image}
      /> */}
      <OverviewGeneral data={props.symbol} general={props.image} />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const fetchOverview = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${context.params.symbol.toUpperCase()}&apikey=GFFC2KM2F1R72KZB`
  );

  const data = await fetchOverview.json();

  const fetchImage = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/${context.params.symbol.toUpperCase()}?apikey=1e926fa4ba9f6260f956428ecb9f6a63`
  );

  const imageData = await fetchImage.json();

  const fetchHistoricalPrice = await fetch(
    `https://api.twelvedata.com/time_series?symbol=${context.params.symbol.toUpperCase()}&interval=1day&outputsize=2000&apikey=a24970c9566c49739e8009cdb3a639f0`
  );

  const historicalData = await fetchHistoricalPrice.json();

  return {
    props: {
      symbol: data,
      historicalData: historicalData,
      image: imageData,
    },
  };
}

export default Financials;
