/*
@class Model
*/

import { MEALS, WEEKDAYS } from "../constants/Constants";

export default function Model(schedule_data) {
  let data = {};

  for (let i = 0; i < WEEKDAYS.length; i++) {
    data[WEEKDAYS[i]] = {};
    for (let j = 0; j < MEALS.length; j++) {
      data[WEEKDAYS[i]][MEALS[j]] = schedule_data[i][j];
    }
  }

  let compressedData = schedule_data;

  this.schedule = data;

  this.updateMeal = function (day, meal, items) {
    // Validate Data and update
    if (day && meal && items) {
      items.filter((item) => item && item === "");

      if (day in this.schedule && meal in this.schedule[day]) {
        // Avoid Duplicates
        let taken = new Map();
        for (const ele of items) {
          if (ele !== "" && !taken.has(ele.toLowerCase())) {
            taken.set(ele.toLowerCase(), ele);
          }
        }
        items = Array.from(taken.values());

        this.schedule[day] = { ...this.schedule[day], [meal]: items };
        compressedData[WEEKDAYS.indexOf(day)][MEALS.indexOf(meal)] = items;
        // return success
        return 1;
      }
    }
    // return fail
    return 0;
  };

  this.getCompressedData = function () {
    return compressedData;
  };
}
