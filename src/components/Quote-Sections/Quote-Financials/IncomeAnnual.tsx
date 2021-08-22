import { useState } from "react";
import classes from "./QuoteFinancials.module.css";

const IncomeAnnual: React.FC<{ incomeStatement: any }> = (props) => {
  const NumberFormat = new Intl.NumberFormat("en-US");
  console.log(props.incomeStatement);
  const [incomeDate, setIncomeDate] = useState(
    props.incomeStatement.annualReports
  );

  const incomeQuarterlyDateHandler = () => {
    setIncomeDate(props.incomeStatement.quarterlyReports.slice(0, 6));
  };
  const incomeAnnualDateHandler = () => {
    setIncomeDate(props.incomeStatement.annualReports);
  };
  return (
    <div className="income-statement-container">
      <h2>Income Statement</h2>
      <p>All number in thousands</p>
      <button onClick={incomeAnnualDateHandler}>Annual</button>
      <button onClick={incomeQuarterlyDateHandler}>Quarterly</button>
      <br />
      <table>
        <tr>
          <span></span>
          {incomeDate.map((data: any) => {
            return (
              <th className={classes["income-dates"]}>
                {data.fiscalDateEnding}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Total Revenue</th>
          {incomeDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalRevenue / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Cost of Revenue</th>
          {incomeDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.costOfRevenue / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Gross Profit</th>
          {incomeDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.grossProfit / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Operating Expenses</th>
          {incomeDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.operatingExpenses / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Operating Income</th>
          {incomeDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.operatingIncome / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Income Before Tax</th>
          {incomeDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.incomeBeforeTax / 1000)}
              </th>
            );
          })}
        </tr>

        <tr>
          <th className={classes["income-rows"]}>Net Income</th>
          {incomeDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.netIncome / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Interest Expense</th>
          {incomeDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.interestExpense / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Interest Income</th>
          {incomeDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.interestIncome / 1000)}
              </th>
            );
          })}
        </tr>

        <tr>
          <th className={classes["income-rows"]}>EBIT</th>
          {incomeDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.ebit / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>EBITDA</th>
          {incomeDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.ebitda / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>R&D</th>
          {incomeDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.researchAndDevelopment / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>SG&A</th>
          {incomeDate.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(
                  data.sellingGeneralAndAdministrative / 1000
                )}
              </th>
            );
          })}
        </tr>
      </table>
    </div>
  );
};
export default IncomeAnnual;
