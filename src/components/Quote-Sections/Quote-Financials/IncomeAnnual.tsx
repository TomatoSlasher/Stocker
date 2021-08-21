import classes from "./QuoteFinancials.module.css";

const IncomeAnnual: React.FC<{ incomeStatement: any }> = (props) => {
  console.log(props.incomeStatement);
  const NumberFormat = new Intl.NumberFormat("en-US");

  return (
    <div className="income-statement-container">
      <p>All number in thousands</p>
      <br />
      <table>
        <tr>
          breakdown
          {props.incomeStatement.annualReports.map((data: any) => {
            return (
              <th className={classes["income-dates"]}>
                {data.fiscalDateEnding}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Total Revenue</th>
          {props.incomeStatement.annualReports.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.totalRevenue / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Cost of Revenue</th>
          {props.incomeStatement.annualReports.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.costOfRevenue / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Gross Profit</th>
          {props.incomeStatement.annualReports.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.grossProfit / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Operating Expenses</th>
          {props.incomeStatement.annualReports.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.operatingExpenses / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Operating Income</th>
          {props.incomeStatement.annualReports.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.operatingIncome / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Income Before Tax</th>
          {props.incomeStatement.annualReports.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.incomeBeforeTax / 1000)}
              </th>
            );
          })}
        </tr>

        <tr>
          <th className={classes["income-rows"]}>Net Income</th>
          {props.incomeStatement.annualReports.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.netIncome / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Interest Expense</th>
          {props.incomeStatement.annualReports.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.interestExpense / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>Interest Income</th>
          {props.incomeStatement.annualReports.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.interestIncome / 1000)}
              </th>
            );
          })}
        </tr>

        <tr>
          <th className={classes["income-rows"]}>EBIT</th>
          {props.incomeStatement.annualReports.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.ebit / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>EBITDA</th>
          {props.incomeStatement.annualReports.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.ebitda / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>R&D</th>
          {props.incomeStatement.annualReports.map((data: any) => {
            return (
              <th className={classes["income-cells"]}>
                {NumberFormat.format(data.researchAndDevelopment / 1000)}
              </th>
            );
          })}
        </tr>
        <tr>
          <th className={classes["income-rows"]}>SG&A</th>
          {props.incomeStatement.annualReports.map((data: any) => {
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
