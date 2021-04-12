import { useState } from "react";
import { MEALS, WEEKDAYS } from "../constants/Constants";
import { getLocalData } from "../objectmodel/LocalStorage";

// Initialize Context State
function useContextStateHook() {
  const [data, setData] = useState(() => getLocalData());
  const [status, setStatus] = useState(() => ({ visiblity: -1, message: "" }));
  const [modalVisiblity, setModalVisiblity] = useState(() => false);

  // Contant functions
  function updateStatus(visiblity, message = "") {
    if ([0, -1, 1].indexOf(visiblity) !== -1)
      // visiblity should be one of [1,-1,0] value
      setStatus({ visiblity, message });
    else setStatus({ visiblity: -1, message: "" });
  }
  function updateData(day, meal, items) {
    if (WEEKDAYS.indexOf(day) !== -1 && MEALS.indexOf(meal) !== -1) {
      setData((state) => ({
        ...state,
        [day]: {
          ...state[day],
          [meal]: [...items],
        },
      }));
    }
  }
  function updateModal(show) {
    if (show) {
      setModalVisiblity((prev) => true);
    } else {
      setModalVisiblity((prev) => false);
    }
  }
  return {
    data,
    status,
    modalVisiblity,
    updateModal,
    updateStatus,
    updateData,
  };
}
export default useContextStateHook;
