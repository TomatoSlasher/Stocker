import classes from "./IndexQuote.module.css";

const IndexesQuote: React.FC<{ indexData: any }> = (props) => {
  console.log(props);
  const twoDecimal = (val: any) => {
    return val.toFixed(2);
  };
  return (
    <div className="indexes-container">
      <ul className={classes["index-ul"]}>
        <li>
          <p className={classes["index-name"]}>S&P 500</p>
          <p className={classes["index-price"]}>
            {twoDecimal(+props.indexData[0].price)}
          </p>

          <div className={classes["change-container"]}>
            <p
              className={
                props.indexData[0].price > props.indexData[0].open
                  ? classes["index-up"]
                  : classes["index-down"]
              }
            >
              {twoDecimal(+props.indexData[0].change)}
            </p>
            <p
              className={
                props.indexData[0].price > props.indexData[0].open
                  ? classes["index-up"]
                  : classes["index-down"]
              }
            >
              {twoDecimal(+props.indexData[0].changesPercentage) + "%"}
            </p>
          </div>
        </li>
        <li>
          <p className={classes["index-name"]}>Dow 30</p>
          <p className={classes["index-price"]}>
            {twoDecimal(+props.indexData[1].price)}
          </p>
          <div className={classes["change-container"]}>
            <p
              className={
                props.indexData[1].price > props.indexData[1].open
                  ? classes["index-up"]
                  : classes["index-down"]
              }
            >
              {twoDecimal(+props.indexData[1].change)}
            </p>
            <p
              className={
                props.indexData[1].price > props.indexData[1].open
                  ? classes["index-up"]
                  : classes["index-down"]
              }
            >
              {twoDecimal(+props.indexData[1].changesPercentage) + "%"}
            </p>
          </div>
        </li>
        <li>
          <p className={classes["index-name"]}>Nasdaq</p>
          <p className={classes["index-price"]}>
            {twoDecimal(+props.indexData[2].price)}
          </p>
          <div className={classes["change-container"]}>
            <p
              className={
                props.indexData[2].price > props.indexData[2].open
                  ? classes["index-up"]
                  : classes["index-down"]
              }
            >
              {twoDecimal(+props.indexData[2].change)}
            </p>
            <p
              className={
                props.indexData[2].price > props.indexData[2].open
                  ? classes["index-up"]
                  : classes["index-down"]
              }
            >
              {twoDecimal(+props.indexData[2].changesPercentage) + "%"}
            </p>
          </div>
        </li>
        <li>
          <p className={classes["index-name"]}>Russell 2000</p>
          <p className={classes["index-price"]}>
            {twoDecimal(+props.indexData[3].price)}
          </p>
          <div className={classes["change-container"]}>
            <p
              className={
                props.indexData[3].price > props.indexData[3].open
                  ? classes["index-up"]
                  : classes["index-down"]
              }
            >
              {twoDecimal(+props.indexData[3].change)}
            </p>
            <p
              className={
                props.indexData[3].price > props.indexData[3].open
                  ? classes["index-up"]
                  : classes["index-down"]
              }
            >
              {twoDecimal(+props.indexData[3].changesPercentage) + "%"}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default IndexesQuote;
