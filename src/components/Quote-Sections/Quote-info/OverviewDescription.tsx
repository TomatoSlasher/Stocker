import classes from "./OverviewDescription.module.css";
const OverviewDescription: React.FC<{ description: string }> = (props) => {
  return (
    <div className="description-container">
      <h2>Description</h2>
      <p className={classes["overview-description"]}>
        {props.description.substring(0, 500)}
      </p>
    </div>
  );
};
export default OverviewDescription;
