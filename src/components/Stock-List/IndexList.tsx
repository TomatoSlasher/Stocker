import classes from "./StockList.module.css";
import Link from "next/link";

const IndexList: React.FC<{ data: any; title: string }> = (props: {
  data: {
    symbol: string;
    name: string;
    sector: string;
    founded: string;
  }[];
  title: string;
}) => {
  return (
    <div className={classes["list-wrapper"]}>
      <h1 className={classes["most-title"]}>{props.title}</h1>
      <div className={classes["list-container"]}>
        <div className={classes["stock-contianer-header"]}>
          <div className={classes["name-container"]}>
            <h4 className={classes["symbol"]}>Symbol</h4>
            <h4 className={classes["comp"]}>Company Name</h4>
          </div>

          <div className={classes["prices-container"]}>
            <h4 className={classes["sector"]}>Sector</h4>
            <h4 className={classes["change"]}>Founded</h4>
          </div>
        </div>
        <ul className={classes["stock-list-ul"]}>
          {props.data.map(
            (data: {
              symbol: string;
              name: string;
              sector: string;
              founded: string;
            }) => {
              return (
                <Link href={`/symbol/${data.symbol.toUpperCase()}/overview`}>
                  <div className={classes["stock-contianer"]}>
                    <div className={classes["name-container"]}>
                      <h4 className={classes["symbol"]}>{data.symbol}</h4>
                      <p className={classes["symbol2"]}>{data.name}</p>
                    </div>

                    <div className={classes["prices-container"]}>
                      <p className={classes["sector"]}>{data.sector}</p>
                      <div className={classes["change2"]}>
                        <p>{data.founded}</p>
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
export default IndexList;
