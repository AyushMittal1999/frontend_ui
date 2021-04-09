var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
    parsedFoodItems: []
  };
}

// Reducer to skip use of multiple useStates
function reducer(state, action) {
  switch (action.type) {
    case "SET_DAY":
      return Object.assign({}, state, { day: action.payload });
    case "SET_MEAL":
      return Object.assign({}, state, { meal: action.payload });
    case "SET_FOOD_ITEMS":
      return Object.assign({}, state, { foodItems: action.payload });
    case "SET_PARSED_FOOD_ITEMS":
      return Object.assign({}, state, { parsedFoodItems: action.payload });
    case "RESET":
      return init();
    default:
      throw new Error("Invalid State Change in Modal");
  }
}

var Modal = function Modal(_ref) {
  var displayModalHandler = _ref.displayModalHandler,
      updateData = _ref.updateData,
      constants = _ref.constants;

  var meals = constants.MEALS;
  var weekdays = constants.WEEKDAYS;

  // State for handling modal field

  var _React$useReducer = React.useReducer(reducer, null, init),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];
  // Using Reference to store deom reference of parsed item view and scroll to last for userview


  var dom_ref_ul = React.useRef();

  // On item change update parsed item list
  function onChangeHandler(event) {
    var items = event.target.value.split(";").filter(function (x) {
      return x.trim().length >= 1;
    }).map(function (x) {
      return x.trim().split(" ").filter(function (x) {
        return x.trim().length >= 1;
      }).map(function (a) {
        return a[0].toUpperCase() + a.substring(1);
      }).join(" ");
    });
    // Avoid Duplicates
    var taken = new Map();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var ele = _step.value;

        if (ele != "" && !taken.has(ele.toLowerCase())) {
          taken.set(ele.toLowerCase(), ele);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
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

  handleModalClose = function handleModalClose() {
    displayModalHandler(false);
  };

  submitHandle = function submitHandle() {
    // Check if update is succesful
    if (updateData(state.day, state.meal, state.foodItems.split(";").filter(function (x) {
      return x.trim().length >= 1;
    }).map(function (x) {
      return x.trim().split(" ").filter(function (x) {
        return x.trim().length >= 1;
      }).map(function (a) {
        return a[0].toUpperCase() + a.substring(1);
      }).join(" ");
    }))) {
      // Reset the form fields
      resetForm();
    }
    // else dont reset the form
  };

  function resetForm() {
    // Reset the form fields
    dispatch({ type: "RESET" });
  }

  return React.createElement(
    "div",
    { className: "modal-cover" },
    React.createElement(
      "div",
      { className: "modal" },
      React.createElement(
        "button",
        { className: "btn--right btn", onClick: handleModalClose },
        "X"
      ),
      React.createElement(
        "button",
        { className: "btn--simple", onClick: resetForm },
        "clear"
      ),
      React.createElement(Heading, {
        type: "3",
        value: "Edit Schedule",
        className: "main-heading"
      }),
      React.createElement(
        "form",
        { onSubmit: function onSubmit(event) {
            return event.preventDefault();
          } },
        React.createElement(
          "label",
          { htmlFor: "days-select" },
          "Day: "
        ),
        React.createElement(
          "select",
          {
            name: "days",
            id: "days-select",
            value: state.day,
            onChange: function onChange(e) {
              return dispatch({ type: "SET_DAY", payload: e.target.value });
            },
            onBlur: function onBlur(e) {
              return dispatch({ type: "SET_DAY", payload: e.target.value });
            }
          },
          weekdays.map(function (d) {
            return React.createElement(
              "option",
              { value: d, key: d },
              d[0].toUpperCase() + d.substring(1)
            );
          })
        ),
        React.createElement("br", null),
        React.createElement(
          "label",
          { htmlFor: "meal-select" },
          "Time Of Day: "
        ),
        React.createElement(
          "select",
          {
            name: "meal",
            id: "meal-select",
            value: state.meal,
            onChange: function onChange(e) {
              return dispatch({ type: "SET_MEAL", payload: e.target.value });
            },
            onBlur: function onBlur(e) {
              return dispatch({ type: "SET_MEAL", payload: e.target.value });
            }
          },
          meals.map(function (d) {
            return React.createElement(
              "option",
              { value: d, key: d },
              d[0].toUpperCase() + d.substring(1)
            );
          })
        ),
        React.createElement("br", null),
        React.createElement(
          "label",
          { htmlFor: "food-input" },
          "Food Items (separated by ;) : "
        ),
        React.createElement("input", {
          name: "food",
          id: "food-input",
          type: "text",
          value: state.foodItems,
          onChange: onChangeHandler,
          onBlur: onChangeHandler
        }),
        React.createElement("br", null),
        state.parsedFoodItems.length > 0 ? React.createElement(
          "label",
          { htmlFor: "modal-ul" },
          "Preview : "
        ) : React.createElement(React.Fragment, null),
        state.parsedFoodItems.length > 0 ? React.createElement(
          "ul",
          { ref: dom_ref_ul, id: "modal-ul", className: "modal__ul" },
          state.parsedFoodItems.map(function (item) {
            return React.createElement(
              "li",
              { key: item },
              item
            );
          })
        ) : React.createElement(React.Fragment, null)
      ),
      React.createElement(
        "button",
        { className: "modal__submit-btn", onClick: submitHandle },
        "Update Changes"
      )
    )
  );
};