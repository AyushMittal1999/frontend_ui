import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/Store";

import "../public/mobile.css";
import "../public/style.css";

function Index() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

render(<Index />, document.getElementById("root"));
