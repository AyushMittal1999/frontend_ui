import {
  HIDE_MODAL,
  HIDE_STATUS,
  MEALS,
  SHOW_FAIL,
  SHOW_MODAL,
  SHOW_SUCCESS,
  UPDATE_DATA,
  WEEKDAYS,
} from "../constants/Constants";

export function showModal() {
  return {
    type: SHOW_MODAL,
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}

export function showSuccess(message = "") {
  return {
    type: SHOW_SUCCESS,
    message,
  };
}

export function showFail(message = "") {
  return {
    type: SHOW_FAIL,
    message,
  };
}

export function hideStatus() {
  return {
    type: HIDE_STATUS,
  };
}

export function updateData(day, meal, meals) {
  // If update Fields are valid dispatch action
  if (WEEKDAYS.indexOf(day) !== -1 && MEALS.indexOf(meal) !== -1) {
    return {
      type: UPDATE_DATA,
      field: {
        day,
        meal,
      },
      value: meals,
    };
  }
  // Dipatch invalid action
  return {
    type: "NO_ACTION",
  };
}
