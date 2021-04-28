import React, { useReducer, useContext, useRef, memo } from "react";
import Heading from "../base_components/Heading";
import { MEALS, WEEKDAYS } from "../constants/Constants";
import { updateMealAtLocal } from "../objectmodel/LocalStorage";

import AppContext from "../context/Context";

// init to initialse reducer state
function init() {
  return {
    // Day Selected by user
    day: "monday",
    // Meal selected by user
    meal: "breakfast",
    // Input Entered by user
    foodItems: "",
    // Parsed Item after checking repeatition and trim
    parsedFoodItems: [],
  };
}

// Reducer to skip use of multiple useStates
function reducer(state, action) {
  switch (action.type) {
    case "SET_DAY":
      return { ...state, day: action.payload };
    case "SET_MEAL":
      return { ...state, meal: action.payload };
    case "SET_FOOD_ITEMS":
      return { ...state, foodItems: action.payload };
    case "SET_PARSED_FOOD_ITEMS":
      return { ...state, parsedFoodItems: action.payload };
    case "RESET":
      return init();
    default:
      throw new Error("Invalid State Change in Modal");
  }
}

const Modal = memo(
  function Modal({ displayModalHandler, updateData }) {
    const meals = MEALS;
    const weekdays = WEEKDAYS;
    // State for handling modal field
    const [state, dispatch] = useReducer(reducer, null, init);
    // Using Reference to store dom reference of parsed item view and scroll to last for userview
    const dom_ref_ul = useRef();

    // On item change update parsed item list
    function onChangeHandler(event) {
      let items = event.target.value
        .split(";")
        .filter((x) => x.trim().length >= 1)
        .map(function (x) {
          return x
            .trim()
            .split(" ")
            .filter((x) => x.trim().length >= 1)
            .map(function (a) {
              return a[0].toUpperCase() + a.substring(1);
            })
            .join(" ");
        });
      // Avoid Duplicates
      let taken = new Map();
      for (const ele of items) {
        if (ele !== "" && !taken.has(ele.toLowerCase())) {
          taken.set(ele.toLowerCase(), ele);
        }
      }
      items = Array.from(taken.values());
      //Update Parsed items
      dispatch({ type: "SET_PARSED_FOOD_ITEMS", payload: items });
      // Input to be same as user entered
      dispatch({ type: "SET_FOOD_ITEMS", payload: event.target.value });

      //  Scroll to bottom
      if (dom_ref_ul.current) {
        dom_ref_ul.current.scrollTop = dom_ref_ul.current.scrollHeight;
      }
    }

    const handleModalClose = () => {
      displayModalHandler(false);
    };

    const submitHandle = () => {
      // Check if update is succesful
      if (updateData(state.day, state.meal, state.parsedFoodItems)) {
        // Reset the form fields
        resetForm();
      }
      // else dont reset the form
    };

    function resetForm() {
      // Reset the form fields
      dispatch({ type: "RESET" });
    }
    return (
      <div className="modal-cover">
        <div className="modal">
          <button className="btn--right btn" onClick={handleModalClose}>
            X
          </button>
          <button className="btn--simple" onClick={resetForm}>
            clear
          </button>

          <Heading
            type="3"
            value="Edit Schedule"
            className="main-heading"
          ></Heading>

          {/* Form for user input */}
          <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="days-select">Day: </label>
            <select
              name="days"
              id="days-select"
              value={state.day}
              onChange={(e) =>
                dispatch({ type: "SET_DAY", payload: e.target.value })
              }
              onBlur={(e) =>
                dispatch({ type: "SET_DAY", payload: e.target.value })
              }
            >
              {weekdays.map((d) => (
                <option value={d} key={d}>
                  {d[0].toUpperCase() + d.substring(1)}
                </option>
              ))}
            </select>
            <br></br>

            <label htmlFor="meal-select">Time Of Day: </label>
            <select
              name="meal"
              id="meal-select"
              value={state.meal}
              onChange={(e) =>
                dispatch({ type: "SET_MEAL", payload: e.target.value })
              }
              onBlur={(e) =>
                dispatch({ type: "SET_MEAL", payload: e.target.value })
              }
            >
              {meals.map((d) => (
                <option value={d} key={d}>
                  {d[0].toUpperCase() + d.substring(1)}
                </option>
              ))}
            </select>
            <br></br>

            <label htmlFor="food-input">Food Items (separated by ;) : </label>

            <input
              name="food"
              id="food-input"
              type="text"
              value={state.foodItems}
              onChange={onChangeHandler}
              onBlur={onChangeHandler}
            ></input>
            <br />

            {/* Parsed enteried items in modal view */}
            {state.parsedFoodItems.length > 0 ? (
              <label htmlFor="modal-ul">Preview : </label>
            ) : (
              <React.Fragment></React.Fragment>
            )}

            {state.parsedFoodItems.length > 0 ? (
              <ul ref={dom_ref_ul} id="modal-ul" className="modal__ul">
                {state.parsedFoodItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </form>

          <button className="modal__submit-btn" onClick={submitHandle}>
            Update Changes
          </button>
        </div>
      </div>
    );
  },
  () => false
); // Dont rerender any of props change because state depend only on internal hooks

// Rerender Modal due to parent state only if visiblity is updated

Modal.propTypes = {
  displayModalHandler: function (props, propName, componentName) {
    const fn = props[propName];
    if (
      !fn ||
      !fn.prototype ||
      typeof fn.prototype.constructor !== "function" ||
      fn.prototype.constructor.length !== 1
    ) {
      return new Error(
        propName + "must be a function with 1 args in " + componentName
      );
    }
  },
  updateData: function (props, propName, componentName) {
    const fn = props[propName];
    if (
      !fn ||
      !fn.prototype ||
      typeof fn.prototype.constructor !== "function" ||
      fn.prototype.constructor.length !== 3
    ) {
      return new Error(
        propName + "must be a function with 3 args in " + componentName
      );
    }
  },
};
const ModalWithContext = () => {
  const context = useContext(AppContext);
  const prevTimeout = useRef(null);

  return (
    <Modal
      displayModalHandler={context.updateModal}
      // Update function to update local storage then update context data
      updateData={function (day, meal, foodItems) {
        if (updateMealAtLocal(day, meal, foodItems)) {
          // Update data at context
          context.updateData(day, meal, foodItems);
          // Hide Modal
          context.updateModal(false);
          //Check for existing status visiblity
          if (prevTimeout.current) {
            clearTimeout(prevTimeout.current);
          }
          // Show Success
          context.updateStatus(1);
          //Hide Status
          prevTimeout.current = setTimeout(() => {
            context.updateStatus(-1);
          }, 2000);

          // return 1 to indicate success update
          return 1;
        } else {
          // Hide Modal
          context.updateModal(false);
          //Check for existing status visiblity
          if (prevTimeout.current) {
            clearTimeout(prevTimeout.current);
          }
          // Show Fali
          context.updateStatus(0, "local storage not accessible");
          //Hide Status
          prevTimeout.current = setTimeout(() => {
            context.updateStatus(-1);
          }, 2000);
          return 0;
        }
      }}
    />
  );
};

export default ModalWithContext;
