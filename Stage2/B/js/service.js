function Service(wdays, meals) {
  const DATA_KEY = "dietData";
  let showUpdateSuccess;
  let showUpdateFail;
  let refreshMealUI;

  if (localStorage.getItem(DATA_KEY) === null) {
    let defaultarr = [];

    for (const i in WEEKDAYS) {
      defaultarr.push([[], [], [], []]);
    }

    localStorage.setItem(DATA_KEY, JSON.stringify(defaultarr));
  }

  const model = new Model(
    JSON.parse(localStorage.getItem(DATA_KEY)),
    WEEKDAYS,
    MEALS
  );

  this.getData = function () {
    return model.schedule;
  };

  this.bindShowUpdateSuccess = function (callbackFn) {
    showUpdateSuccess = callbackFn;
  };

  this.bindShowUpdateFail = function (callbackFn) {
    showUpdateFail = callbackFn;
  };

  this.bindRefreshMealUI = function (callbackFn) {
    refreshMealUI = callbackFn;
  };

  this.updateMeal = function (day, meal, foodItems) {
    if (model.updateMeal(day, meal, foodItems)) {
      showUpdateSuccess();
      localStorage.setItem(DATA_KEY, JSON.stringify(model.getCompressedData()));
      refreshMealUI(this.getData(), [day], [meal]);
    } else {
      showUpdateFail();
    }
  };
}
