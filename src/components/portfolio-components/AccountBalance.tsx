import { useState } from "react";
import classes from "./AccountBalance.module.css";
const AccountBalance = () => {
  const [mktValue, setMktValue]: any = useState();
  setTimeout(() => {
    const marketValue: any = localStorage.getItem("marketValue");
    setMktValue(marketValue);
  }, 500);
  const cashBalance: any = localStorage.getItem("cashBalance");
  const NumberFormat = new Intl.NumberFormat("en-US");
  const formatedAccountValue = +mktValue + +cashBalance;

  return (
    <div className={classes["account-balance-wrapper"]}>
      <div className={classes["account-value-card"]}>
        <h2>Total Account Value</h2>
        <p className="account-value">
          {NumberFormat.format(formatedAccountValue)}
        </p>
      </div>
      <div className={classes["account-balance-bottom"]}>
        <div className={classes["account-card"]}>
          <h3>Market Value</h3>
          <p>{+mktValue ? NumberFormat.format(+mktValue) : ""}</p>
        </div>
        <div className={classes["account-card"]}>
          <h3>Cash Balance</h3>
          <p className="cash-balance">{NumberFormat.format(+cashBalance)}</p>
        </div>
      </div>
    </div>
  );
};
export default AccountBalance;
