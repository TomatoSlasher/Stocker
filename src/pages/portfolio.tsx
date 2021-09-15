import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

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
  const isTablet = useMediaQuery({ query: "(max-width: 1320px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 1321px)" });

  return (
    <div>
      {isLaptop && (
        <div className="portfolio-container">
          <div>
            <AccountBalance />
            <PortfolioHistory />
          </div>
          <CurrentPortfolio />
        </div>
      )}
      {isTablet && (
        <div>
          <AccountBalance />
          <CurrentPortfolio />
          {/* <PortfolioHistory /> */}
        </div>
      )}
    </div>
  );
};
export default Portfolio;
