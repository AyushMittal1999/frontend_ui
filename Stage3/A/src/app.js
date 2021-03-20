var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function App(_ref) {
    var dataService = _ref.dataService;


    var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

    var _React$useState = React.useState(function () {
        return false;
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        isModalVisible = _React$useState2[0],
        setIsModalVisible = _React$useState2[1];

    var displayModalHandler = function displayModalHandler(setCondition) {
        setIsModalVisible(setCondition);
    };

    var _React$useState3 = React.useState(-1),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        statusVisiblity = _React$useState4[0],
        setStatusVisiblity = _React$useState4[1];

    var _React$useState5 = React.useState(function () {
        return { specificDayUpdate: "no", specificMealUpdate: "no", requestID: 0 };
    }),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        updateRequest = _React$useState6[0],
        setUpdateRequest = _React$useState6[1];
    // initialaizse  specificDayUpdate, specificDayUpdate with any random string to make unequal to any meal or day


    var updateData = function updateData(day, meal, foodItems) {

        if (dataService.updateMeal(day, meal, foodItems)) {
            // Hide Modal
            displayModalHandler(false);
            // Update the data
            setUpdateRequest(function (prevProp) {
                return { requestID: 1 - prevProp.requestID, specificDayUpdate: day, specificMealUpdate: meal };
            });
            // Show sucess status
            setStatusVisiblity(1);
            // Hide status after 2 sec
            setTimeout(setStatusVisiblity, 2000, -1);
            // Return 1 to modal to clear modal fields
            return 1;
        } else {
            // UNSUCESS - UPDATE
            console.log("error occureed");

            // Show sucess status
            setStatusVisiblity(0);
            // Hide status after 2 sec
            setTimeout(setStatusVisiblity, 2000, -1);

            // Not changing Modal state on unsuccessful updae to let user make edit in modal
            // Return 0 to not clear fields
            return 0;
        }
    };

    var todayDay = weekdays[(new Date().getDay() - 1 + 7) % 7];

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Heading, { type: "1", id: "main-heading", value: "Diet Plan" }),
        React.createElement(Modal, { visiblity: isModalVisible, displayModalHandler: displayModalHandler, updateData: updateData }),
        React.createElement(Today, Object.assign({ day: todayDay, dataService: dataService }, updateRequest)),
        React.createElement(WeekScheduleHeading, { displayModalHandler: displayModalHandler }),
        weekdays.slice(weekdays.indexOf(todayDay), 7).concat(weekdays.slice(0, weekdays.indexOf(todayDay))).map(function (w) {
            return React.createElement(Weekday, Object.assign({ day: w, key: w, dataService: dataService }, updateRequest));
        }),
        React.createElement(Status, { isSuccess: statusVisiblity })
    );
}