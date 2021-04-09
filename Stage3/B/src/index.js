function Index() {
  var WEEKDAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  var MEALS = ["breakfast", "lunch", "snacks", "dinner"];

  var constants = { WEEKDAYS: WEEKDAYS, MEALS: MEALS };
  var service = new Service(WEEKDAYS, MEALS);

  return React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, { dataService: service, constants: constants })
  );
}

ReactDOM.render(React.createElement(Index, null), document.getElementById("root"));