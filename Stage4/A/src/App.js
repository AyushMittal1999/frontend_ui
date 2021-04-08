import React from "react";
import Heading from "./base_components/Heading";
import Modal from "./components/Modal";
import Weekday from "./components/Weekday";
import Today from "./components/Today";
import Status from "./base_components/Status";
import WeekScheduleHeading from "./base_components/WeekScheduleHeading";
import { WEEKDAYS } from "./constants/Constants";
import PropType from "prop-types";
import { connect } from "react-redux";

const App = function App({ statusVisiblity, statusMessage, modalVisiblity }) {
  let weekdays = WEEKDAYS;
  const todayDay = weekdays[(new Date().getDay() - 1 + 7) % 7];
  return (
    <React.Fragment>
      <Heading type="1" id="main-heading" value="Diet Plan" />

      {modalVisiblity ? <Modal /> : <></>}

      <Today day={todayDay} />

      {/* // Separate component for schedule heading to compensate button in heading  */}
      <WeekScheduleHeading />

      {weekdays
        .slice(weekdays.indexOf(todayDay), 7)
        .concat(weekdays.slice(0, weekdays.indexOf(todayDay)))
        .map((w) => {
          return <Weekday day={w} key={w} />;
        })}

      {statusVisiblity !== -1 ? (
        <Status statusVisiblity={statusVisiblity} message={statusMessage} />
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};

App.protoTypes = {
  statusVisiblity: PropType.oneOf([1, -1, 0]).isRequired, // Require only 1 , 0 , -1 values to valid
  modalVisiblity: PropType.bool.isRequired,
  statusMessage: PropType.string,
};

export default connect(({ status, modalVisiblity }) => {
  return {
    statusVisiblity: status.visiblity,
    statusMessage: status.message,
    modalVisiblity,
  };
}, null)(App);
