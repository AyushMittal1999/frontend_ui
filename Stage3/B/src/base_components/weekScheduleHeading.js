var WeekScheduleHeading = React.memo(function WeekScheduleHeading(_ref) {
  var displayModalHandler = _ref.displayModalHandler;

  var handleClick = function handleClick() {
    displayModalHandler(true);
  };

  return React.createElement(
    "div",
    { id: "schedule-heading" },
    React.createElement(
      "div",
      { className: "schedule-heading__elem1" },
      React.createElement(
        "h2",
        { className: " h__inline schedule-heading__major-heading" },
        "Weekly Schedule"
      ),
      React.createElement(
        "button",
        { className: "btn btn__submit btn--right", onClick: handleClick },
        "Edit Schedule"
      )
    ),
    React.createElement("hr", { className: "major__hr" })
  );
}, function () {
  return true;
}); // Heading to be remain same no rerendering required