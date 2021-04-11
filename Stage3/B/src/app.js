function App({ dataService, constants }) {
  let weekdays = constants.WEEKDAYS;

  const [isModalVisible, setIsModalVisible] = React.useState(() => false);

  // success, fail, none etc
  const [statusVisiblity, setStatusVisiblity] = React.useState(-1);

  const prevTimeOut = React.useRef();

  const updateData = function (day, meal, foodItems) {
    if (dataService.updateMeal(day, meal, foodItems)) {
      // Hide Modal
      setIsModalVisible(false);
      //IF previous timeout exist remove it
      if (prevTimeOut.current) {
        clearTimeout(prevTimeOut.current);
      }
      // Show sucess status
      setStatusVisiblity(1);
      // Hide status after 2 sec
      prevTimeOut.current = setTimeout(setStatusVisiblity, 2000, -1);
      // Return 1 to modal to clear modal fields
      return 1;
    } else {
      // UNSUCESS - UPDATE
      console.log("error occureed");

      //IF previous timeout exist remove it
      if (prevTimeOut.current) {
        clearTimeout(prevTimeOut.current);
      }

      // Show sucess status
      setStatusVisiblity(0);
      // Hide status after 2 sec
      prevTimeOut.current = setTimeout(setStatusVisiblity, 2000, -1);

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
          constants={constants}
          visiblity={isModalVisible}
          displayModalHandler={setIsModalVisible}
          updateData={updateData}
        />
      ) : (
        <React.Fragment></React.Fragment>
      )}

      <Today
        constants={constants}
        schedule={dataService.getDayData(todayDay)}
      />

      {/* // Separate component for schedule heading to compensate button in heading  */}
      <WeekScheduleHeading displayModalHandler={setIsModalVisible} />

      {weekdays
        .slice(weekdays.indexOf(todayDay), 7)
        .concat(weekdays.slice(0, weekdays.indexOf(todayDay)))
        .map((w) => {
          return (
            <Weekday
              day={w}
              key={w}
              constants={constants}
              schedule={dataService.getDayData(w)}
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
