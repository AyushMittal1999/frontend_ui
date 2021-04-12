import React, { memo, useContext, useRef, useState } from "react";
import Heading from "../base components/Heading";
import { MEALS, WEEKDAYS } from "../constants/Constants";
import { updateMealAtLocal } from "../objectmodel/LocalStorage";
import PropTypes from "prop-types";

import AppContext from "../context/Context";

const Modal = memo(
  function Modal({ visiblity, displayModalHandler, updateData }) {
    const meals = MEALS;
    const weekdays = WEEKDAYS;

    // Day Selected by user
    const [day, setDay] = useState("monday");
    // Meal selected by user
    const [meal, setMeal] = useState("breakfast");
    // Input Entered by user
    const [foodItems, setFoodItems] = useState("");
    // Parsed Item after checking repeatition and trim
    const [parsedFoodItems, setParsedFoodItems] = useState([]);

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
      setParsedFoodItems(items);
      // Input to be same as user entered
      setFoodItems(event.target.value);

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
      if (updateData(day, meal, parsedFoodItems)) {
        // Reset the form fields
        resetForm();
      }
      // else dont reset the form
    };

    function resetForm() {
      // Reset the form fields
      setDay("monday");
      setMeal("breakfast");
      setFoodItems("");
      setParsedFoodItems([]);
    }

    return (
      <div
        className="modal-cover"
        style={{ display: visiblity ? "block" : "none" }}
      >
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
              value={day}
              onChange={(e) => setDay(e.target.value)}
              onBlur={(e) => setDay(e.target.value)}
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
              value={meal}
              onChange={(e) => setMeal(e.target.value)}
              onBlur={(e) => setMeal(e.target.value)}
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
              value={foodItems}
              onChange={onChangeHandler}
              onBlur={onChangeHandler}
            ></input>
            <br />

            {/* Parsed enteried items in modal view */}
            {parsedFoodItems.length > 0 ? (
              <label htmlFor="modal-ul">Preview : </label>
            ) : (
              <React.Fragment></React.Fragment>
            )}

            {parsedFoodItems.length > 0 ? (
              <ul ref={dom_ref_ul} id="modal-ul" className="modal__ul">
                {parsedFoodItems.map((item) => (
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
  (prev, cur) => prev.visiblity === cur.visiblity
); // Rerender Modal due to parent state only if visiblity is updated

Modal.propTypes = {
  visiblity: PropTypes.bool.isRequired,
  displayModalHandler: function (props, propName, componentName) {
    const fn = props[propName];
    if (
      !fn ||
      !fn.prototype ||
      typeof fn.prototype.constructor !== "function" ||
      fn.prototype.constructor.length !== 1
    ) {
      return new Error(
        propName + "must be a function with 1 args  in " + componentName
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
        propName + "must be a function with 3 args  in " + componentName
      );
    }
  },
};

const ModalWithContext = () => {
  const context = useContext(AppContext);
  const prevTimeout = useRef(null);

  return (
    <Modal
      visiblity={context.modalVisiblity}
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
