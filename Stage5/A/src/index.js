import React from "react";
import { render } from "react-dom";
import App from "./App";
import "../src/mobile.css";
import "../src/style.css";
import AppContext from "./context/Context";
import useContextStateHook from "./context/ContextHook";

function Index() {
  const contextData = useContextStateHook();
  return (
    <React.StrictMode>
      <AppContext.Provider value={contextData}>
        <App />
      </AppContext.Provider>
    </React.StrictMode>
  );
}

render(<Index />, document.getElementById("root"));
