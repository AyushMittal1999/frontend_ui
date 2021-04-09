function App({ dataService }) {
  let weekdays = dataService.WEEKDAYS;

  const [isModalVisible, setIsModalVisible] = React.useState(() => false);

  const [statusVisiblity, setStatusVisiblity] = React.useState(-1);

  const [updateRequest, setUpdateRequest] = React.useState(() => {
    return { specificDayUpdate: "no", specificMealUpdate: "no", requestID: 0 };
  });
  // initialaizse  specificDayUpdate, specificDayUpdate with any random string to make unequal to any meal or day
  const updateData = function (day, meal, foodItems) {
    if (dataService.updateMeal(day, meal, foodItems)) {
      // Hide Modal
      setIsModalVisible(false);
      // Update the data
      setUpdateRequest((prevProp) => {
        return {
          requestID: 1 - prevProp.requestID,
          specificDayUpdate: day,
          specificMealUpdate: meal,
        };
      });
      // Show sucess status
      setStatusVisiblity(1);
      // Hide status after 2 sec
      setTimeout(setStatusVisiblity, 2000, -1);
      // Return 1 to modal to clear modal fields
      return 1;
    } else {
      // UNSUCESS - UPDATE
      console.log("error occureed");

      // Show sucess status
      setStatusVisiblity(0);
      // Hide status after 2 sec
      setTimeout(setStatusVisiblity, 2000, -1);

      // Not changing Modal state on unsuccessful updae to let user make edit in modal
      // Return 0 to not clear fields
      return 0;
    }
  };

  const todayDay = weekdays[(new Date().getDay() - 1 + 7) % 7];

  return (
    <React.Fragment>
      <Heading type="1" id="main-heading" value="Diet Plan" />

      {isModalVisible ? (
        <Modal
          meals={dataService.MEALS}
          weekdays={dataService.WEEKDAYS}
          displayModalHandler={setIsModalVisible}
          updateData={updateData}
        />
      ) : (
        <React.Fragment></React.Fragment>
      )}

      <Today day={todayDay} dataService={dataService} {...updateRequest} />

      {/* // Different component for schedule heading to compensate button in heading  */}
      <WeekScheduleHeading displayModalHandler={setIsModalVisible} />

      {weekdays
        .slice(weekdays.indexOf(todayDay), 7)
        .concat(weekdays.slice(0, weekdays.indexOf(todayDay)))
        .map((w) => {
          return (
            <Weekday
              day={w}
              key={w}
              dataService={dataService}
              {...updateRequest}
            />
          );
        })}

      {statusVisiblity !== -1 ? (
        <Status isSuccess={statusVisiblity} />
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  );
}
