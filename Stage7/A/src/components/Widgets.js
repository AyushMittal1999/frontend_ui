import {
  Divider,
  IconButton,
  InputBase,
  Paper,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import {
  AccessTime,
  CalendarToday,
  DirectionsRun,
  FitnessCenter,
  SaveAlt,
  Sync,
} from "@material-ui/icons";
import { memo, useContext, useEffect, useRef, useState } from "react";
import useCaloriesContextHook from "../context/caloriescontext/CaloriesContextHook";
import { WEEKDAYS } from "../constants/Constants";
import CaloriesContext from "../context/caloriescontext/CaloriesContext";

function TimeValue() {
  const [time, setTime] = useState(() => {
    const now = Date.now();
    return new Date(now).toLocaleTimeString("en-US");
  });

  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(
      () =>
        setTime(() => {
          const now = Date.now();
          return new Date(now).toLocaleTimeString("en-US");
        }),
      1000
    );

    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return <>{time}</>;
}

function DayValue() {
  const [day, setDay] = useState(() => {
    const now = Date.now();
    return new Date(now).getDay();
  });

  const timeout = useRef(null);

  useEffect(() => {
    const now = Date.now();
    const nextDate = new Date(now);
    nextDate.setDate(nextDate.getDate() + 1);
    nextDate.setHours(0);
    nextDate.setMinutes(0);
    nextDate.setSeconds(0);
    nextDate.setMilliseconds(0);
    timeout.current = setTimeout(
      () =>
        setDay(() => {
          const now = Date.now();
          return new Date(now).getDay();
        }),
      nextDate.getTime() - now
    );

    return () => {
      clearTimeout(timeout.current);
    };
  });

  const dayString = WEEKDAYS[(day - 1 + 7) % 7];
  return <>{dayString[0].toUpperCase() + dayString.substring(1)}</>;
}

function DateValue() {
  const [date, setDate] = useState(() => {
    let now = Date.now();
    now = new Date(now);

    return now.toDateString();
  });

  const timeout = useRef(null);

  useEffect(() => {
    const now = Date.now();
    const nextDate = new Date(now);
    nextDate.setDate(nextDate.getDate() + 1);
    nextDate.setHours(0);
    nextDate.setMinutes(0);
    nextDate.setSeconds(0);
    nextDate.setMilliseconds(0);

    timeout.current = setTimeout(
      () =>
        setDate(() => {
          let now = Date.now();
          now = new Date(now);

          return now.toDateString();
        }),
      nextDate.getTime() - now
    );

    return () => {
      clearTimeout(timeout.current);
    };
  });

  return <>{date}</>;
}

function WeekCalorieValue() {
  const context = useContext(CaloriesContext);

  if (!isNaN(context?.weeklyCalorie)) {
    return (
      <>
        {parseFloat(context.weeklyCalorie).toFixed(2)}
        <div className="inline-block ml-2 text-gray-400 text-base">
          kcal/day
        </div>
      </>
    );
  }
  return <>NA</>;
}

function CommonWidget({ title, comp, IconComp, detailComp, colorClass }) {
  return (
    <Paper
      elevation={5}
      className="w-88 xl:w-72 m-2 mt-11 max-w-full dark:bg-background-dark dark:text-white"
    >
      <div className="flex justify-between">
        <div
          elevation={4}
          className={`rounded shadow-md relative -m-5 ml-5 w-20 h-20 flex ${colorClass}`}
        >
          <IconComp className={`text-white  text-4xl font m-auto`} />
        </div>

        <div className="mt-3 mr-3">
          <Typography variant="h6" className="text-gray-500 text-right">
            {title}
          </Typography>
          <Typography variant="h5" className="text-right mr-0">
            {comp}
          </Typography>
        </div>
      </div>
      <div>
        <Divider className="mt-1" />
        {detailComp}
      </div>
    </Paper>
  );
}

function CustomInput({ val, onChange }) {
  return (
    <InputBase
      endAdornment={<div className="text-gray-400 text-lg">kcal</div>}
      inputProps={{
        type: "number",
        min: 0,
        max: 9999,
        className: "p-0 pr-2 text-right w-24",
      }}
      value={val.toString()}
      onChange={(e) => {
        if (!isNaN(e.target.value) && +e.target.value <= 9999) {
          onChange(e);
        }
      }}
      className="text-2xl"
      placeholder="0 to 9999"
    />
  );
}

function DayCaloriesWidget() {
  const context = useContext(CaloriesContext);

  const [val, setVal] = useState(() => context.todayCalorie);

  function validate(input) {
    if (isNaN(input)) {
      return false;
    }
    return +input <= 9999 && +input >= 0;
  }

  const DetailComp = (
    <div className="flex justify-between">
      <Typography variant="body1" className="text-gray-500 ml-2 p-2">
        Today Workout (0-9999)
      </Typography>

      {val !== context.todayCalorie ? (
        <Tooltip title="Click to save">
          <IconButton
            className="p-1 mr-2"
            onClick={() => {
              if (validate(val)) {
                context.updateCalorie(+val);
              }
            }}
          >
            <Sync />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip
          title={
            <div className="text-center">
              Updated!! <br /> Click On Value To Edit
            </div>
          }
        >
          <SaveAlt fontSize="large" className="p-1 m-auto mr-2 text-gray-300" />
        </Tooltip>
      )}
    </div>
  );
  return (
    <CommonWidget
      title="Workout"
      comp={
        <CustomInput
          val={val}
          onChange={(e) => {
            if (validate(e.target.value)) {
              setVal(+e.target.value);
            }
          }}
        />
      }
      IconComp={DirectionsRun}
      detailComp={DetailComp}
      colorClass="bg-gradient-to-b from-amber-400 to-amber-400"
    />
  );
}

function CaloriesWidgets() {
  const context = useCaloriesContextHook();

  return (
    <CaloriesContext.Provider value={context}>
      <DayCaloriesWidget />
      <CommonWidget
        title="Week Workout"
        comp={<WeekCalorieValue />}
        IconComp={FitnessCenter}
        detailComp={
          <Typography variant="body1" className="text-gray-500 ml-2 p-2">
            Last Seven Days Average
          </Typography>
        }
        colorClass="bg-gradient-to-b from-lime-400 to-lime-400"
      />
    </CaloriesContext.Provider>
  );
}

const Widgets = memo(function Widgets() {
  let showTime = useMediaQuery("(min-width:1024px)");
  showTime |= !useMediaQuery("(min-width:928px)");
  const showDay = useMediaQuery("(min-width:624px)");
  return (
    <div className="flex flex-row justify-around flex-wrap">
      {showDay ? (
        <CommonWidget
          title="Day"
          comp={<DayValue />}
          IconComp={CalendarToday}
          detailComp={
            <Typography variant="body1" className="text-gray-500 ml-2 p-2">
              <DateValue />
            </Typography>
          }
          colorClass="bg-gradient-to-b from-indigo-400 to-indigo-400"
        />
      ) : (
        <></>
      )}
      <CaloriesWidgets />
      {showTime && showDay ? (
        <CommonWidget
          title="Time"
          comp={<TimeValue />}
          IconComp={AccessTime}
          detailComp={
            <Typography variant="body1" className="text-gray-500 ml-2 p-2">
              <DateValue />
            </Typography>
          }
          colorClass="bg-gradient-to-b from-red-400 to-red-400"
        />
      ) : (
        <></>
      )}
    </div>
  );
});
export default Widgets;
