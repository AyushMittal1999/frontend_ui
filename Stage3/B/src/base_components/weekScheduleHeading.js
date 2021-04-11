const WeekScheduleHeading = React.memo(
  function WeekScheduleHeading({ displayModalHandler }) {
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
