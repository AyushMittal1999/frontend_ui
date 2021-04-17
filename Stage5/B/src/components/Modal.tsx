import React, { useContext, useRef, memo } from "react";
import Heading from "../base_components/Heading";
import { MEALS, WEEKDAYS } from "../constants/Constants";
import { updateMealAtLocal } from "../objectmodel/LocalStorage";

import AppContext from "../context/Context";
import { ContextInterface } from "../context/ContextHook";

interface ModalProps {
  displayModalHandler(show: boolean): void;
  updateData(day: string, meal: string, items: string[]): boolean;
}

interface ModalStateType {
  day: string;
  meal: string;
  foodItems: string;
  parsedFoodItems: string[];
}

// init to initialse reducer state
function init(): ModalStateType {
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

type ReducerMethods =
  | {
      type: "SET_DAY" | "SET_MEAL" | "SET_FOOD_ITEMS";
      payload: string;
    }
  | {
      type: "SET_PARSED_FOOD_ITEMS";
      payload: string[];
    }
  | { type: "RESET" };

// Reducer to skip use of multiple useStates
function reducer(
  state: ModalStateType,
  action: ReducerMethods
): ModalStateType {
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
  function Modal({ displayModalHandler, updateData }: ModalProps) {
    const meals = MEALS;
    const weekdays = WEEKDAYS;
    // State for handling modal field
    const [state, dispatch] = React.useReducer(reducer, null, init);
    // Using Reference to store dom reference of parsed item view and scroll to last for userview
    const dom_ref_ul = useRef<HTMLUListElement>(null);

    // On item change update parsed item list
    function onChangeHandler(event: React.FormEvent<HTMLInputElement>) {
      let items = event.currentTarget.value
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
      dispatch({ type: "SET_FOOD_ITEMS", payload: event.currentTarget.value });

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
            htype={3}
            value="Edit Schedule"
            childClass="main-heading"
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
  () => true
); // No re rendering required on any of parent state change

let prevTimeout: NodeJS.Timeout | null = null;
function getUpdateDataFunction(context: ContextInterface) {
  return function (day: string, meal: string, foodItems: string[]) {
    if (updateMealAtLocal(day, meal, foodItems)) {
      // Update data at context
      context.updateData(day, meal, foodItems);
      // Hide Modal
      context.updateModal(false);
      //Check for existing status visiblity
      if (prevTimeout) {
        clearTimeout(prevTimeout);
      }
      // Show Success
      context.updateStatus(1);
      //Hide Status

      prevTimeout = setTimeout(() => {
        context.updateStatus(-1);
      }, 2000);

      // return true to indicate success update
      return true;
    } else {
      // Hide Modal
      context.updateModal(false);
      //Check for existing status visiblity
      if (prevTimeout) {
        clearTimeout(prevTimeout);
      }
      // Show Fali
      context.updateStatus(0, "local storage not accessible");
      //Hide Status
      prevTimeout = setTimeout(() => {
        context.updateStatus(-1);
      }, 2000);
      // retunr false to indicate Fail
      return false;
    }
  };
}

const ModalWithContext = () => {
  const context = useContext(AppContext);

  if (context)
    return (
      <Modal
        displayModalHandler={context.updateModal}
        // Update function to update local storage then update context data
        updateData={getUpdateDataFunction(context)}
      />
    );
  else return <></>;
};

export default ModalWithContext;
