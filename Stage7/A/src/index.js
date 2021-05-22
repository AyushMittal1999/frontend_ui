import React from "react";
import { render } from "react-dom";
import "../src/style.css";
import "../src/index.css";
import ErrorBoundary from "./helper/ErrorBoundary";
import { StylesProvider } from "@material-ui/core/styles";
import AppEntry from "./AppEntry";

function Index() {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <StylesProvider injectFirst>
          <AppEntry />
        </StylesProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

render(<Index />, document.getElementById("root"));
