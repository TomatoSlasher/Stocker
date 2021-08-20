import StockOverview from "../../../components/Quote-Sections/StockOverview";

const tickerPage = (props: any) => {
  return (
    <StockOverview
      symbol={props.symbol}
      historicalData={props.historicalData}
    />
  );
};

export async function getServerSideProps(context: any) {
  const fetchOverview = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/${context.params.symbol.toUpperCase()}?apikey=1e926fa4ba9f6260f956428ecb9f6a63`
  );

  const data = await fetchOverview.json();
  const fetchHistoricalPrice = await fetch(
    `https://api.twelvedata.com/time_series?symbol=${context.params.symbol.toUpperCase()}&interval=1day&outputsize=2000&apikey=a24970c9566c49739e8009cdb3a639f0`
  );

  const historicalData = await fetchHistoricalPrice.json();

  return {
    props: {
      symbol: data,
      historicalData: historicalData,
    },
  };
}

export default tickerPage;
