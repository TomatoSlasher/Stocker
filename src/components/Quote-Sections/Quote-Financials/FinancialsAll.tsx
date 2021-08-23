import IncomeStatement from "./IncomeStatement";
import BalanceSheet from "./BalanceSheet";
import CashFlow from "./CashFlow";
import { Fragment, useState } from "react";
const FinancialsALL = (props: any) => {
  const [changeStatement, setChangeStatement] = useState(0);
  return (
    <Fragment>
      <button onClick={() => setChangeStatement(0)}>Income Statement</button>
      <button onClick={() => setChangeStatement(1)}>Balance Sheet</button>
      <button onClick={() => setChangeStatement(2)}>Cash Flow</button>

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
