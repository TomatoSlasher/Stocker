import StockList from "../components/Stock-List/StockList";
const MostActive = (props: any) => {
  return <StockList stockList={props.mostActive} name="Most Active" />;
};

export async function getServerSideProps(context: any) {
  const fetchMostActive = await fetch(
    `https://financialmodelingprep.com/api/v3/actives?apikey=1e926fa4ba9f6260f956428ecb9f6a63`
  );

  const mostActiveData = await fetchMostActive.json();
  return {
    props: {
      mostActive: mostActiveData,
    },
  };
}

export default MostActive;
