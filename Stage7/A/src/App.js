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
  FormControlLabel,
  Switch,
  Paper,
  useMediaQuery,
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

const App = memo(function App({ pending, refreshLocal, setIsDark }) {
  const todayDay = WEEKDAYS[(new Date().getDay() - 1 + 7) % 7];

  const classes = useStyles();
  const smallScreen = useMediaQuery("(max-width:600px)");

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
        className="bg-brand dark:bg-brand-lightDark text-gray-900 px-1 py-0 justify-center"
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
                color="secondary"
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
          <Paper className="ml-2 p-1 pl-3 sm:p-0 sm:pl-2 bg-gray-100 bg-transparent dark:bg-background-dark">
            <FormControlLabel
              control={
                <Switch
                  onChange={(e) => {
                    setIsDark(e.target.checked);
                    document.documentElement.classList.replace(
                      e.target.checked ? "light" : "dark",
                      e.target.checked ? "dark" : "light"
                    );
                  }}
                />
              }
              size={smallScreen ? "small" : ""}
              label={smallScreen ? undefined : "DarkMode"}
            />
          </Paper>
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
  setIsDark: PropTypes.func.isRequired,
};

// App component With context to prevent unncessary render on context change
const AppWithContext = memo(function AppWithContext({ setIsDark }) {
  const context = useContext(AppContext);
  if (context?.pendingUpdates && context?.refreshlocalStorage)
    return (
      <App
        refreshLocal={context.refreshlocalStorage}
        pending={context.pendingUpdates.size > 0}
        setIsDark={setIsDark}
      ></App>
    );

  return <></>;
});

export default AppWithContext;
