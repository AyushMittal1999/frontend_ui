import { useState, useRef } from "react";
import { MEALS, WEEKDAYS } from "../../constants/Constants";
import {
  getLocalData,
  updateBulkDataAtLocal,
} from "../../objectmodel/mealLocalStorage/LocalStorage";

// Initialize Context State
function useContextStateHook() {
  // Current Application data State
  const [data, setData] = useState(() => getLocalData());
  // Last Data Saved in local Storage
  const [lastSavedData, setLastSavedData] = useState(() => getLocalData());
  // State to monitor active chnages
  const [pendingUpdates, setPendingUpdates] = useState(new Map());

  // Using Ref to mantain Same signature of function
  // Function To monitor changes in Data
  // If any active change to be saved in Local, this object provides details for same
  const updatePendingState = useRef(function updatePendingState(
    day,
    meal,
    items
  ) {
    if (WEEKDAYS.indexOf(day) !== -1 && MEALS.indexOf(meal) !== -1) {
      if (JSON.stringify(items) !== JSON.stringify(lastSavedData[day][meal])) {
        setPendingUpdates((prev) => {
          const newmap = new Map(prev);
          newmap.set(
            day,
            newmap.has(day) ? [...newmap.get(day), [meal, 1]] : [[meal, 1]]
          );
          return newmap;
        });
      } else {
        setPendingUpdates((prev) => {
          const newmap = new Map(prev);
          if (newmap.has(day)) {
            newmap.get(day).size > 1
              ? newmap.get(day).delete(meal)
              : newmap.delete(day);
          }
          // debugger;

          return newmap;
        });
      }
    }
  });

  // Using Ref to mantain Same signature of function
  // Function updates Data corresponding to a day,meal
  const updateDataRef = useRef(function updateData(day, meal, items) {
    if (WEEKDAYS.indexOf(day) !== -1 && MEALS.indexOf(meal) !== -1) {
      updatePendingState.current(day, meal, items);
      setData((state) => ({
        ...state,
        [day]: {
          ...state[day],
          [meal]: [...items],
        },
      }));
    }
  });

  // Using Ref to mantain Same signature of function
  // Function updates Data corresponding to a day, meal and an index
  const updateDataOneRowRef = useRef(function updateDataOneRow(
    day,
    meal,
    index,
    newRow
  ) {
    if (WEEKDAYS.indexOf(day) !== -1 && MEALS.indexOf(meal) !== -1) {
      setData((state) => {
        const newArray = [...state[day][meal]];

        if (index < newArray.length) {
          newArray[index] = newRow;
          updatePendingState.current(day, meal, newArray);

          return {
            ...state,
            [day]: {
              ...state[day],
              [meal]: newArray,
            },
          };
        }
        return state;
      });
    }
  });

  // Using Ref to mantain Same signature of function
  // Function deletes Data corresponding to a day, meal and an index
  const updateDataDeleteRowRef = useRef(function updateDataDeleteRow(
    day,
    meal,
    index
  ) {
    setData((state) => {
      if (
        state &&
        state[day] &&
        state[day][meal] &&
        state[day][meal].length &&
        index >= 0 &&
        state[day][meal].length > index
      ) {
        const array = state[day][meal];
        updatePendingState.current(
          day,
          meal,
          array.slice(0, index).concat(array.slice(index + 1))
        );

        return {
          ...state,
          [day]: {
            ...state[day],
            [meal]: array.slice(0, index).concat(array.slice(index + 1)),
          },
        };
      } else {
        return state;
      }
    });
  });

  function refreshlocalStorage() {
    if (updateBulkDataAtLocal(data)) {
      setPendingUpdates(new Map());
      setLastSavedData(() => getLocalData());
      return true;
    }
    return false;
  }

  return {
    data,
    pendingUpdates,
    updateDataDeleteRow: updateDataDeleteRowRef.current,
    updateData: updateDataRef.current,
    updateDataOneRow: updateDataOneRowRef.current,
    refreshlocalStorage,
  };
}
export default useContextStateHook;
