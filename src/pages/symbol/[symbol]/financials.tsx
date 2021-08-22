import { useRouter } from "next/router";
import StockOverview from "../../../components/Quote-Sections/StockOverview";

import FinancialsAll from "../../../components/Quote-Sections/Quote-Financials/FinancialsAll";

const Financials = (props: any) => {
  const router = useRouter();

  return (
    <div>
      <StockOverview
        symbol={props.symbol}
        historicalData={props.historicalData}
        image={props.image}
      />
      <FinancialsAll
        incomeStatement={props.incomeStatement}
        balanceSheet={props.balanceSheet}
        cashFlow={props.cashFlow}
      />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const fetchOverview = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${context.params.symbol.toUpperCase()}&apikey=7WPAHOUCRPYYXN1F`
  );

  const data = await fetchOverview.json();

  const fetchImage = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/${context.params.symbol.toUpperCase()}?apikey=1e926fa4ba9f6260f956428ecb9f6a63`
  );

  const imageData = await fetchImage.json();

  const fetchHistoricalPrice = await fetch(
    `https://api.twelvedata.com/time_series?symbol=${context.params.symbol.toUpperCase()}&interval=1day&outputsize=2000&apikey=a24970c9566c49739e8009cdb3a639f0`
  );

  const historicalData = await fetchHistoricalPrice.json();

  const fetchIncomeStatement = await fetch(
    `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${context.params.symbol.toUpperCase()}&apikey=7WPAHOUCRPYYXN1F`
  );
  const incomeData = await fetchIncomeStatement.json();

  const fetchBalanceSheet = await fetch(
    `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${context.params.symbol.toUpperCase()}&apikey=7WPAHOUCRPYYXN1F`
  );
  const balanceSheetData = await fetchBalanceSheet.json();

  const fetchCashFlow = await fetch(
    `https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${context.params.symbol.toUpperCase()}&apikey=7WPAHOUCRPYYXN1F`
  );

  const cashFlowData = await fetchCashFlow.json();

  return {
    props: {
      symbol: data,
      historicalData: historicalData,
      image: imageData,

      incomeStatement: incomeData,
      balanceSheet: balanceSheetData,
      cashFlow: cashFlowData,
    },
  };
}

export default Financials;
