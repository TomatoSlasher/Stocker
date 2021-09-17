import { useEffect, useState } from "react";
import classes from "./StockHeader.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
const StockHeader: React.FC = () => {
  const ticker = useSelector((state: { ticker: { ticker: string } }) => {
    return state.ticker.ticker;
  });

  const [CompanyLogoURL, setCompanyLogoURL] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [CompanyTicker, setCompanyTicker] = useState("");
  const [CompanyExchange, setCompanyExchange] = useState("");
  const [CompanyPrice, setCompanyPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchDataHandler = async (ticker: string) => {
      const fetchData = await fetch(
        `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=1e926fa4ba9f6260f956428ecb9f6a63`
      );

      const data = await fetchData.json();
      if (data.length > 0) {
        setCompanyLogoURL(`${data[0].image}`);
        setCompanyName(`${data[0].companyName}`);
        setCompanyTicker(`${data[0].symbol}`);
        setCompanyExchange(`${data[0].exchangeShortName}`);
        setCompanyPrice(`${data[0].price.toFixed(2)}`);
      }
      setIsLoading(false);
    };
    fetchDataHandler(ticker);
  }, [ticker]);

  return (
    <div className={classes["stock-content-container"]}>
      {isLoading ? (
        <div className={classes["spinner-container"]}>
          <div className={classes["lds-ripple"]}>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className={classes["stock-header-wrapper"]}>
          <div className={classes["stock-header-container"]}>
            <div className={classes["image-container"]}>
              <img src={CompanyLogoURL} alt="" />
            </div>

            <div className={classes["company-text-container"]}>
              <p className={classes["company-name"]}>{CompanyName}</p>
              <h1>{CompanyPrice}</h1>

              <div className={classes["company-ticker-exchange"]}>
                <p className="company-exchange">{CompanyExchange}:</p>
                <p className="company-ticker">{CompanyTicker}</p>
              </div>
            </div>
          </div>
          <div>
            <Link href={`/symbol/${CompanyTicker}/overview`}>
              <button className={classes["more-info-btn"]}>More Info</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default StockHeader;
