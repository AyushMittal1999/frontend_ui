import React from "react";
import Heading from "./base components/Heading";
import Modal from "./components/Modal";
import Weekday from "./components/Weekday";
import Today from "./components/Today";
import Status from "./base components/Status";
import WeekScheduleHeading from "./base components/WeekScheduleHeading";
import { WEEKDAYS } from "./constants/Constants";

const App = React.memo(function App() {
  const weekdays = WEEKDAYS;
  const todayDay = weekdays[(new Date().getDay() - 1 + 7) % 7];

  return (
    <React.Fragment>
      <Heading type="1" id="main-heading" value="Diet Plan" />

      <Modal />

      <Today day={todayDay} />

      {/* // Separate component for schedule heading to compensate button in heading  */}
      <WeekScheduleHeading />

      {weekdays
        .slice(weekdays.indexOf(todayDay), 7)
        .concat(weekdays.slice(0, weekdays.indexOf(todayDay)))
        .map((w) => {
          return <Weekday day={w} key={w} />;
        })}

      <Status />
    </React.Fragment>
  );
});

export default App;
