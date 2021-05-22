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
import { THEME_KEY } from "./constants/Constants";

export default function AppEntry() {
  const contextData = useContextStateHook();
  const [isDark, setIsDark] = useState(() => {
    let savedTheme = "light";
    try {
      savedTheme = localStorage.getItem(THEME_KEY);
    } catch (e) {}
    document.documentElement.classList.add(
      savedTheme === "dark" ? "dark" : "light"
    );
    return savedTheme === "dark";
  });
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
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={contextData}>
        <App setIsDark={setIsDark} />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
