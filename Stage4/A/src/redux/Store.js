import {
  SHOW_MODAL,
  HIDE_MODAL,
  UPDATE_DATA,
  SHOW_SUCCESS,
  SHOW_FAIL,
  HIDE_STATUS,
} from "../constants/Constants";

import { combineReducers, createStore } from "redux";
import { getLocalData } from "../objectmodel/LocalStorage";

function statusReducer(state = { visiblity: -1, message: "" }, action) {
  switch (action.type) {
    case SHOW_SUCCESS:
      return { visiblity: 1, message: action.message ? action.message : "" };
    case SHOW_FAIL:
      return { visiblity: 0, message: action.message ? action.message : "" };
    case HIDE_STATUS:
      return { visiblity: -1, message: "" };
    default:
      return state;
  }
}

function modalReducer(state = false, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return true;
    case HIDE_MODAL:
      return false;
    default:
      return state;
  }
}

function dataReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        [action.field.day]: {
          ...state[action.field.day],
          [action.field.meal]: [...action.value],
        },
      };
    default:
      return state;
  }
}

const combinedReducers = combineReducers({
  data: dataReducer,
  modalVisiblity: modalReducer,
  status: statusReducer,
});

const store = createStore(
  combinedReducers,
  { data: getLocalData(), modalVisiblity: false }
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
