import classes from "./OverviewInfo.module.css";
const OverviewInfo: React.FC<any> = (props) => {
  const NumberFormat = new Intl.NumberFormat("en-US");
  console.log(props.data);
  const marketCap = props.data[0].mktCap / 1000000000;

  const avgVol = NumberFormat.format(props.data[0].volAvg);

  return (
    <div className={classes["overview-info-container"]}>
      <ul>
        <li className={classes["info-item"]}>
          <p className="item-key">Market Cap</p>
          <p className={classes["item-value"]}>{marketCap.toFixed(2) + "B"}</p>
        </li>
        <li className={classes["info-item"]}>
          <p className="item-key">Avg. Volume </p>
          <p className={classes["item-value"]}>{avgVol}</p>
        </li>
        <li className={classes["info-item"]}>
          <p className="item-key">Beta</p>
          <p className={classes["item-value"]}>{props.data[0].beta}</p>
        </li>
        <li className={classes["info-item"]}>
          <p className="item-key">Full Time Employees</p>
          <p className={classes["item-value"]}>
            {NumberFormat.format(props.data[0].fullTimeEmployees)}
          </p>
        </li>
      </ul>
      <ul>
        <li className={classes["info-item"]}>
          <p className="item-key">Industry</p>
          <p className={classes["item-value"]}>{props.data[0].industry}</p>
        </li>
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
        </li>
      </ul>
    </div>
  );
};
export default OverviewInfo;
