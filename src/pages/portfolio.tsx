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

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <CurrentPortfolio />
      <PortfolioHistory />
    </div>
  );
};
export default Portfolio;
