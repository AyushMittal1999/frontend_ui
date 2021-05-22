import { DATA_KEY, MEALS, WEEKDAYS } from "../constants/Constants";
import { initID } from "../helper/UniqueId";
import Model from "./Model";

let defaultarr = [];
// eslint-disable-next-line no-unused-vars
for (const _i of WEEKDAYS) {
  //Default Values
  defaultarr.push([
    ["Cornflakes", "Milk"],
    ["Leafy Vegetables", "Soup"],
    ["Green Tea"],
    ["Beans", "Sweet Potatoes"],
  ]);
}

try {
  // If no key exist inlocalStorage initialize with key
  if (localStorage.getItem(DATA_KEY) === null) {
    localStorage.setItem(DATA_KEY, JSON.stringify(defaultarr));
  }
} catch (e) {
  // eslint-disable-next-line no-console
  console.log("unable to initialize local Storage", e);
}

let model;

try {
  // Create Model with local Storage Data
  model = new Model(JSON.parse(localStorage.getItem(DATA_KEY)));
} catch (e) {
  // If local Storage fails create Model with dummy data
  model = new Model(defaultarr);
}

// Initialize UniqueId for react usage
for (const day of WEEKDAYS) {
  for (const meal of MEALS) {
    initID(day, meal, model.schedule[day][meal].length);
  }
}

export const getLocalData = () => {
  return { ...model.schedule };
};

export const updateMealAtLocal = (day, meal, foodItems) => {
  if (model.updateMeal(day, meal, foodItems)) {
    try {
      localStorage.setItem(DATA_KEY, JSON.stringify(model.getCompressedData()));
      // return Success
      return 1;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log("Unable to update Local Storage", e);
    }
  }
  // return fail
  return 0;
};

export const updateBulkDataAtLocal = (newData) => {
  if (model.updateBulkData(newData)) {
    try {
      localStorage.setItem(DATA_KEY, JSON.stringify(model.getCompressedData()));
      // return Success
      return 1;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log("Unable to update Bulk data Local Storage", e);
    }
  }
  // return fail
  return 0;
};
