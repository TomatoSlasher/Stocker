import Link from "next/link";
import classes from "./StockList.module.css";

const StockList: React.FC<{ stockList: any }> = (props) => {
  const twoDecimal = (val: number) => {
    return val.toFixed(2);
  };
  return (
    <ul className="stock-list-ul">
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
                  <p className="name">{data.ticker}</p>
                  <p className="name">{data.companyName}</p>
                </div>

                <div className={classes["prices-container"]}>
                  <p className="name">{data.price}</p>
                  <p
                    className={
                      +data.changesPercentage > 0
                        ? classes["price-up"]
                        : classes["price-down"]
                    }
                  >
                    {twoDecimal(+data.changesPercentage) + "%"}
                  </p>
                  <p
                    className={
                      +data.changesPercentage > 0
                        ? classes["price-up"]
                        : classes["price-down"]
                    }
                  >
                    {data.changes}
                  </p>
                </div>
              </div>
            </Link>
          );
        }
      )}
    </ul>
  );
};
export default StockList;
