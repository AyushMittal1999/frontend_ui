/*
@class Model
*/

import { MEALS, WEEKDAYS } from "../constants/Constants";

export type scheduleDataType = { [k: string]: { [k: string]: string[] } };

export interface ModelThis {
  schedule: scheduleDataType;
  updateMeal(day: string, meal: string, items: string[]): boolean;
  getCompressedData(): string[][][];
}

interface ModelInterface {
  new (schedule_data: string[][][]): ModelThis;
}

const Model: ModelInterface = (function Model(
  this: ModelThis,
  schedule_data: string[][][]
) {
  let data: scheduleDataType = {};

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

      if (
        day in this.schedule &&
        meal in this.schedule[day] &&
        WEEKDAYS.indexOf(day) !== -1
      ) {
        // Avoid Duplicates
        let taken = new Map();
        for (const ele of items) {
          if (ele !== "" && !taken.has(ele.toLowerCase())) {
            taken.set(ele.toLowerCase(), ele);
          }
        }
        items = Array.from(taken.values());

        this.schedule[day] = { ...this.schedule[day], [meal]: items };
        compressedData[1][1] = items;
        // return success
        return true;
      }
    }
    // return fail
    return false;
  };

  this.getCompressedData = function () {
    return compressedData;
  };
} as unknown) as ModelInterface;

export default Model;
