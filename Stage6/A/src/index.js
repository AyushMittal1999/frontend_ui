import React from "react";
import { render } from "react-dom";
import App from "./App";
import "../src/style.css";
import AppContext from "./context/Context";
import useContextStateHook from "./context/ContextHook";
import ErrorBoundary from "./helper/ErrorBoundary";
import {
  ThemeProvider,
  responsiveFontSizes,
  // unstable_createMuiStrictModeTheme as
  createMuiTheme,
} from "@material-ui/core/styles";

let theme = createMuiTheme({});
theme = responsiveFontSizes(theme);

function Index() {
  const contextData = useContextStateHook();
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <AppContext.Provider value={contextData}>
            <App />
          </AppContext.Provider>
        </ThemeProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

render(<Index />, document.getElementById("root"));
