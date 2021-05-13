import { Skeleton } from "@material-ui/lab";
import React, { Suspense } from "react";

function loadIconLazilyHelperFunction(iconNameInModule) {
  return React.lazy(() => {
    const allIcons = import("../custom_icons/CombinedIcons");
    const IconPromise = allIcons.then(async function (module) {
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 3000);
      // });
      return { default: module[iconNameInModule] };
    });
    return IconPromise;
  });
}

// SvgIcon Component Loaded dynamically
const Breakfast = loadIconLazilyHelperFunction("BreakfastIcon");
const Lunch = loadIconLazilyHelperFunction("LunchIcon");
const Snacks = loadIconLazilyHelperFunction("SnacksIcon");
const Dinner = loadIconLazilyHelperFunction("DinnerIcon");

// Make a Wrapper React Component for Each SvgIcon
const WrapIconToReactComp = function (Comp) {
  return function ({ ...other }) {
    return (
      <Suspense
        fallback={
          <Skeleton variant="circle" width="40px" height="40px"></Skeleton>
        }
      >
        <Comp {...other} />
      </Suspense>
    );
  };
};

// React Components
const BreakfastIcon = WrapIconToReactComp(Breakfast);
const LunchIcon = WrapIconToReactComp(Lunch);
const DinnerIcon = WrapIconToReactComp(Dinner);
const SnacksIcon = WrapIconToReactComp(Snacks);

export { BreakfastIcon, LunchIcon, SnacksIcon, DinnerIcon };
