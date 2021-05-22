const IDS = {};
// To map list index values to some unique ones  (To be used in React Components)
export function initID(day, meal, noOfItems) {
  if (!IDS[day]) {
    IDS[day] = {};
  }

  if (!IDS[day][meal]) {
    IDS[day][meal] = [];
  }
  for (let i = 0; i < noOfItems; i++) {
    IDS[day][meal][i] = i;
  }
}

export function addID(day, meal) {
  if (!IDS[day]) {
    IDS[day] = {};
  }

  if (!IDS[day][meal]) {
    IDS[day][meal] = [];
  }

  IDS[day][meal].push(
    IDS[day][meal].length === 0
      ? 1
      : IDS[day][meal][IDS[day][meal].length - 1] + 1
  );
}

export function deleteID(day, meal, index) {
  if (!IDS[day]) {
    IDS[day] = {};
  }

  if (!IDS[day][meal]) {
    IDS[day][meal] = [];
  }

  if (IDS[day][meal].length > index)
    IDS[day][meal] = IDS[day][meal]
      .slice(0, index)
      .concat(IDS[day][meal].slice(index + 1));
}

export function getID(day, meal, index) {
  if (!IDS[day]) {
    IDS[day] = {};
  }

  if (!IDS[day][meal]) {
    IDS[day][meal] = [];
  }

  return IDS[day][meal][index];
}

export function getIndexFromID(day, meal, ID) {
  if (!IDS[day]) {
    IDS[day] = {};
  }

  if (!IDS[day][meal]) {
    IDS[day][meal] = [];
  }

  return IDS[day][meal].indexOf(ID);
}
