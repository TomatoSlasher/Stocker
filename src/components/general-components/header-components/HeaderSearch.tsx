import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "../Header.module.css";
import Link from "next/link";
import classes2 from "./HeaderSearch.module.css";

const HeaderSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tickerData, setTickerData]: any = useState([]);
  const tickerChangeRef = useRef<HTMLInputElement>(null);
  const queryLi: any = useRef([]);
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

  return (
    <div className={classes["header-search"]}>
      <input
        onChange={tickerChangeHandler}
        placeholder="Search Company"
        type="text"
        className={classes["header-search-input"]}
        ref={tickerChangeRef}
      />
      <button className={classes["search-button"]}>
        <svg width="24" height="24" viewBox="0 0 24 24" data-icon="search">
          <path d="M9 3C5.686 3 3 5.686 3 9c0 3.313 2.686 6 6 6s6-2.687 6-6c0-3.314-2.686-6-6-6m13.713 19.713c-.387.388-1.016.388-1.404 0l-7.404-7.404C12.55 16.364 10.85 17 9 17c-4.418 0-8-3.582-8-8 0-4.42 3.582-8 8-8s8 3.58 8 8c0 1.85-.634 3.55-1.69 4.905l7.403 7.404c.39.386.39 1.015 0 1.403"></path>
        </svg>
      </button>
      {searchQuery ? (
        <div className={classes2["search-dropdown"]}>
          <ul>
            {tickerData.map((data: any, idx: number) => {
              return (
                <Link href={`/symbol/${data.symbol}/overview`}>
                  <li
                    key={idx}
                    value={data.symbol}
                    ref={(ref) => (queryLi.current[idx] = ref)}
                    className={classes2["search-li"]}
                    onClick={() => setSearchQuery("")}
                  >
                    <p className={classes2["ticker-name"]}>{data.name}</p>

                    <div className={classes2["exchange-container"]}>
                      <p className="search-exchange">
                        {data.exchangeShortName}:
                      </p>
                      <p className="search-ticker">{data.symbol}</p>
                    </div>
                  </li>
                </Link>
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
export default HeaderSearch;
