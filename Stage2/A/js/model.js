/*
@class Model
*/

class Model {
  #WEEKDAYS;
  #MEALS;
  #compressedData;

  constructor(schedule_data, weekdays, meals) {
    this.#WEEKDAYS = weekdays;
    this.#MEALS = meals;

    let data = {};

    for (let i = 0; i < this.#WEEKDAYS.length; i++) {
      data[this.#WEEKDAYS[i]] = {};
      for (let j = 0; j < this.#MEALS.length; j++) {
        data[this.#WEEKDAYS[i]][this.#MEALS[j]] = schedule_data[i][j];
      }
    }

    let compressedData = [];

    for (let i = 0; i < this.#WEEKDAYS.length; i++) {
      compressedData.push([]);
      for (let j = 0; j < this.#MEALS.length; j++) {
        compressedData[i].push(data[this.#WEEKDAYS[i]][this.#MEALS[j]]);
      }
    }

    this.schedule = data;
    this.#compressedData = compressedData;
  }

  addFoodItems(day, meal, items) {
    if (day && meal && items && Array.isArray(items)) {
      items.filter((item) => item && item != "");

      if (day in this.schedule && meal in this.schedule[day]) {
        this.schedule[day][meal].push(...items);
        this.#compressedData[this.#WEEKDAYS.indexOf(day)][
          this.#MEALS.indexOf(meal)
        ].push(...items);
        return 1;
      }
    }
    return 0;
  }

  updateMeal(day, meal, items) {
    if (day && meal && items) {
      // Avoid Duplicates
      let taken = new Map();
      for (const ele of items) {
        if (ele != "" && !taken.has(ele.toLowerCase())) {
          taken.set(ele.toLowerCase(), ele);
        }
      }
      items = Array.from(taken.values());

      if (day in this.schedule && meal in this.schedule[day]) {
        this.schedule[day][meal] = items;
        this.#compressedData[this.#WEEKDAYS.indexOf(day)][
          this.#MEALS.indexOf(meal)
        ] = items;
        return 1;
      }
    }
    return 0;
  }

  getCompressedData() {
    return this.#compressedData;
  }
}
