export default function Model(lastSavedCalories) {
  const lastSevenDates = [];

  this.calories = {};

  function refreshCalories(prevCalories) {
    const todayTimeStamp = Date.now();
    const todayDateObj = new Date(todayTimeStamp);
    this.calories = {};
    for (let i = 0; i <= 6; i++) {
      const prevDate = new Date(todayDateObj);
      prevDate.setDate(prevDate.getDate() - i);
      lastSevenDates[i] = prevDate.toDateString();

      if (prevDate.toDateString() in prevCalories) {
        this.calories[prevDate.toDateString()] =
          prevCalories[prevDate.toDateString()];
      } else {
        this.calories[prevDate.toDateString()] = 0;
      }
    }
  }

  refreshCalories.call(this, lastSavedCalories);

  this.getCalories = function () {
    const todayTimeStamp = Date.now();
    const todayDateObj = new Date(todayTimeStamp);
    if (lastSevenDates[0] !== todayDateObj.toDateString()) {
      refreshCalories.call(this, this.calories);
    }
    return this.calories[todayDateObj.toDateString()];
  };

  this.setCalories = function (newCal) {
    const todayTimeStamp = Date.now();
    const todayDateObj = new Date(todayTimeStamp);
    if (lastSevenDates[0] !== todayDateObj.toDateString()) {
      refreshCalories.call(this, this.calories);
    }
    this.calories[todayDateObj.toDateString()] = newCal;
  };

  this.getAverage = function () {
    const todayTimeStamp = Date.now();
    const todayDateObj = new Date(todayTimeStamp);
    if (lastSevenDates[0] !== todayDateObj.toDateString()) {
      refreshCalories.call(this, this.calories);
    }

    let sum = 0;

    for (const key in this.calories) {
      sum += this.calories[key];
    }
    return sum / 7;
  };
}
