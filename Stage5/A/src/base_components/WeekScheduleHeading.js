import React, { memo, useContext } from "react";
import AppContext from "../context/Context";

const WeekScheduleHeading = memo(function WeekScheduleHeading({
  displayModalHandler,
}) {
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
}); // Heading will rerender only if displayhandler changes

export default function WeekScheduleHeadingWithContext() {
  const { updateModal } = useContext(AppContext);
  return <WeekScheduleHeading displayModalHandler={updateModal} />;
}
