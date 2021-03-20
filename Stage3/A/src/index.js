

function Index() {

    var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    var meals = ["breakfast", "lunch", "snacks", "dinner"];

    var service = new Service(weekdays, meals);

    return React.createElement(
        React.StrictMode,
        null,
        React.createElement(App, { dataService: service })
    );
}

ReactDOM.render(React.createElement(Index, null), document.getElementById("root"));