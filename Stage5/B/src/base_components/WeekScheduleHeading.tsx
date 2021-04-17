import React, { memo, useContext } from "react";
import AppContext from "../context/Context";

interface InputProps {
  displayModalHandler(show: boolean): void;
}
const WeekScheduleHeading = memo(
  function WeekScheduleHeading({ displayModalHandler }: InputProps) {
    const handleClick = () => {
      displayModalHandler(true);
    };
    return (
      <div id="schedule-heading">
        <div className="schedule-heading__elem1">
          <h2 className=" h__inline schedule-heading__major-heading">
            Weekly Schedule
          </h2>
          <button className="btn btn__submit btn--right" onClick={handleClick}>
            Edit Schedule
          </button>
        </div>
        <hr className="major__hr"></hr>
      </div>
    );
  },
  () => true
); // Heading to be remain same no rerendering required

export default function WeekScheduleHeadingWithContext() {
  const context = useContext(AppContext);
  if (context)
    return <WeekScheduleHeading displayModalHandler={context.updateModal} />;
  else return <></>;
}
