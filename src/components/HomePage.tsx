import StockCard from "./StockCard";
import ChartDate from "./ChartDate";
import StockHeader from "./StockHeader";
import { Fragment } from "react";
import StockSearch from "./StockSearch";


const HomePage = () => {


  return (
    <Fragment>
      <StockCard>
        <StockSearch />
        <StockHeader />
        <ChartDate />
      </StockCard>
    </Fragment>
  );
};
export default HomePage;
