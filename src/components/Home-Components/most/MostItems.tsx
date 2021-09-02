import { PriceLineSource } from "lightweight-charts";
import classes from "./MostItem.module.css";
import Link from "next/link";

interface MostData {
  changes: number;
  changesPercentage: number;
  companyName: string;
  price: number;
  ticker: string;
}

const MostItem: React.FC<{ title: string; data: any; page: string }> = (props: {
  data: any;
  title: string;
  page: string;
}) => {
  const slicedData = props.data.slice(0, 10);
  const NumberFormat: any = new Intl.NumberFormat("en-US");
  const twoDecimal = (val: any) => {
    return +val.toFixed(2);
  };
  return (
    <div>
      <Link href={`/${props.page}`}>
        <div className={classes["most-title"]}>
          <h1>{props.title}</h1>
          <svg
            width="15"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="#202a35"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            ></path>
          </svg>
        </div>
      </Link>

      <div className={classes["most-title-style"]}></div>

      <ul className={classes["most-ul"]}>
        {slicedData.map((val: MostData, idx: number) => {
          const price = +val.price;
          const changes = +val.changes;
          const changesPercentage = +val.changesPercentage;
          return (
            <Link href={`/symbol/${val.ticker}/overview`}>
              <li key={idx} className={classes["most-item"]}>
                <div className={classes["most-item-container"]}>
                  <h2>{val.ticker}</h2>
                  <p>{val.companyName}</p>
                  <p className="most-price">
                    {NumberFormat.format(price.toFixed(2))}
                  </p>
                  <div className={classes["most-changes"]}>
                    <p
                      className={
                        changes > 0
                          ? classes["stock-up"]
                          : classes["stock-down"]
                      }
                    >
                      {changes > 0 ? "+" : ""}
                      {NumberFormat.format(changes.toFixed(2))}
                    </p>
                    <p
                      className={
                        changes > 0
                          ? classes["stock-up"]
                          : classes["stock-down"]
                      }
                    >
                      {changesPercentage > 0 ? "+" : ""}
                      {NumberFormat.format(changesPercentage.toFixed(2)) + "%"}
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default MostItem;
