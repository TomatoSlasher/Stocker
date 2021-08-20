import classes from "./OverviewHeader.module.css";

const OverviewHeader: React.FC<any> = (props) => {
  return (
    <div className={classes["stock-header-container"]}>
      <div className={classes["image-container"]}>
        <img src={props.data[0].image} alt="" />
      </div>

      <div className={classes["company-text-container"]}>
        <p className={classes["company-name"]}>{props.data[0].companyName}</p>
        <h1>{props.data[0].price}</h1>

        <div className={classes["company-ticker-exchange"]}>
          <p className="company-exchange">{props.data[0].exchangeShortName}:</p>
          <p className="company-ticker">{props.data[0].symbol}</p>
        </div>
      </div>
    </div>
  );
};
export default OverviewHeader;
