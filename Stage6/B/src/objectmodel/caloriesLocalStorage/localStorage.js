import { CALORIES_KEY } from "../../constants/Constants";
import Model from "./Model";

let model;
try {
  // If no key exist inlocalStorage initialize with key
  if (localStorage.getItem(CALORIES_KEY) === null) {
    model = new Model({});
    localStorage.setItem(CALORIES_KEY, JSON.stringify(model.calories));
  } else {
    model = new Model(JSON.parse(localStorage.getItem(CALORIES_KEY)));
  }
} catch (e) {
  // eslint-disable-next-line no-console
  console.log("unable to initialize local Storage", e);
  model = new Model({});
}

export function getCalories() {
  return model.getCalories();
}
export function setCalories(newVal) {
  const prevVal = model.getCalories();
  model.setCalories(newVal);
  try {
    localStorage.setItem(CALORIES_KEY, JSON.stringify(model.calories));
    return true;
  } catch (e) {
    model.setCalories(prevVal);
    return false;
  }
}
export function weeklyCalories() {
  return model.getAverage();
}
