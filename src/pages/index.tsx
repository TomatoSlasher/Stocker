import StockCard from "../components/Home-Components/StockCard";
import StockHeader from "../components/Home-Components/StockHeader";
import HomeContainer from "../components/Home-Components/HomeContainer";
import StockSearch from "../components/Home-Components/StockSearch";
import Hero from "../components/Home-Components/Hero";
import dynamic from "next/dynamic";
import MostItem from "../components/Home-Components/most/MostItems";
import { Fragment } from "react";
const ChartDate = dynamic(
  () => import("../components/Home-Components/ChartDate"),
  {
    ssr: false,
  }
);

const HomePage = (props: {
  mostActive: any;
  mostGainer: any;
  mostLoser: any;
}) => {
  return (
    <Fragment>
      <HomeContainer>
        <Hero />
        <StockCard>
          <StockSearch />
          <StockHeader />
          <ChartDate />
        </StockCard>
      </HomeContainer>
      <MostItem
        title="Most Active"
        data={props.mostActive}
        page={"most-active"}
      />
      <MostItem
        title="Most Gainer"
        data={props.mostGainer}
        page={"most-gainers"}
      />
      <MostItem
        title="Most Loser"
        data={props.mostLoser}
        page={"most-losers"}
      />
    </Fragment>
  );
};
export async function getServerSideProps(context: any) {
  const fetchMostActive = await fetch(
    `https://financialmodelingprep.com/api/v3/actives?apikey=1e926fa4ba9f6260f956428ecb9f6a63`
  );
  const mostActiveData = await fetchMostActive.json();

  const fetchMostGainer = await fetch(
    `https://financialmodelingprep.com/api/v3/gainers?apikey=1e926fa4ba9f6260f956428ecb9f6a63`
  );
  const mostGainerData = await fetchMostGainer.json();

  const fetchMostLoser = await fetch(
    `https://financialmodelingprep.com/api/v3/losers?apikey=1e926fa4ba9f6260f956428ecb9f6a63`
  );
  const mostLoserData = await fetchMostLoser.json();

  return {
    props: {
      mostActive: mostActiveData,
      mostGainer: mostGainerData,
      mostLoser: mostLoserData,
    },
  };
}
export default HomePage;
