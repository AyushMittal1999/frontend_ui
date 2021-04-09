var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function App(_ref) {
  var dataService = _ref.dataService,
      constants = _ref.constants;

  var weekdays = constants.WEEKDAYS;

  var _React$useState = React.useState(function () {
    return false;
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isModalVisible = _React$useState2[0],
      setIsModalVisible = _React$useState2[1];

  // success, fail, none etc


  var _React$useState3 = React.useState(-1),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      statusVisiblity = _React$useState4[0],
      setStatusVisiblity = _React$useState4[1];

  var prevTimeOut = React.useRef();

  var updateData = function updateData(day, meal, foodItems) {
    if (dataService.updateMeal(day, meal, foodItems)) {
      // Hide Modal
      setIsModalVisible(false);
      //IF previous timeout exist remove it
      if (prevTimeOut.current) {
        clearTimeout(prevTimeOut.current);
      }
      // Show sucess status
      setStatusVisiblity(1);
      // Hide status after 2 sec
      prevTimeOut.current = setTimeout(setStatusVisiblity, 2000, -1);
      // Return 1 to modal to clear modal fields
      return 1;
    } else {
      // UNSUCESS - UPDATE
      console.log("error occureed");

      //IF previous timeout exist remove it
      if (prevTimeOut.current) {
        clearTimeout(prevTimeOut.current);
      }

      // Show sucess status
      setStatusVisiblity(0);
      // Hide status after 2 sec
      prevTimeOut.current = setTimeout(setStatusVisiblity, 2000, -1);

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
    isModalVisible ? React.createElement(Modal, {
      constants: constants,
      visiblity: isModalVisible,
      displayModalHandler: setIsModalVisible,
      updateData: updateData
    }) : React.createElement(React.Fragment, null),
    React.createElement(Today, {
      constants: constants,
      schedule: dataService.getDayData(todayDay)
    }),
    React.createElement(WeekScheduleHeading, { displayModalHandler: setIsModalVisible }),
    weekdays.slice(weekdays.indexOf(todayDay), 7).concat(weekdays.slice(0, weekdays.indexOf(todayDay))).map(function (w) {
      return React.createElement(Weekday, {
        day: w,
        key: w,
        constants: constants,
        schedule: dataService.getDayData(w)
      });
    }),
    statusVisiblity !== -1 ? React.createElement(Status, { isSuccess: statusVisiblity }) : React.createElement(React.Fragment, null)
  );
}