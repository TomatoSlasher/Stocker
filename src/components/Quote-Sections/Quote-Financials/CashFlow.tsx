import { useState } from "react";
import classes from "./Financials.module.css";
const CashFlow: React.FC<{ cashFlow: any }> = (props) => {
  console.log(props.cashFlow);
  const NumberFormat = new Intl.NumberFormat("en-US");
  const [cashFlowDate, setCashFlowDate] = useState(
    props.cashFlow.annualReports
  );

  const cashFlowQuarterlyDateHandler = () => {
    setCashFlowDate(props.cashFlow.quarterlyReports.slice(0, 6));
  };
  const cashFlowAnnualDateHandler = () => {
    setCashFlowDate(props.cashFlow.annualReports);
  };
  return (
    <div className="income-statement-container">
      <h2>Cash Flow Statement</h2>
      <p>All number in thousands</p>
      <button onClick={cashFlowAnnualDateHandler}>Annual</button>
      <button onClick={cashFlowQuarterlyDateHandler}>Quarterly</button>

      <br />
      <table>
        <tr>
          <span></span>
          {cashFlowDate.map((data: any) => {
            return (
              <th className={classes["income-dates"]}>
                {data.fiscalDateEnding}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Operating Cash Flow</th>
          {cashFlowDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.operatingCashflow / 1000)}
              </th>
            );
          })}
        </tr>

        <tr>
          <th className={classes["income-rows"]}>Investing Cash Flow</th>
          {cashFlowDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.cashflowFromInvestment / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Financing Cash Flow</th>
          {cashFlowDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.cashflowFromFinancing / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Capital Expenditures</th>
          {cashFlowDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                -{NumberFormat.format(data.capitalExpenditures / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes[`income-rows`]}>Issuance of Capital Stock </th>
          {cashFlowDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(
                  data.proceedsFromIssuanceOfCommonStock / 1000
                )}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Change In Cash</th>
          {cashFlowDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(
                  data.changeInCashAndCashEquivalents / 1000
                )}
              </th>
            );
          })}
        </tr>

        <tr>
          <th className={classes[`income-rows`]}>Change In Operating Assets</th>
          {cashFlowDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.changeInOperatingAssets / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>
            Change In Operating Liabilities
          </th>
          {cashFlowDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.changeInOperatingLiabilities / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Net Income</th>
          {cashFlowDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.netIncome / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>DD&A</th>
          {cashFlowDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(
                  data.depreciationDepletionAndAmortization / 1000
                )}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Dividend Payout</th>
          {cashFlowDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.dividendPayout / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>
            Payments For Operating Activities
          </th>
          {cashFlowDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(
                  data.paymentsForOperatingActivities / 1000
                )}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>
            Payments For Repurchase Of CommonStock
          </th>
          {cashFlowDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(
                  data.paymentsForRepurchaseOfCommonStock / 1000
                )}
              </th>
            );
          })}
        </tr>
      </table>
    </div>
  );
};
export default CashFlow;
