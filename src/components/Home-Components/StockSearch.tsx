import { useDispatch } from "react-redux";
import classes from "./StockSearch.module.css";
import { useRef, useEffect, useState } from "react";

import { tickerActions } from "../../store/index";

const StockSearch = () => {
  const dispatch = useDispatch();
  const tickerChangeRef = useRef<HTMLInputElement>(null);
  const queryLi: any = useRef([]);
  const [tickerData, setTickerData]: any = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  let timer: any;
  const tickerChangeHandler = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const inputText = tickerChangeRef.current!.value;
      setSearchQuery(inputText);
    }, 500);
  };

  useEffect(() => {
    const fetchSearch = async (query: string) => {
      const tickerFetch = await fetch(
        `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=1e926fa4ba9f6260f956428ecb9f6a63`
      );
      const data = await tickerFetch.json();
      setTickerData(data);
    };
    if (searchQuery) {
      fetchSearch(searchQuery);
    }
  }, [searchQuery]);

  const queryClickHandler: any = (idx: number) => {
    const queryTicker = queryLi.current[idx].getAttribute("value");
    dispatch(tickerActions.getTicker(queryTicker));
    setTickerData([]);
  };

  return (
    <div className={classes["ticker-search"]}>
      <form className={classes["search-form"]} onChange={tickerChangeHandler}>
        <div className={classes["search-input-container"]}>
          <button className={classes["search-btn"]} typeof="submit">
            Search
          </button>
          <input
            className={classes["search-input"]}
            type="text"
            placeholder="search company"
            ref={tickerChangeRef}
          />
        </div>
      </form>
      {searchQuery ? (
        <div className={classes["search-dropdown"]}>
          <ul>
            {tickerData.map((data: any, idx: number) => {
              return (
                <li
                  key={idx}
                  value={data.symbol}
                  ref={(ref) => (queryLi.current[idx] = ref)}
                  onClick={() => queryClickHandler(idx)}
                  className={classes["search-li"]}
                >
                  <p className={classes["ticker-name"]}>{data.name}</p>

                  <div className={classes["exchange-container"]}>
                    <p className="search-exchange">{data.exchangeShortName}:</p>
                    <p className="search-ticker">{data.symbol}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default StockSearch;
