import AppContext from "./context/appContext/Context";
import useContextStateHook from "./context/appContext/ContextHook";
import App from "./App";
import {
  ThemeProvider,
  responsiveFontSizes,
  // unstable_createMuiStrictModeTheme as
  createMuiTheme,
} from "@material-ui/core/styles";
import { useState } from "react";

export default function AppEntry() {
  const contextData = useContextStateHook();
  const [isDark, setIsDark] = useState(false);
  let theme = createMuiTheme({
    palette: {
      type: isDark ? "dark" : "light",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 640,
        lg: 768,
        xl: 1280,
        "2xl": 1535,
      },
    },
  });
  theme = responsiveFontSizes(theme);
  document.documentElement.classList.add("light");
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={contextData}>
        <App setIsDark={setIsDark} />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
