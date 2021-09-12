import { useEffect, useState } from "react";
import classes from "./OverviewDescription.module.css";
const OverviewDescription: React.FC<{ description: string }> = (props) => {
  const [showFull, setshowFull] = useState(false);
  const [longDesc, setLongDesc] = useState(false);
  useEffect(() => {
    if (props.description.length > 500) {
      setLongDesc(true);
    }
  }, []);

  return (
    <div className="description-container">
      <h2>Description</h2>
      {longDesc ? (
        <div>
          {showFull ? (
            <p className={classes["overview-description"]}>
              {props.description + " "}
              <span
                onClick={() => setshowFull(false)}
                className={classes["more-desc"]}
              >
                less
              </span>
            </p>
          ) : (
            <p className={classes["overview-description"]}>
              {props.description.substring(0, 500) + "... "}
              <span
                onClick={() => setshowFull(true)}
                className={classes["more-desc"]}
              >
                more
              </span>
            </p>
          )}
        </div>
      ) : (
        <p className={classes["overview-description"]}>{props.description}</p>
      )}
    </div>
  );
};
export default OverviewDescription;
