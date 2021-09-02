import classes from "./HomeContainer.module.css";
const HomeContainer: React.FC = (props) => {
  return <div className={classes["home-container"]}>{props.children}</div>;
};
export default HomeContainer;
