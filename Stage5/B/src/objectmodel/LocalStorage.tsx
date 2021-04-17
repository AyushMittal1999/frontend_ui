import { ModelThis, scheduleDataType } from "./Model";
import { DATA_KEY, WEEKDAYS } from "../constants/Constants";
import Model from "./Model";

let defaultarr = [];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

let model: ModelThis;

try {
  const localData = localStorage.getItem(DATA_KEY);
  // Create Model with local Storage Data
  if (localData) {
    model = new Model(JSON.parse(localData));
  }
} catch (e) {
  // If local Storage fails create Model with dummy data
  model = new Model(defaultarr);
}

export const getLocalData = (): scheduleDataType => {
  return { ...model.schedule };
};

export const updateMealAtLocal = (
  day: string,
  meal: string,
  foodItems: string[]
): boolean => {
  if (model.updateMeal(day, meal, foodItems)) {
    try {
      localStorage.setItem(DATA_KEY, JSON.stringify(model.getCompressedData()));
      // return Success
      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log("Unable to update Local Storage", e);
    }
  }
  // return fail
  return false;
};
