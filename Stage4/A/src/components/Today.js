import React, { memo } from "react";
import { connect } from "react-redux";
import Card from "../base_components/Card";
import Heading from "../base_components/Heading";
import { MEALS, WEEKDAYS } from "../constants/Constants";
import PropTypes from "prop-types";
import img_diet from "../../resources/images/diet.jpg";

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
        className="today-schedule__major-heading"
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
        imgAttributes={{ src: img_diet, alt: "schedule-image" }}
        ulAttributes={{ className: "today-schedule-content__ul" }}
      ></Card>
      {/* Not using compare dataOnly because its obevious to render card if today is re rendering */}
    </div>
  );
}); //Rerender the day only if any update has happened and any update is there for the current day
// schedule props(reference i.e. only shallow compare required)  will be updated if any update has occured for a day

function validateScheduleProp() {
  let obj = {};
  MEALS.forEach((meal) => {
    obj[meal] = PropTypes.arrayOf(PropTypes.string); // for every meal there must be an array for strings
  });
  return obj;
}
Today.propTypes = {
  schedule: PropTypes.shape(validateScheduleProp()).isRequired,
};

const TodayWithConnect = connect(
  ({ data }, ownProps) => ({ schedule: data[ownProps.day] }),
  null
)(Today);

TodayWithConnect.propTypes = {
  day: PropTypes.oneOf(WEEKDAYS).isRequired,
};

export default TodayWithConnect;
