import { useEffect, useState } from "react";
import classes from "./AccountBalance.module.css";
const AccountBalance = () => {
  const [mktValue, setMktValue]: any = useState();

  const marketValue: any = localStorage.getItem("marketValue");

  useEffect(() => {
    setMktValue(marketValue);
  }, [marketValue]);
  const cashBalance: any = localStorage.getItem("cashBalance");
  const NumberFormat = new Intl.NumberFormat("en-US");
  const formatedAccountValue = +mktValue + +cashBalance;
  const PL = formatedAccountValue - 25000;
  const PLDiff = (100 * (+formatedAccountValue.toFixed(2) - 25000)) / 25000;

  return (
    <div className={classes["account-balance-wrapper"]}>
      <div className={classes["account-value-card"]}>
        <div className={classes["account-cards-first"]}>
          <h2>Total Account Value</h2>
          <p className="account-value">
            ${NumberFormat.format(formatedAccountValue)}
          </p>
        </div>
        <div className={classes["account-cards"]}>
          <h3>Open P&L</h3>
          <p className={PL > 0 ? classes["up-pl"] : classes["down-pl"]}>
            {PL > 0 ? `+${PL.toFixed(2)}` : `${PL.toFixed(2)}`}
            <span className={classes["pl-change"]}>
              {"    " + PLDiff.toFixed(2) + "%"}
            </span>
          </p>
        </div>
      </div>
      <div className={classes["account-value-card"]}>
        <div className={classes["account-cards-first"]}>
          <h3>Market Value</h3>
          <p>${+mktValue ? NumberFormat.format(+mktValue) : ""}</p>
        </div>
        <div className={classes["account-cards"]}>
          <h3>Cash Balance</h3>
          <p className="cash-balance">${NumberFormat.format(+cashBalance)}</p>
        </div>
      </div>
    </div>
  );
};
export default AccountBalance;
