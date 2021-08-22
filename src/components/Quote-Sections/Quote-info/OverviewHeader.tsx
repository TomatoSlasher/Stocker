import classes from "./OverviewHeader.module.css";

const OverviewHeader: React.FC<any> = (props) => {
  return (
    <div className={classes["stock-header-container"]}>
      <div className={classes["image-container"]}>
        <img src={props.image[0].image} alt="" />
      </div>

      <div className={classes["company-text-container"]}>
        <p className={classes["company-name"]}>{props.data.Name}</p>
        <h1>{props.image[0].price.toFixed(2)}</h1>

        <div className={classes["company-ticker-exchange"]}>
          <p className="company-exchange">{props.data.Exchange}:</p>
          <p className="company-ticker">{props.data.Symbol}</p>
        </div>
      </div>
    </div>
  );
};
export default OverviewHeader;
