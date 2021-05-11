import { withStyles } from "@material-ui/core";
import React from "react";

const Chip = React.lazy(() => {
  const m = import("@material-ui/core/Chip");

  const newModule = m.then(async function (module) {
    // await new Promise((resolve) => {
    //   setTimeout(resolve, 5000);
    // });
    return module;
  });
  return newModule;
});

const StyledChip = React.lazy(() => {
  const m = import("@material-ui/core/Chip");
  const newModule = m.then(async function (module) {
    const StyledChip = withStyles((theme) => ({
      root: {
        borderColor: "green",
        color: "green",
        marginLeft: "5px",
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
    }))(module.default);

    return { default: StyledChip };
  });
  return newModule;
});

const StyledChipDayCard = React.lazy(() => {
  const m = import("@material-ui/core/Chip");
  const newModule = m.then(async function (module) {
    const StyledChip = withStyles((theme) => ({
      root: {
        borderColor: "green",
        color: "green",
        marginLeft: "5px",
      },
    }))(module.default);

    return { default: StyledChip };
  });
  return newModule;
});

export { StyledChip, Chip, StyledChipDayCard };
