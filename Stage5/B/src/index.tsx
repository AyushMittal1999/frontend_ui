import reportWebVitals from "./reportWebVitals";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
