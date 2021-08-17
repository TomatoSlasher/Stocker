import { useDispatch } from "react-redux";
import classes from "./StockSearch.module.css";
import { useRef, useEffect, useState } from "react";

import { tickerActions } from "../store/index";

const StockSearch = () => {
  const dispatch = useDispatch();
  const tickerChangeRef = useRef<HTMLInputElement>(null);
  const [tickerData, setTickerData]: any = useState([]);

  const tickerChangeHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const inputText = tickerChangeRef.current!.value.toUpperCase();
    dispatch(tickerActions.getTicker(inputText));
  };

  useEffect(() => {
    const fetchSearch = async (query: string) => {
      const tickerFetch = await fetch(
        `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=1e926fa4ba9f6260f956428ecb9f6a63`
      );
      const data = await tickerFetch.json();
      setTickerData(data);
    };
    fetchSearch("aa");
  }, []);
  console.log(tickerData);
  return (
    <div className="ticker-search">
      <form className={classes["search-form"]} onSubmit={tickerChangeHandler}>
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
      <div className="search-dropdown">
        <ul>
          {tickerData.map(
            (data: {
              name: string;
              exchangeShortName: string;
              symbol: string;
            }) => {
              return (
                <li className={classes["search-li"]}>
                  <p className={classes["ticker-name"]}>{data.name}</p>

                  <div className={classes["exchange-container"]}>
                    <p className="search-exchange">{data.exchangeShortName}:</p>
                    <p className="search-ticker">{data.symbol}</p>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};
export default StockSearch;
