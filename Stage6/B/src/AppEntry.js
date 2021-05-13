import AppContext from "./context/appContext/Context";
import useContextStateHook from "./context/appContext/ContextHook";
import App from "./App";
import {
  ThemeProvider,
  responsiveFontSizes,
  // unstable_createMuiStrictModeTheme as
  createMuiTheme,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
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

export default function AppEntry() {
  const contextData = useContextStateHook();
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={contextData}>
        <App />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
