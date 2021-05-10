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

  this.updateBulkData = function (newdata) {
    // Validate Data and update
    try {
      for (const day of WEEKDAYS) {
        for (const meal of MEALS) {
          if (day in newdata && meal in newdata[day] && newdata[day][meal]) {
            const temp = [...newdata[day][meal]].map(function (x) {
              return x
                .trim()
                .split(" ")
                .filter((x) => x.trim().length >= 1)
                .map(function (a) {
                  return a[0].toUpperCase() + a.substring(1);
                })
                .join(" ");
            });
            this.schedule[day][meal] = temp;
            compressedData[WEEKDAYS.indexOf(day)][MEALS.indexOf(meal)] = temp;
          }
        }
      }
      // success
      return 1;
    } catch (e) {
      // return fail
      return 0;
    }
  };

  this.getCompressedData = function () {
    return compressedData;
  };
}
