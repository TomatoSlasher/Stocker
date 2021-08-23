import { useState } from "react";
import classes from "./Financials.module.css";
const CashFlow: React.FC<{ cashFlow: any }> = (props) => {
  console.log(props.cashFlow);
  const NumberFormat = new Intl.NumberFormat("en-US");

  return (
    <div className="income-statement-container">
      <h2>Cash Flow Statement</h2>
      <p>All number in thousands</p>

      <br />
      <table>
        <tr>
          <th className={classes["income-dates"]}>Breakdown</th>
          {props.cashFlow.map((data: any) => {
            return <th className={classes["income-dates"]}>{data.date}</th>;
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Operating Cash Flow</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.operatingCashFlow / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Net Income</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.netIncome / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Accounts Payable</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.accountsPayables / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Change In Working Capital</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.changeInWorkingCapital / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Deferred Income Tax</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.deferredIncomeTax / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Net Operating Cash Flow</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(
                  data.netCashProvidedByOperatingActivities / 1000
                )}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Purchase of Investments</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.purchasesOfInvestments / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>
            Sale/Maturity of Investments
          </th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.salesMaturitiesOfInvestments / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Capital Expenditures</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.capitalExpenditure / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>
            Net Assets from Acquisitions
          </th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.acquisitionsNet / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Net Investing Cash Flow</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(
                  data.netCashUsedForInvestingActivites / 1000
                )}
              </th>
            );
          })}
        </tr>

        <tr>
          <th className={classes["income-rows"]}>D&A</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.depreciationAndAmortization / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Net Financing Cash Flow</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(
                  data.netCashUsedProvidedByFinancingActivities / 1000
                )}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Dividends Paid</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.dividendsPaid / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Stock Based Compensation</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.stockBasedCompensation / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Common Stock Repurchased</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.commonStockRepurchased / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Debt Repayment</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.debtRepayment / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Free Cash Flow</th>
          {props.cashFlow.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.freeCashFlow / 1000)}
              </th>
            );
          })}
        </tr>
      </table>
    </div>
  );
};
export default CashFlow;
