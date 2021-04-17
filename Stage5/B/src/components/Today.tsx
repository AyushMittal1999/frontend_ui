import React, { memo, useContext } from "react";
import Card from "../base_components/Card";
import Heading from "../base_components/Heading";
import { MEALS } from "../constants/Constants";
import img_diet from "../resources/images/diet.jpg";
import AppContext from "../context/Context";
import { TodayCardData } from "../constants/genericTypes";

interface TodayProps {
  schedule: {
    [k: string]: string[];
  };
}
const Today = memo(function Today({ schedule }: TodayProps) {
  const meals = MEALS;

  const schedule1 = { ...schedule };
  // Updating data to add Have ..... in meal ( breakfast ... .)
  const data: TodayCardData = meals.map((m: string) => [
    "Have",
    schedule1[m].join(", "),
    `in ${m[0].toUpperCase() + m.substring(1)}`,
  ]) as TodayCardData;

  return (
    <div id="today-schedule">
      <Heading
        htype={2}
        childClass={"today-schedule__major-heading"}
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

const TodayWithContext = function TodayWithContext({ day }: { day: string }) {
  const context = useContext(AppContext);
  if (context) return <Today schedule={context.data[day]} />;
  else return <></>;
};

export default TodayWithContext;
