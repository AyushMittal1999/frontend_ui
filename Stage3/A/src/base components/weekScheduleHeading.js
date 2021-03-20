function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var WeekScheduleHeading = React.memo(function WeekScheduleHeading(_ref) {
    var displayModalHandler = _ref.displayModalHandler,
        rest = _objectWithoutProperties(_ref, ["displayModalHandler"]);

    var handleClick = function handleClick() {
        displayModalHandler(true);
    };

    return React.createElement(
        "div",
        Object.assign({ id: "schedule-heading" }, rest),
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