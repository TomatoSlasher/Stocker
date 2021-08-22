import { useState } from "react";
import classes from "./Financials.module.css";

const BalanceSheet: React.FC<{ balanceSheet: any }> = (props) => {
  console.log(props.balanceSheet);
  const NumberFormat = new Intl.NumberFormat("en-US");
  const [balanceSheetDate, setBalanceSheetDate] = useState(
    props.balanceSheet.annualReports
  );

  const incomeQuarterlyDateHandler = () => {
    setBalanceSheetDate(props.balanceSheet.quarterlyReports.slice(0, 6));
  };
  const incomeAnnualDateHandler = () => {
    setBalanceSheetDate(props.balanceSheet.annualReports);
  };
  return (
    <div className="income-statement-container">
      <h2>Balance Sheet</h2>
      <p>All number in thousands</p>
      <button onClick={incomeAnnualDateHandler}>Annual</button>
      <button onClick={incomeQuarterlyDateHandler}>Quarterly</button>

      <br />
      <table>
        <tr>
          <span></span>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-dates"]}>
                {data.fiscalDateEnding}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Total Assets</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalAssets / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Total Current Assets</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalCurrentAssets / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Total Non-Current Assets</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalNonCurrentAssets / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>
            Cash & Short Term Investments
          </th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.cashAndShortTermInvestments / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes[`income-rows`]}>Cash & Cash Equivalents</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(
                  data.cashAndCashEquivalentsAtCarryingValue / 1000
                )}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes[`income-rows`]}>Accounts Receivable</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.currentNetReceivables / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes[`income-rows`]}>Intangible Assets</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.intangibleAssets / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes[`income-rows`]}>PP&E</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.propertyPlantEquipment / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Total Liabilities</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalLiabilities / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Total Current Liabilities</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalCurrentLiabilities / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>
            Total Non-Current Liabilities
          </th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalNonCurrentLiabilities / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Accounts Payable</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.currentAccountsPayable / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Current Debt</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.currentDebt / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Long-Term Debt</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.longTermDebt / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Long-Term Debt Non-Current</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.longTermDebtNoncurrent / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Short-Term Debt</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.shortTermDebt / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Shareholders Equity</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalShareholderEquity / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Capital Stock</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.commonStock / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Retained Earnings</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.retainedEarnings / 1000)}
              </th>
            );
          })}
        </tr>

        <tr>
          <th className={classes["income-rows"]}>Accumulated Depreciation</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(
                  data.accumulatedDepreciationAmortizationPPE / 1000
                )}
              </th>
            );
          })}
        </tr>

        <tr>
          <th className={classes["income-rows"]}>R&D</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.researchAndDevelopment / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Share Issued</th>
          {balanceSheetDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(
                  Math.floor(data.commonStockSharesOutstanding / 1000)
                )}
              </th>
            );
          })}
        </tr>
      </table>
    </div>
  );
};
export default BalanceSheet;
