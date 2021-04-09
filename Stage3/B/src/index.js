function Index() {
  const WEEKDAYS = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const MEALS = ["breakfast", "lunch", "snacks", "dinner"];

  const constants = { WEEKDAYS, MEALS };
  const service = new Service(WEEKDAYS, MEALS);

  return (
    <React.StrictMode>
      <App dataService={service} constants={constants} />
    </React.StrictMode>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
