import classes from "./OverviewGeneral.module.css";
const OverviewInfo: React.FC<any> = (props) => {
  const NumberFormat = new Intl.NumberFormat("en-US");

  const marketCap = props.data.MarketCapitalization / 1000000000;
  const marketCapFormated: any = marketCap.toFixed(3);

  const marketcapTrillionFormat = marketCapFormated / 1000;

  const profitMargin = props.data.ProfitMargin * 100;
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
          <p className="item-key">Industry</p>
          <p className={classes["item-value"]}>{props.general[0].industry}</p>
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
          <p className="item-key">Beta</p>
          <p className={classes["item-value"]}>{props.data.Beta}</p>
        </li>
      </ul>
      <div className={classes["seperator"]}></div>
      <ul className={classes["second-ul"]}>
        <li className={classes["info-item"]}>
          <p className="item-key">IPO Date</p>
          <p className={classes["item-value"]}>{props.general[0].ipoDate}</p>
        </li>
        <li className={classes["info-item"]}>
          <p className="item-key">Profit Margin</p>
          <p className={classes["item-value"]}>
            {+profitMargin.toFixed(2) == 0
              ? "-"
              : +profitMargin.toFixed(2) + "%"}
          </p>
        </li>
        <li className={classes["info-item"]}>
          <p className="item-key">Revenue TTM</p>
          <p className={classes["item-value"]}>
            {NumberFormat.format(props.data.RevenueTTM / 1000000000) + "B"}
          </p>
        </li>
        <li className={classes["info-item"]}>
          <p className="item-key">52 Week Range </p>
          <p className={classes["item-value"]}>
            {props.data["52WeekLow"] + "-" + props.data["52WeekHigh"]}
          </p>
        </li>
        <li className={classes["info-item"]}>
          <p className="item-key">Avg Volume</p>
          <p className={classes["item-value"]}>
            {NumberFormat.format(props.general[0].volAvg)}
          </p>
        </li>
      </ul>
    </div>
  );
};
export default OverviewInfo;
