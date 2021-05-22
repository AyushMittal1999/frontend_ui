import React, { memo, useContext, useState } from "react";
import PropTypes from "prop-types";
import Today from "./components/Today";
import { WEEKDAYS } from "./constants/Constants";
import AppContext from "./context/appContext/Context";
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
import Widgets from "./components/Widgets";

const Weekday = React.lazy(() =>
  import("./components/Weekday").then(async function (m) {
    return m;
  })
);

const useStyles = makeStyles((theme) => ({
  // Inherit fontSize from material ui theme
  mainIcon: {
    ...theme.typography.h2,
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
      <AppBar
        position="sticky"
        className="bg-brand text-gray-900 px-1 py-0 justify-center"
      >
        <Toolbar className="p-2">
          <TitleIcon fontSize="large" className={`${classes.mainIcon} m-1`} />
          <Typography className="flex-1 p-4 pl-1 font-semibold" variant="h4">
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
                <Typography className="sm:hidden" variant="button">
                  {pending === false ? "Nothing to Save" : "Save Changes"}
                </Typography>
              </Button>
            </span>
          </Tooltip>
        </Toolbar>
      </AppBar>
      {/* // Wrapper to Wrap Non Appbar coponents */}
      <div className="m-2 mt-0">
        <div className="flex lg:flex-col max-w-full">
          <div className="w-min min-w-0 lg:w-full px-7 xl:p-0">
            <Widgets />
          </div>
          <div className="flex-1 min-w-0 m-auto max-w-full">
            <Today day={todayDay} />
          </div>
        </div>

        <Typography className="mt-6" align="center" gutterBottom variant="h3">
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
  if (context?.pendingUpdates && context?.refreshlocalStorage)
    return (
      <App
        refreshLocal={context.refreshlocalStorage}
        pending={context.pendingUpdates.size > 0}
      ></App>
    );

  return <></>;
});

export default AppWithContext;
