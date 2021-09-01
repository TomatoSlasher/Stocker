import StockOverview from "../../../components/Quote-Sections/StockOverview";
import FinancialGrowth from "../../../components/Quote-Sections/Quote-Growth/FinancialGrowth";
const Growth = (props: any) => {
  return (
    <div>
      <StockOverview
        symbol={props.symbol}
        historicalData={props.historicalData}
        image={props.image}
      />
      <FinancialGrowth growth={props.growth} />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const fetchOverview = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${context.params.symbol.toUpperCase()}&apikey=0NEKC0UVY5YYYQ40`
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

  const fetchGrowth = await fetch(
    `https://financialmodelingprep.com/api/v3/financial-growth/${context.params.symbol.toUpperCase()}?limit=5&apikey=1e926fa4ba9f6260f956428ecb9f6a63`
  );
  const growthData = await fetchGrowth.json();

  return {
    props: {
      symbol: data,
      historicalData: historicalData,
      image: imageData,
      growth: growthData,
    },
  };
}

export default Growth;
