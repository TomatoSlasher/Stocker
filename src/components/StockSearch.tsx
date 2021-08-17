import { useSelector, useDispatch } from "react-redux";
import classes from "./StockSearch.module.css";

import { tickerActions } from "../store/index";

const StockSearch = () => {
  const dispatch = useDispatch();

  const ticker = useSelector((state: { ticker: string }) => {
    return state.ticker;
  });
  dispatch(tickerActions.getTicker("MSFT"));

  return (
    <div className="ticker-search">
      <form>
        <input
          className={classes["search-input"]}
          type="text"
          placeholder="search company"
        />
        <button typeof="submit">Search</button>
      </form>
    </div>
  );
};
export default StockSearch;
