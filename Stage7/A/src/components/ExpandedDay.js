import { Tabs } from "@material-ui/core";
import { useRef } from "react";
import { MEALS } from "../constants/Constants";
import MealCard from "./Cards/DayCard";

export default function ExpandedDay({ day }) {
  // To be used for scroll effect
  const tabsDomRef = useRef(null);

  function handleScrollButtonClick(e) {
    const tabsdiv = tabsDomRef.current;
    const scrollButtons = tabsdiv.querySelectorAll("[role=ScrollButton]");
    const tabList = tabsdiv.querySelectorAll("[role=tab]");
    const scroller = tabsdiv.querySelector("[role=tablist]").parentNode;

    // Custom Designing effect when scroll button is clicked,
    if (tabList && scroller && scrollButtons) {
      // Check for left Button
      if (scrollButtons[0] === e.target.closest("[role=ScrollButton]")) {
        let firstVisibleLeftOffset = 0;
        const scrollerLeft = scroller.scrollLeft;
        const scrollerWidth = scroller.offsetWidth;
        for (const child of tabList) {
          if (child.offsetLeft > scrollerLeft) {
            firstVisibleLeftOffset = child.offsetLeft;
            break;
          }
        }
        scroller.scrollLeft = firstVisibleLeftOffset - scrollerWidth - 20;
      } else {
        let lastVisibleLeftOffset = 0;
        const scrollerLeft = scroller.scrollLeft;
        const scrollerWidth = scroller.offsetWidth;
        for (const child of tabList) {
          if (
            child.offsetLeft + child.offsetWidth >
            scrollerLeft + scrollerWidth
          ) {
            lastVisibleLeftOffset = child.offsetLeft;
            break;
          }
        }
        scroller.scrollLeft = lastVisibleLeftOffset - 20;
      }
    }
  }

  return (
    <Tabs
      indicatorColor="secondary"
      // classes={tabsClasses}
      classes={{
        root: "expandedDay-tabs-root",
        flexContainer: "expandedDay-tabs-flexContainer",
        scroller: "expandedDay-tabs-scroller",
        scrollButtonsDesktop: "expandedDay-tabs-scrollButtonsDesktop",
      }}
      textColor="primary"
      variant="scrollable"
      scrollButtons="auto"
      value={false}
      ref={tabsDomRef}
      TabScrollButtonProps={{
        onClick: handleScrollButtonClick,
        role: "ScrollButton",
      }}
    >
      {MEALS.map((m, ind) => {
        return <MealCard key={m} day={day} meal={m} />;
      })}
    </Tabs>
  );
}
