import classes from "../Quote-Financials/Financials.module.css";

const FinancialGrowth: React.FC<{ growth: any }> = (props) => {
  const fixedNum = (num: number) => {
    return num.toFixed(2);
  };
  return (
    <div className={classes["income-statement-container"]}>
      <h1>Financial Growth</h1>
      <br />
      <div className={classes["table-container"]}>
        <table className={classes["table"]}>
          <tr>
            <h2>Breakdown</h2>
            {props.growth.map((data: any) => {
              return <th className={classes["income-dates"]}>{data.date}</th>;
            })}
          </tr>
          <tr>
            <th className={classes["income-rows"]}>Revenue Growth</th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.revenueGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.revenueGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
          <tr>
            <th className={classes["income-rows"]}>Gross Profit Growth</th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.grossProfitGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.grossProfitGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
          <tr>
            <th className={classes["income-rows"]}>Net Income Growth</th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.netIncomeGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.netIncomeGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
          <tr>
            <th className={classes["income-rows"]}>Operating Income Growth</th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.operatingIncomeGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.operatingIncomeGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
          <tr>
            <th className={classes[`income-rows`]}>EBIT Growth</th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.ebitgrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.ebitgrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
          <tr>
            <th className={classes[`income-rows`]}>EPS Growth</th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.epsgrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.epsgrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
          <tr>
            <th className={classes[`income-rows`]}>EPS Diluted Growth</th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.epsdilutedGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.epsdilutedGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
          <tr>
            <th className={classes[`income-rows`]}>R&D Expense Growth</th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.rdexpenseGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.rdexpenseGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
          <tr>
            <th className={classes["income-rows"]}>SG&A Expenses Growth</th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.sgaexpensesGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.sgaexpensesGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
          <tr>
            <th className={classes["income-rows"]}>Assets Growth</th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.assetGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.assetGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
          <tr>
            <th className={classes["income-rows"]}>Debt Growth</th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.debtGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.debtGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
          <tr>
            <th className={classes["income-rows"]}>
              Book Value Per Share Growth
            </th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.bookValueperShareGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.bookValueperShareGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>

          <tr>
            <th className={classes["income-rows"]}>
              Dividends Per Share Growth
            </th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.dividendsperShareGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.dividendsperShareGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
          <tr>
            <th className={classes["income-rows"]}>Inventory Growth</th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.inventoryGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.inventoryGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
          <tr>
            <th className={classes["income-rows"]}>Receivables Growth</th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.receivablesGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.receivablesGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>

          <tr>
            <th className={classes["income-rows"]}>
              Operating Cash Flow Growth
            </th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.operatingCashFlowGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.operatingCashFlowGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
          <tr>
            <th className={classes["income-rows"]}>Free Cash Flow Growth</th>
            {props.growth.map((data: any) => {
              return (
                <th
                  className={
                    data.freeCashFlowGrowth > 0
                      ? classes["income-cells-up"]
                      : classes["income-cells-down"]
                  }
                >
                  {fixedNum(data.freeCashFlowGrowth * 100) + "%"}
                </th>
              );
            })}
          </tr>
        </table>
      </div>
    </div>
  );
};
export default FinancialGrowth;
