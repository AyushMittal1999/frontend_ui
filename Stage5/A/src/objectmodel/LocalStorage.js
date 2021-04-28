import { DATA_KEY, WEEKDAYS } from "../constants/Constants";
import Model from "./Model";

let defaultarr = [];
// eslint-disable-next-line no-unused-vars
for (const _i of WEEKDAYS) {
  defaultarr.push([[], [], [], []]);
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
