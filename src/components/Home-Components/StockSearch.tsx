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
  const tickerChangeHandler = (event: any) => {
    event.preventDefault();
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
          <input
            onChange={tickerChangeHandler}
            placeholder="Quick Search Company"
            type="text"
            className={classes["header-search-input"]}
            ref={tickerChangeRef}
          />
          <button className={classes["search-button"]}>
            <svg width="24" height="24" viewBox="0 0 24 24" data-icon="search">
              <path d="M9 3C5.686 3 3 5.686 3 9c0 3.313 2.686 6 6 6s6-2.687 6-6c0-3.314-2.686-6-6-6m13.713 19.713c-.387.388-1.016.388-1.404 0l-7.404-7.404C12.55 16.364 10.85 17 9 17c-4.418 0-8-3.582-8-8 0-4.42 3.582-8 8-8s8 3.58 8 8c0 1.85-.634 3.55-1.69 4.905l7.403 7.404c.39.386.39 1.015 0 1.403"></path>
            </svg>
          </button>
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
