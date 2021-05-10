import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Paper,
  Typography,
  Zoom,
} from "@material-ui/core";

import ScheduleIcon from "@material-ui/icons/Schedule";
import { makeStyles } from "@material-ui/core/styles";
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
import { StyledChip } from "../../helper/Chip/LazyChip";
import PropTypes from "prop-types";

const background = [
  `linear-gradient(to bottom, #ff5722, rgb(222 178 113 / 46%))`,
  `linear-gradient(#8bc34a, rgb(164 215 166 / 40%))`,
  `linear-gradient(#ff9800, rgb(219 212 151 / 41%))`,
  `linear-gradient(#673ab7, rgb(159 131 207 / 45%))`,
];

const useStyles = makeStyles({
  card: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    height: "414px",
    minWidth: "min(400px , 87% )",
    margin: "20px",
    // marginLeft: "0px",
    borderRadius: "30px 30px 30px 30px",
    "&:focus": {
      height: "440px",
      outline: "unset",
    },
  },

  cardContent: {
    width: "100%",
    // flex: 5,
    // paddingLeft: "5%",
  },

  cardImage: {
    height: "28%",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    borderRadius: "0px 0px 20px 20px",
    flexDirection: "column",
  },

  // Different background images for card
  cardImageBackground0: {
    backgroundImage: background[0],
  },
  cardImageBackground1: {
    backgroundImage: background[1],
  },
  cardImageBackground2: {
    backgroundImage: background[2],
  },
  cardImageBackground3: {
    backgroundImage: background[3],
  },
  icon: { fontSize: "2.7rem" },
  avatar: {
    backgroundColor: "white",
    marginBottom: "-25px",
    height: "61px",
    width: "70px",
  },
  typography: {
    marginTop: "25px",
  },
  divider: {
    marginBottom: "10px",
  },
});

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
  const classes = useStyles();

  const index = MEALS.indexOf(meal);

  return (
    <Card
      className={classes.card}
      onFocus={setCardFocus}
      tabIndex={1}
      role="tab"
      raised
    >
      <CardContent className={classes.cardContent}>
        <Paper
          elevation={0}
          className={`${classes.cardImage} ${
            classes["cardImageBackground" + index]
          }`}
        >
          {/* Rendering Avatar cooresponding to each type of meal */}
          <Avatar className={classes.avatar}>
            {index === 0 ? (
              <BreakfastIcon className={classes.icon} fontSize="large" />
            ) : index === 1 ? (
              <LunchIcon className={classes.icon} fontSize="large" />
            ) : index === 2 ? (
              <SnacksIcon className={classes.icon} fontSize="large" />
            ) : (
              <DinnerIcon className={classes.icon} fontSize="large" />
            )}
          </Avatar>
        </Paper>

        {/* animation to show on component mounting */}
        <Zoom in={true} timeout={1200} style={{ transitionDelay: "300ms" }}>
          <Typography className={classes.typography} gutterBottom variant="h5">
            {MEALS[index][0].toUpperCase() +
              MEALS[index].substr(1).toLowerCase()}
          </Typography>
        </Zoom>

        <Divider className={classes.divider} />
        {/* animation to show on component mounting */}
        <Zoom in={true} timeout={1200} style={{ transitionDelay: "300ms" }}>
          {/* Chip is Dynamically Loaded So, for Suspense Wrapper lazy ChiWrapper is useTodayCardStyles */}
          <LazyChipWrapper>
            <StyledChip
              clickable
              variant="outlined"
              color="primary"
              icon={<ScheduleIcon />}
              label={TIME[index]}
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
