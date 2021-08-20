import StockOverview from "../../../components/StockOverview";

const tickerPage = (props: any) => {
  return <StockOverview symbol={props.symbol} />;
};

export async function getServerSideProps(context: any) {
  const fetchData = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/${context.params.symbol.toUpperCase()}?apikey=1e926fa4ba9f6260f956428ecb9f6a63`
  );

  const data = await fetchData.json();

  return {
    props: {
      symbol: data,
    },
  };
}

export default tickerPage;
