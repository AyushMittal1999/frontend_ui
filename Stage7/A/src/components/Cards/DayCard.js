import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Paper,
  Typography,
  Zoom,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import ScheduleIcon from "@material-ui/icons/Schedule";
import React, { memo } from "react";
import { MEALS, TIME, WEEKDAYS } from "../../constants/Constants";
import ListComp from "../List/List";
import LazyChipWrapper from "../../helper/Chip/LazyChipWrapper";
import {
  BreakfastIcon,
  LunchIcon,
  SnacksIcon,
  DinnerIcon,
} from "../../helper/LazyIcons";
import Chip from "../../helper/Chip/LazyChip";
import PropTypes from "prop-types";

function setCardFocus(e) {
  // Only focus for tab elements
  /*   e.target.closest(".MuiTabs-scroller.MuiTabs-scrollable").scrollLeft =
    e.target.closest('div[role="tab"]').offsetLeft - 20; */
  const scroller = e.target.closest(".MuiTabs-scroller.MuiTabs-scrollable");
  const tab = e.target.closest('[role="tab"]');
  if (scroller.scrollLeft > tab.offsetLeft - 15)
    scroller.scrollLeft = tab.offsetLeft - 15;
  else if (
    scroller.scrollLeft + scroller.offsetWidth <
    tab.offsetLeft + 15 + tab.offsetWidth
  )
    scroller.scrollLeft =
      -scroller.offsetWidth + tab.offsetLeft + tab.offsetWidth + 15;
}

const DayCard = memo(function DayCard({ day, meal }) {
  const index = MEALS.indexOf(meal);
  const theme = useTheme();

  return (
    <Card
      className="flex flex-1 flex-row h-105 min-w-100 xs:min-w-11/12 m-4.5 rounded-4xl focus:h-110 focus:outline-none dark:bg-background-dark dark:text-white"
      onFocus={setCardFocus}
      tabIndex={1}
      role="tab"
      raised
    >
      <CardContent className="w-full">
        <Paper
          elevation={0}
          className={`h-28/100 w-full flex justify-end rounded-t-none rounded-b-3xl flex-col ${
            "bg" + index.toString()
          }`}
        >
          {/* Rendering Avatar cooresponding to each type of meal */}
          <Avatar className="bg-white -mb-6 h-16 w-18 dark:bg-background-dark">
            {index === 0 ? (
              <BreakfastIcon className="text-5xl" fontSize="large" />
            ) : index === 1 ? (
              <LunchIcon className="text-5xl" fontSize="large" />
            ) : index === 2 ? (
              <SnacksIcon className="text-5xl" fontSize="large" />
            ) : (
              <DinnerIcon className="text-5xl" fontSize="large" />
            )}
          </Avatar>
        </Paper>

        {/* animation to show on component mounting */}
        <Zoom in={true} timeout={1200} style={{ transitionDelay: "300ms" }}>
          <Typography className="mt-6" gutterBottom variant="h5">
            {MEALS[index][0].toUpperCase() +
              MEALS[index].substr(1).toLowerCase()}
          </Typography>
        </Zoom>

        <Divider className="mb-3" />
        {/* animation to show on component mounting */}
        <Zoom in={true} timeout={1200} style={{ transitionDelay: "300ms" }}>
          {/* Chip is Dynamically Loaded So, for Suspense Wrapper lazy ChiWrapper is useTodayCardStyles */}
          <LazyChipWrapper>
            <Chip
              clickable={theme?.palette?.type !== "dark" ? true : false}
              variant="outlined"
              color="primary"
              icon={<ScheduleIcon />}
              label={TIME[index]}
              className="text-lime-600 border-lime-600 ml-1 dark:bg-lime-600 dark:text-gray-200"
            />
          </LazyChipWrapper>
        </Zoom>

        <ListComp type="weekday" day={day} meal={meal}></ListComp>
      </CardContent>
    </Card>
  );
});

DayCard.propTypes = {
  day: PropTypes.oneOf(WEEKDAYS).isRequired,
  meal: PropTypes.oneOf(MEALS).isRequired,
};

export default DayCard;
