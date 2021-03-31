import React, { memo } from "react";
import { connect } from "react-redux";
import Card from "../base components/Card";
import { MEALS } from "../constants/Constants";

const Weekday = memo(function Weekday({ day, schedule }) {
  const meals = MEALS;

  return (
    <div id={day}>
      {/* For heading Monday, Tuesday.... */}
      <h2 className={`${day}__minor-heading`}>
        {day[0].toUpperCase() + day.substring(1)}{" "}
      </h2>
      <hr></hr>
      {/* Section is holding all 4 meal cards */}
      <section className={`${day}-schedule__card-holder`}>
        {/* Grouping two meal (Breakfast and lunch) card under one div for UI purpose */}
        <div className="day-schedule__two-card-group">
          {/* Creating a card layout corresponding to each meal */}
          {meals.slice(0, 2).map((m) => {
            return (
              <Card
                key={m}
                classes={[
                  `card ${m}`,
                  `card__image-holder`,
                  "card__text-holder",
                ]}
                img={{ src: `resources/images/${m}.jpg`, alt: m }}
                data={schedule[m]}
                compareDataOnly={1}
              />
            );
          })}
        </div>

        {/* Grouping two meal (Snacks and dinner) card under one div for UI purpose */}
        <div className="day-schedule__two-card-group">
          {/* Creating a card layout corresponding to each meal */}
          {meals.slice(2, 4).map((m) => {
            return (
              <Card
                key={m}
                classes={[
                  `card ${m}`,
                  `card__image-holder`,
                  "card__text-holder",
                ]}
                img={{ src: `resources/images/${m}.jpg`, alt: m }}
                data={schedule[m]}
                compareDataOnly={1}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}); //Rerender the day only if any update has happened to any of its props
// schedule props(reference i.e. only shallow compare required)  will be updated if any update has occured for a day

export default connect(
  ({ data }, ownProps) => ({ schedule: data[ownProps.day] }),
  null
)(Weekday);
