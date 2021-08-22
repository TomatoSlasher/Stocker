import classes from "./OverviewGeneral.module.css";
const OverviewInfo: React.FC<any> = (props) => {
  console.log(props.data);
  console.log(props.general);
  const NumberFormat = new Intl.NumberFormat("en-US");

  const marketCap = props.data.MarketCapitalization / 1000000000;
  const marketCapFormated: any = marketCap.toFixed(2);

  const marketcapTrillionFormat = marketCapFormated / 1000;

  return (
    <div className={classes["overview-info-container"]}>
      <ul>
        <li className={classes["info-item"]}>
          <p className="item-key">Market Cap</p>
          <p className={classes["item-value"]}>
            {marketCapFormated < 1000
              ? marketCapFormated + "B"
              : marketcapTrillionFormat.toFixed(3) + "T"}
          </p>
        </li>
        <li className={classes["info-item"]}>
          <p className="item-key">EPS</p>
          <p className={classes["item-value"]}>{props.data["EPS"]}</p>
        </li>
        <li className={classes["info-item"]}>
          <p className="item-key">PE Ratio</p>
          <p className={classes["item-value"]}>{props.data.PERatio}</p>
        </li>
        <li className={classes["info-item"]}>
          <p className="item-key">Industry</p>
          <p className={classes["item-value"]}>{props.general[0].industry}</p>
        </li>
        {/*  <li className={classes["info-item"]}>
          <p className="item-key">Full Time Employees</p>
          <p className={classes["item-value"]}>
            {NumberFormat.format(props.data[0].fullTimeEmployees)}
          </p>
        </li>
      </ul>
      <ul>

        <li className={classes["info-item"]}>
          <p className="item-key">IPO Date</p>
          <p className={classes["item-value"]}>{props.data[0].ipoDate}</p>
        </li>
        <li className={classes["info-item"]}>
          <p className="item-key">Sector</p>
          <p className={classes["item-value"]}>{props.data[0].sector}</p>
        </li>
        <li className={classes["info-item"]}>
          <p className="item-key">Range</p>
          <p className={classes["item-value"]}>{props.data[0].range}</p>
        </li> */}
      </ul>
    </div>
  );
};
export default OverviewInfo;
