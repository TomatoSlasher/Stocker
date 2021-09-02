import StockCard from "../components/Home-Components/StockCard";
// import ChartDate from "../components/ChartDate";
import StockHeader from "../components/Home-Components/StockHeader";
import HomeContainer from "../components/Home-Components/HomeContainer";
import StockSearch from "../components/Home-Components/StockSearch";
import { Provider } from "react-redux";
import store from "../store/index";
import Hero from "../components/Home-Components/Hero";
import dynamic from "next/dynamic";

const ChartDate = dynamic(
  () => import("../components/Home-Components/ChartDate"),
  {
    ssr: false,
  }
);

const HomePage = () => {
  return (
    <Provider store={store}>
      <HomeContainer>
        <Hero />
        <StockCard>
          <StockSearch />
          <StockHeader />
          <ChartDate />
        </StockCard>
      </HomeContainer>
    </Provider>
  );
};
export default HomePage;
