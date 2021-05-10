import React, { memo } from "react";
import { MEALS, WEEKDAYS } from "../constants/Constants";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { Typography, Tab, Tabs, Card } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  BreakfastIcon,
  LunchIcon,
  SnacksIcon,
  DinnerIcon,
} from "../helper/LazyIcons";
import TodayCard from "./Cards/TodayCard";

// Styling Component separately to acces deep child components of the third party component
const tabStyles = (theme) => ({
  wrapper: {
    flexDirection: "row",
  },
  root: {
    width: "25%",
    maxWidth: "unset",
    minWidth: "250px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      minWidth: "unset",
      borderLeft: "1px solid black",
      borderRight: "1px solid black",
    },
  },
});

const tabsStyles = (theme) => ({
  flexContainer: {
    width: "100%",
    margin: "auto",
  },
  scrollButtonsDesktop: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
  root: {
    backgroundImage: "linear-gradient(#e9dd71, rgba(230, 239, 126, 0.86))",
  },
});

const StyledTab = withStyles(tabStyles)(Tab);
const StyledTabs = withStyles(tabsStyles)(Tabs);

const useStyles = makeStyles((theme) => ({
  todayWrapper: { marginTop: "30px" },
  card: {
    borderRadius: "40px",
    paddingBottom: "20px",
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "97%",
    },
  },
  tabIndicatorProps: {
    background: theme.palette.background.paper,
  },
  styledTabExtraDesign: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Today = memo(function Today({ day }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.todayWrapper}>
      <Typography align="center" gutterBottom variant="h3">
        Today Schedule
      </Typography>
      <Card elevation={3} className={classes.card}>
        <StyledTabs
          selectionFollowsFocus={true}
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            className: classes.tabIndicatorProps,
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {MEALS.map((item, index) => {
            return (
              <StyledTab
                key={item}
                disableRipple
                className={
                  index === value ? classes.styledTabExtraDesign : undefined
                }
                icon={
                  index === 0 ? (
                    <BreakfastIcon fontSize="large" />
                  ) : index === 1 ? (
                    <LunchIcon fontSize="large" />
                  ) : index === 2 ? (
                    <SnacksIcon fontSize="large" />
                  ) : (
                    <DinnerIcon fontSize="large" />
                  )
                }
                label={
                  <Typography variant="h6" style={{ marginLeft: "10px" }}>
                    {item}
                  </Typography>
                }
              />
            );
          })}
        </StyledTabs>
        {/* Using third party library for swipeable effect */}
        <SwipeableViews
          enableMouseEvents={true}
          onChangeIndex={(ind) => {
            setValue(ind);
          }}
          containerStyle={{
            transition: "transform 0.8s cubic-bezier(0.15, 0.3, 0.25, 1) 0s",
          }}
          springConfig={{
            duration: "0.8s",
            easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
            delay: "0s",
          }}
          index={value}
        >
          {MEALS.map((m, ind) => (
            <TodayCard
              key={m}
              day={day}
              meal={m}
              visible={ind === value}
              index={ind}
            />
          ))}
        </SwipeableViews>
      </Card>
    </div>
  );
});

Today.propTypes = {
  day: PropTypes.oneOf(WEEKDAYS).isRequired,
};

export default Today;
