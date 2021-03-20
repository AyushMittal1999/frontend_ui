function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
@class Model
*/

function Model(schedule_data, weekdays, meals) {

    var WEEKDAYS = weekdays;
    var MEALS = meals;

    var data = {};

    for (var i = 0; i < WEEKDAYS.length; i++) {
        data[WEEKDAYS[i]] = {};
        for (var j = 0; j < MEALS.length; j++) {
            data[WEEKDAYS[i]][MEALS[j]] = schedule_data[i][j];
        }
    }

    var compressedData = [];

    for (var _i = 0; _i < WEEKDAYS.length; _i++) {
        compressedData.push([]);
        for (var _j = 0; _j < MEALS.length; _j++) {
            compressedData[_i].push(data[WEEKDAYS[_i]][MEALS[_j]]);
        }
    }

    this.schedule = data;
    compressedData = compressedData;

    this.addFoodItems = function (day, meal, items) {

        if (day && meal && items && Array.isArray(items)) {

            items.filter(function (item) {
                return item && item != "";
            });

            if (day in this.schedule && meal in this.schedule[day]) {
                var _schedule$day$meal, _compressedData$WEEKD;

                (_schedule$day$meal = this.schedule[day][meal]).push.apply(_schedule$day$meal, _toConsumableArray(items));
                (_compressedData$WEEKD = compressedData[WEEKDAYS.indexOf(day)][MEALS.indexOf(meal)]).push.apply(_compressedData$WEEKD, _toConsumableArray(items));
                return 1;
            }
        }
        return 0;
    };

    this.updateMeal = function (day, meal, items) {

        if (day && meal && items) {

            items.filter(function (item) {
                return item && item != "";
            });

            if (day in this.schedule && meal in this.schedule[day]) {

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

                this.schedule[day][meal] = items;
                compressedData[WEEKDAYS.indexOf(day)][MEALS.indexOf(meal)] = items;
                return 1;
            }
        }
        return 0;
    };

    this.getCompressedData = function () {

        return compressedData;
    };
}