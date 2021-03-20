var Weekday = React.memo(function Weekday(_ref) {
    var day = _ref.day,
        dataService = _ref.dataService,
        specificMealUpdate = _ref.specificMealUpdate;


    var meals = dataService.MEALS;

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
                    return React.createElement(Card, { key: m, classes: ["card " + m, "card__image-holder", "card__text-holder"], img: { src: "../resources/images/" + m + ".jpg", alt: m }, data: dataService.getMealData(day, m),
                        rerender: specificMealUpdate && specificMealUpdate != m ? 0 : 1 }); // Skip card rerendering if some other meal is updated
                })
            ),
            React.createElement(
                "div",
                { className: "day-schedule__two-card-group" },
                meals.slice(2, 4).map(function (m) {
                    return React.createElement(Card, { key: m, classes: ["card " + m, "card__image-holder", "card__text-holder"], img: { src: "../resources/images/" + m + ".jpg", alt: m }, data: dataService.getMealData(day, m),
                        rerender: specificMealUpdate && specificMealUpdate != m ? 0 : 1 }); // Skip card rerendering if some other meal is updated
                })
            )
        )
    );
}, function (prevProp, curProp) {
    return !(curProp.requestID !== prevProp.requestID && curProp.specificDayUpdate === curProp.day);
}); //Rerender the day only if any update has happened and any update is there for the current day