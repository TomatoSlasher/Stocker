import StockList from "../components/Stock-List/StockList";
const MostGainer = (props: any) => {
  return <StockList stockList={props.mostGainer} name="Most Gainer" />;
};

export async function getServerSideProps(context: any) {
  const fetchMostGainer = await fetch(
    `https://financialmodelingprep.com/api/v3/gainers?apikey=1e926fa4ba9f6260f956428ecb9f6a63`
  );

  const mostGainerData = await fetchMostGainer.json();
  return {
    props: {
      mostGainer: mostGainerData,
    },
  };
}

export default MostGainer;
