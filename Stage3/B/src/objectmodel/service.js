
function Service(wdays, meals) {

    var DATA_KEY = "dietData";

    this.WEEKDAYS = wdays;
    this.MEALS = meals;

    if (localStorage.getItem(DATA_KEY) === null) {
        var defaultarr = [];
        for (var i in wdays) {
            defaultarr.push([[], [], [], []]);
        }
        localStorage.setItem(DATA_KEY, JSON.stringify(defaultarr));
    }

    var model = new Model(JSON.parse(localStorage.getItem(DATA_KEY)), wdays, meals);
    Service.prototype.updateMeal = function (day, meal, foodItems) {

        if (model.updateMeal(day, meal, foodItems)) {
            localStorage.setItem(DATA_KEY, JSON.stringify(model.getCompressedData()));
            return 1;
        }

        return 0;
    };

    Service.prototype.getMealData = function (day, meal) {
        if (day in model.schedule && meal in model.schedule[day]) {
            return model.schedule[day][meal];
        }
        return [];
    };

    Service.prototype.getDayData = function (day) {
        if (day in model.schedule) {
            return model.schedule[day];
        }
        return [];
    };
}