import dynamic from "next/dynamic";

const CurrentPortfolio = dynamic(
  () => import("../components/portfolio-components/CurrentPortfolio"),
  {
    ssr: false,
  }
);
const PortfolioHistory = dynamic(
  () => import("../components/portfolio-components/PortfolioHistory"),
  {
    ssr: false,
  }
);
const AccountBalance = dynamic(
  () => import("../components/portfolio-components/AccountBalance"),
  {
    ssr: false,
  }
);
const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div>
        <AccountBalance />
        <PortfolioHistory />
      </div>
      <CurrentPortfolio />
    </div>
  );
};
export default Portfolio;
