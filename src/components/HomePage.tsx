import StockCard from "./StockCard";
import ChartDate from "./ChartDate";
import StockHeader from "./StockHeader";
import { Fragment } from "react";
import StockSearch from "./StockSearch";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  const ticker = useSelector((state: { ticker: string }) => {
    return state.ticker;
  });

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
