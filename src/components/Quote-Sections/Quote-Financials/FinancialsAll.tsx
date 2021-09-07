import IncomeStatement from "./IncomeStatement";
import BalanceSheet from "./BalanceSheet";
import CashFlow from "./CashFlow";
import { Fragment, useState } from "react";
import classes from "./FinancialsAll.module.css";
const FinancialsALL = (props: any) => {
  const [changeStatement, setChangeStatement] = useState(0);
  return (
    <Fragment>
      <div className={classes["financials-container"]}>
        <div className={classes["financials-wrapper"]}>
          <h2
            className={
              changeStatement == 0
                ? classes["active-statement"]
                : classes["financials-statment"]
            }
            onClick={() => setChangeStatement(0)}
          >
            Income Statement
          </h2>
          <h2
            className={
              changeStatement == 1
                ? classes["active-statement"]
                : classes["financials-statment"]
            }
            onClick={() => setChangeStatement(1)}
          >
            Balance Sheet
          </h2>
          <h2
            className={
              changeStatement == 2
                ? classes["active-statement"]
                : classes["financials-statment"]
            }
            onClick={() => setChangeStatement(2)}
          >
            Cash Flow
          </h2>
        </div>
      </div>

      {changeStatement == 0 && (
        <IncomeStatement incomeStatement={props.incomeStatement} />
      )}
      {changeStatement == 1 && (
        <BalanceSheet
          balanceSheet={props.balanceSheet}
          balanceSheetQuarterly={props.balanceSheetQuarterly}
        />
      )}
      {changeStatement == 2 && <CashFlow cashFlow={props.cashFlow} />}
    </Fragment>
  );
};
export default FinancialsALL;
