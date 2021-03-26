var Today = React.memo(function Today(_ref) {
    var constants = _ref.constants,
        schedule = _ref.schedule;


    var meals = constants.MEALS;

    // Updating data to add Have ..... in meal ( breakfast ... .) 
    var data = meals.map(function (m) {
        return ["Have", schedule[m].join(", "), "in " + (m[0].toUpperCase() + m.substring(1))];
    });
    return React.createElement(
        "div",
        { id: "today-schedule" },
        React.createElement(Heading, { type: "2", child: { className: "today-schedule__major-heading" }, value: "Today's Diet Plan" }),
        React.createElement("hr", { className: "major__hr" }),
        React.createElement(Card, { classes: ["today-schedule__content", "today-schedule-content__image-holder", "today-schedule-content__ulcover"], data: data,
            img: { src: "../resources/images/diet.jpg", alt: "schedule-image" },
            ul: { className: "today-schedule-content__ul" } })
    );
}); //Rerender the day only if any update has happened and any update is there for the current day
// schedule props(reference i.e. only shallow compare required)  will be updated if any update has occured for a day