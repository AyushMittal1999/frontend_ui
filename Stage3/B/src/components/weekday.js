var Weekday = React.memo(function Weekday(_ref) {
  var day = _ref.day,
      constants = _ref.constants,
      schedule = _ref.schedule;

  var meals = constants.MEALS;

  // console.log( "weekday ", day );
  return React.createElement(
    "div",
    { id: day },
    React.createElement(
      "h2",
      { className: day + "__minor-heading" },
      day[0].toUpperCase() + day.substring(1),
      " "
    ),
    React.createElement("hr", null),
    React.createElement(
      "section",
      { className: day + "-schedule__card-holder" },
      React.createElement(
        "div",
        { className: "day-schedule__two-card-group" },
        meals.slice(0, 2).map(function (m) {
          return React.createElement(Card, {
            key: m,
            classes: ["card " + m, "card__image-holder", "card__text-holder"],
            imgAttributes: { src: "../resources/images/" + m + ".jpg", alt: m },
            data: schedule[m],
            compareDataOnly: 1
          });
        })
      ),
      React.createElement(
        "div",
        { className: "day-schedule__two-card-group" },
        meals.slice(2, 4).map(function (m) {
          return React.createElement(Card, {
            key: m,
            classes: ["card " + m, "card__image-holder", "card__text-holder"],
            imgAttributes: { src: "../resources/images/" + m + ".jpg", alt: m },
            data: schedule[m],
            compareDataOnly: 1
          });
        })
      )
    )
  );
}); //Rerender the day only if any update has happened to any of its props
// schedule props(reference i.e. only shallow compare required)  will be updated if any update has occured for a day