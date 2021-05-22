import React, { memo, useContext, useState } from "react";
import PropTypes from "prop-types";
import Today from "./components/Today";
import { WEEKDAYS } from "./constants/Constants";
import AppContext from "./context/Context";
import SnackBar from "./components/Snackbar";
import {
  AppBar,
  Typography,
  Toolbar,
  Tooltip,
  Button,
} from "@material-ui/core";

import TitleIcon from "./custom_icons/TitleIcon";
import { makeStyles } from "@material-ui/core/styles";
import { Save } from "@material-ui/icons";
import { Suspense } from "react";
import { Skeleton } from "@material-ui/lab";

const Weekday = React.lazy(() =>
  import("./components/Weekday").then(async function (m) {
    return m;
  })
);

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#e9dd71",
    color: "unset",
    // backgroundImage: "linear-gradient(#fff937f0, #fff494d1)",
    // backgroundImage:
    //   "linear-gradient(rgb(227 244 62), rgba(230, 239, 126, 0.86))",
    height: "fit-content",
    padding: "4px 0px",
    justifyContent: "center",
  },
  mainHeading: {
    flex: 1,
    padding: "8px",
    paddingLeft: "2px",
    fontWeight: "bold",
  },
  mainIcon: {
    ...theme.typography.h3,
  },
  updateButton: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  weekScheduleHeading: {
    marginTop: "40px",
  },
  wrapperDiv: {
    margin: "8px",
  },
}));

const App = memo(function App({ pending, refreshLocal }) {
  const todayDay = WEEKDAYS[(new Date().getDay() - 1 + 7) % 7];

  const classes = useStyles();

  // State for Snackbar Visiblity and message
  const [alert, setAlert] = useState(() => ({
    open: false,
    type: "",
    message: "",
  }));

  function handleSaveButton() {
    // If data saved succesfully at local storage show success message
    if (refreshLocal()) {
      setAlert({
        open: true,
        type: "success",
        message: "Update Succesfull !!",
      });
    }
    // Show Error Message
    else {
      setAlert({
        open: true,
        type: "error",
        message: "Update Falied ! Try Later",
      });
    }
  }
  return (
    <React.Fragment>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <TitleIcon fontSize="large" className={classes.mainIcon} />
          <Typography className={classes.mainHeading} variant="h4">
            Diet Plan !!
          </Typography>

          <Tooltip
            interactive
            arrow
            title={
              pending === false
                ? "No Changes to Save"
                : "Click to save data to get it next time you visit"
            }
          >
            {/* Span to show tooltip for disabled button */}
            <span>
              <Button
                onClick={handleSaveButton}
                disabled={pending === false}
                color="primary"
                variant="contained"
                size="large"
                startIcon={<Save />}
              >
                <Typography className={classes.updateButton} variant="button">
                  {pending === false ? "Nothing to Save" : "Save Changes"}
                </Typography>
              </Button>
            </span>
          </Tooltip>
        </Toolbar>
      </AppBar>
      {/* // Wrapper to Wrap Non Appbar coponents */}
      <div className={classes.wrapperDiv}>
        <Today day={todayDay} />
        <Typography
          className={classes.weekScheduleHeading}
          align="center"
          gutterBottom
          variant="h3"
        >
          Weekly Schedule
        </Typography>
        {WEEKDAYS.map((w) => {
          return (
            <Suspense
              key={w}
              fallback={<Skeleton variant="rect" width="100%" />}
            >
              <Weekday day={w} key={w} />
            </Suspense>
          );
        })}
        <SnackBar
          type={alert.type}
          message={alert.message}
          open={alert.open}
          onClose={() => setAlert((prev) => ({ ...prev, open: false }))}
        />
      </div>
    </React.Fragment>
  );
});

App.propTypes = {
  pending: PropTypes.bool.isRequired,
  refreshLocal: PropTypes.func.isRequired,
};

// App component With context to prevent unncessary render on context change
const AppWithContext = memo(function AppWithContext() {
  const context = useContext(AppContext);
  if (context && context.pendingUpdates && context.refreshlocalStorage)
    return (
      <App
        refreshLocal={context.refreshlocalStorage}
        pending={context.pendingUpdates.size > 0}
      ></App>
    );

  return <></>;
});

export default AppWithContext;
