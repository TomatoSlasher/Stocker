import StockList from "../components/Stock-List/StockList";
const MostLosers = (props: any) => {
  return <StockList stockList={props.mostLoser} name="Most Loser" />;
};

export async function getServerSideProps(context: any) {
  const fetchMostLoser = await fetch(
    `https://financialmodelingprep.com/api/v3/losers?apikey=1e926fa4ba9f6260f956428ecb9f6a63`
  );

  const mostLoserData = await fetchMostLoser.json();
  return {
    props: {
      mostLoser: mostLoserData,
    },
  };
}

export default MostLosers;
