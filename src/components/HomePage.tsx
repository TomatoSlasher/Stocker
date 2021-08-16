import StockCard from "./StockCard";
import ChartDate from "./ChartDate";
import StockHeader from "./StockHeader";
const HomePage = () => {
  return (
    <StockCard>
      <StockHeader ticker={"HOOD"} />
      <ChartDate ticker={"HOOD"} />
    </StockCard>
  );
};
export default HomePage;
