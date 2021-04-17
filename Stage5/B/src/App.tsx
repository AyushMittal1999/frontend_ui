import React, { memo, useContext } from "react";
import Heading from "./base_components/Heading";
import Modal from "./components/Modal";
import Weekday from "./components/Weekday";
import Today from "./components/Today";
import Status from "./base_components/Status";
import WeekScheduleHeading from "./base_components/WeekScheduleHeading";
import { WEEKDAYS } from "./constants/Constants";
import { StatusVisiblity } from "./constants/genericTypes";
import AppContext from "./context/Context";

interface AppProps {
  statusVisiblity: StatusVisiblity;
  statusMessage: string;
  modalVisiblity: boolean;
}

const App = memo(function App({
  statusVisiblity,
  statusMessage,
  modalVisiblity,
}: AppProps) {
  let weekdays = WEEKDAYS;
  const todayDay = weekdays[(new Date().getDay() - 1 + 7) % 7];
  return (
    <React.Fragment>
      <Heading htype={1} id="main-heading" value="Diet Plan" />

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
}); // memo with default shallow comparator

const AppWithContext = (): JSX.Element => {
  const context = useContext(AppContext);
  if (context)
    return (
      <App
        modalVisiblity={context.modalVisiblity}
        statusVisiblity={context.status.visiblity}
        statusMessage={context.status.message}
      ></App>
    );

  return <></>;
};
export default AppWithContext;
