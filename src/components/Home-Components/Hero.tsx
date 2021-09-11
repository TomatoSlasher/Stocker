import classes from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={classes["hero-container"]}>
      <div>
        <p className={classes["hero-small-p"]}>Real-Time Data</p>
        <h1>Search publicly traded companies and start paper-trading</h1>
        <p className={classes["hero-overview"]}>
          Get the latest financial statements and insight on companies listed on
          the NYSE & NASDAQ and start paper-trading with an account starting at
          $25,000 with realtime price updates.
        </p>
      </div>
    </div>
  );
};
export default Hero;
