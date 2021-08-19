import StockCard from "../components/StockCard";
// import ChartDate from "../components/ChartDate";
import StockHeader from "../components/StockHeader";

import StockSearch from "../components/StockSearch";
import { Provider } from "react-redux";
import store from "../store/index";

import dynamic from "next/dynamic";
const ChartDate = dynamic(() => import("../components/ChartDate"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <Provider store={store}>
      <StockCard>
        <StockSearch />
        <StockHeader />
        <ChartDate />
      </StockCard>
    </Provider>
  );
};
export default HomePage;
