import { useState } from "react";
import classes from "./Financials.module.css";

const BalanceSheet: React.FC<{
  balanceSheet: any;
  balanceSheetQuarterly: any;
}> = (props) => {
  console.log(props.balanceSheetQuarterly);
  const NumberFormat = new Intl.NumberFormat("en-US");

  return (
    <div className="income-statement-container">
      <h2>Balance Sheet</h2>
      <p>All number in thousands</p>

      <table>
        <tr>
          <span></span>
          {props.balanceSheet.map((data: any) => {
            return <th className={classes["income-dates"]}>{data.date}</th>;
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Total Assets</th>
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalAssets / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Total Current Assets</th>
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalCurrentAssets / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Total Non-Current Assets</th>
          {props.balanceSheet.map((data: any) => {
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
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.cashAndShortTermInvestments / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes[`income-rows`]}>Cash & Cash Equivalents</th>
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.cashAndCashEquivalents / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes[`income-rows`]}>Accounts Receivable</th>
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.netReceivables / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes[`income-rows`]}>Intangible Assets</th>
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.intangibleAssets / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes[`income-rows`]}>PP&E</th>
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.propertyPlantEquipmentNet / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Total Liabilities</th>
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalLiabilities / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Total Current Liabilities</th>
          {props.balanceSheet.map((data: any) => {
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
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalNonCurrentLiabilities / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Accounts Payable</th>
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.accountPayables / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Total Debt</th>
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalDebt / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Long-Term Debt</th>
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.longTermDebt / 1000)}
              </th>
            );
          })}
        </tr>

        <tr>
          <th className={classes["income-rows"]}>Short-Term Debt</th>
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.shortTermDebt / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Stockholders Equity</th>
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalStockholdersEquity / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Capital Stock</th>
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.commonStock / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Retained Earnings</th>
          {props.balanceSheet.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.retainedEarnings / 1000)}
              </th>
            );
          })}
        </tr>
      </table>
    </div>
  );
};
export default BalanceSheet;
