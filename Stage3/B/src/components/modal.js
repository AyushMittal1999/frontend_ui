var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modal = React.memo(function Modal(_ref) {
    var _React$createElement;

    var visiblity = _ref.visiblity,
        displayModalHandler = _ref.displayModalHandler,
        updateData = _ref.updateData,
        constants = _ref.constants;


    var meals = constants.MEALS;
    var weekdays = constants.WEEKDAYS;

    // Day Selected by user

    var _React$useState = React.useState("monday"),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        day = _React$useState2[0],
        setDay = _React$useState2[1];
    // Meal selected by user 


    var _React$useState3 = React.useState("breakfast"),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        meal = _React$useState4[0],
        setMeal = _React$useState4[1];
    // Input Entered by user


    var _React$useState5 = React.useState(""),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        foodItems = _React$useState6[0],
        setFoodItems = _React$useState6[1];
    // Parsed Item after checking repeatition and trim


    var _React$useState7 = React.useState([]),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        parsedFoodItems = _React$useState8[0],
        setParsedFoodItems = _React$useState8[1];

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
        setParsedFoodItems(items);
        // Input to be same as user entered
        setFoodItems(event.target.value);

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
        if (updateData(day, meal, foodItems.split(";").filter(function (x) {
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
        setDay("monday");
        setMeal("breakfast");
        setFoodItems("");
        setParsedFoodItems([]);
    }

    console.log("modal");
    return React.createElement(
        "div",
        { className: "modal-cover", style: { display: visiblity ? "block" : "none" } },
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
            React.createElement(Heading, { type: "3", value: "Edit Schedule", className: "main-heading" }),
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
                    { name: "days", id: "days-select", value: day, onChange: function onChange(e) {
                            return setDay(e.target.value);
                        }, onBlur: function onBlur(e) {
                            return setDay(e.target.value);
                        } },
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
                    (_React$createElement = { name: "meal", id: "meal-select", value: meal }, _defineProperty(_React$createElement, "value", meal), _defineProperty(_React$createElement, "onChange", function onChange(e) {
                        return setMeal(e.target.value);
                    }), _defineProperty(_React$createElement, "onBlur", function onBlur(e) {
                        return setMeal(e.target.value);
                    }), _React$createElement),
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
                React.createElement("input", { name: "food", id: "food-input", type: "text", value: foodItems, onChange: onChangeHandler, onBlur: onChangeHandler }),
                React.createElement("br", null),
                parsedFoodItems.length > 0 ? React.createElement(
                    "label",
                    { htmlFor: "modal-ul" },
                    "Preview : "
                ) : React.createElement(React.Fragment, null),
                parsedFoodItems.length > 0 ? React.createElement(
                    "ul",
                    { ref: dom_ref_ul, id: "modal-ul", className: "modal__ul" },
                    parsedFoodItems.map(function (item) {
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
}, areEqual = function areEqual(prevProp, nextProp) {
    return nextProp.visiblity == prevProp.visiblity;
}); // Rerender Modal due to parent state only if visiblity is updated