import { useEffect, useState } from "react";
import classes from "./StockHeader.module.css";
const StockHeader: React.FC<{ ticker: string }> = (props) => {
  const [CompanyLogoURL, setCompanyLogoURL] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [CompanyTicker, setCompanyTicker] = useState("");
  const [CompanyExchange, setCompanyExchange] = useState("");
  const [CompanyPrice, setCompanyPrice] = useState("");
  useEffect(() => {
    const fetchDataHandler = async (ticker: string) => {
      const fetchData = await fetch(
        `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=1e926fa4ba9f6260f956428ecb9f6a63`
      );

      const data = await fetchData.json();
      console.log(data);
      if (data.length > 0) {
        setCompanyLogoURL(`${data[0].image}`);
        setCompanyName(`${data[0].companyName}`);
        setCompanyTicker(`${data[0].symbol}`);
        setCompanyExchange(`${data[0].exchangeShortName}`);
        setCompanyPrice(`${data[0].price}`);
      }
    };
    fetchDataHandler(props.ticker);
  }, []);

  return (
    <div className={classes["stock-header-container"]}>
      <div className={classes["image-container"]}>
        <img src={CompanyLogoURL} alt="" />
      </div>
      <div className={classes["company-text-container"]}>
        <p className={classes["company-name"]}>{CompanyName}</p>
        <h1>{CompanyPrice}</h1>
        <div className={classes["company-ticker-exchange"]}>
          <p className="company-exchange">
            {CompanyExchange}: {"  "}
          </p>
          <p className="company-ticker">{CompanyTicker}</p>
        </div>
      </div>
    </div>
  );
};
export default StockHeader;
