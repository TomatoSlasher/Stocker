import Link from "next/link";
import classes from "./StockList.module.css";

const StockList: React.FC<{ stockList: any; name: string }> = (props) => {
  const twoDecimal = (val: number) => {
    return val.toFixed(2);
  };
  return (
    <div className={classes["list-wrapper"]}>
      <h1 className={classes["most-title"]}>{props.name}</h1>
      <div className={classes["list-container"]}>
        <div className={classes["stock-contianer-header"]}>
          <div className={classes["name-container"]}>
            <h4
              className={`${classes["head-text"]} ${classes["most-sym"]} ${classes["symbol"]}`}
            >
              Symbol
            </h4>
            <h4 className={`${classes["head-text"]} ${classes["comp"]}`}>
              Company Name
            </h4>
          </div>

          <div className={classes["prices-container"]}>
            <h4
              className={`${classes["head-text"]} ${classes["price-head"]} ${classes["symbol"]}`}
            >
              Price
            </h4>
            <h4
              className={`${classes["head-text"]} ${classes["change-head"]} ${classes["change"]}`}
            >
              Change
            </h4>
          </div>
        </div>
        <ul className={classes["stock-list-ul"]}>
          {props.stockList.map(
            (data: {
              changes: number;
              changesPercentage: number;
              companyName: string;
              price: number;
              ticker: string;
            }) => {
              return (
                <Link href={`/symbol/${data.ticker.toUpperCase()}/overview`}>
                  <div className={classes["stock-contianer"]}>
                    <div className={classes["name-container"]}>
                      <h4
                        className={`${classes["ticker"]} ${classes["symbol"]}`}
                      >
                        {data.ticker}
                      </h4>
                      <p className={classes["symbol2"]}>{data.companyName}</p>
                    </div>

                    <div className={classes["prices-container"]}>
                      <p
                        className={`${classes["data-price"]} ${classes["symbol"]}`}
                      >
                        {twoDecimal(+data.price)}
                      </p>
                      <div
                        className={`${classes["data-change"]} ${classes["change"]}`}
                      >
                        <p
                          className={
                            +data.changesPercentage > 0
                              ? classes["price-up"]
                              : classes["price-down"]
                          }
                        >
                          {+data.changesPercentage > 0 && "+"}
                          {data.changes.toFixed(2)}
                        </p>
                        <p
                          className={
                            +data.changesPercentage > 0
                              ? classes["price-up"]
                              : classes["price-down"]
                          }
                        >
                          {+data.changesPercentage > 0 && "+"}
                          {twoDecimal(+data.changesPercentage) + "%"}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};
export default StockList;
