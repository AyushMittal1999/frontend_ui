import React, { memo, useContext } from "react";
import Card from "../base_components/Card";
import { MEALS } from "../constants/Constants";

import img_breakfast from "../resources/images/breakfast.jpg";
import img_snacks from "../resources/images/snacks.jpg";
import img_lunch from "../resources/images/lunch.jpg";
import img_dinner from "../resources/images/dinner.jpg";
import AppContext from "../context/Context";

const images = [img_breakfast, img_lunch, img_snacks, img_dinner];

interface WeekdayProps {
  day: string;
  schedule: { [k: string]: string[] };
}
const Weekday = memo(function Weekday({ day, schedule }: WeekdayProps) {
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
          {meals.slice(0, 2).map((m, ind) => {
            return (
              <Card
                key={m}
                classes={[
                  `card ${m}`,
                  `card__image-holder`,
                  "card__text-holder",
                ]}
                imgAttributes={{ src: images[ind], alt: m }}
                data={schedule[m]}
                compareDataOnly={1}
              />
            );
          })}
        </div>

        {/* Grouping two meal (Snacks and dinner) card under one div for UI purpose */}
        <div className="day-schedule__two-card-group">
          {/* Creating a card layout corresponding to each meal */}
          {meals.slice(2, 4).map((m, ind) => {
            return (
              <Card
                key={m}
                classes={[
                  `card ${m}`,
                  `card__image-holder`,
                  "card__text-holder",
                ]}
                imgAttributes={{ src: images[2 + ind], alt: m }}
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

const WeekdayWithContext = function WeekdayWithContext({
  day,
}: {
  day: string;
}) {
  const context = useContext(AppContext);
  if (context) return <Weekday day={day} schedule={context.data[day]} />;
  else return <></>;
};

export default WeekdayWithContext;
