import React, { memo } from "react";
import { connect } from "react-redux";
import Card from "../base components/Card";
import Heading from "../base components/Heading";
import { MEALS } from "../constants/Constants";

const Today = memo(function Today({ schedule }) {
  const meals = MEALS;

  // Updating data to add Have ..... in meal ( breakfast ... .)
  const data = meals.map((m) => [
    "Have",
    schedule[m].join(", "),
    `in ${m[0].toUpperCase() + m.substring(1)}`,
  ]);
  return (
    <div id="today-schedule">
      <Heading
        type="2"
        child={{ className: "today-schedule__major-heading" }}
        value="Today's Diet Plan"
      />
      <hr className="major__hr"></hr>
      {/* Card layout for dispalying image and text for today */}
      <Card
        classes={[
          "today-schedule__content",
          "today-schedule-content__image-holder",
          "today-schedule-content__ulcover",
        ]}
        data={data}
        img={{ src: "resources/images/diet.jpg", alt: "schedule-image" }}
        ul={{ className: "today-schedule-content__ul" }}
      ></Card>
      {/* Not using compare dataOnly because its obevious to render card if today is re rendering */}
    </div>
  );
}); //Rerender the day only if any update has happened and any update is there for the current day
// schedule props(reference i.e. only shallow compare required)  will be updated if any update has occured for a day

export default connect(
  ({ data }, ownProps) => ({ schedule: data[ownProps.day] }),
  null
)(Today);