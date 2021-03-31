import React, { memo } from "react";
import { connect } from "react-redux";
import { hideModal, showModal } from "../redux/Actioncreators";

const WeekScheduleHeading = memo(
  function WeekScheduleHeading({ displayModalHandler, ...rest }) {
    const handleClick = () => {
      displayModalHandler(true);
    };
    return (
      <div id="schedule-heading" {...rest}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    displayModalHandler: (show) => {
      if (show) {
        dispatch(showModal());
      } else dispatch(hideModal());
    },
  };
};
export default connect(null, mapDispatchToProps)(WeekScheduleHeading);
