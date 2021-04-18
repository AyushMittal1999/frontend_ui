import { useState, useRef } from "react";
import { MEALS, WEEKDAYS } from "../constants/Constants";
import { ValidDaysType, ValidMealType } from "../constants/genericTypes";
import { getLocalData } from "../objectmodel/LocalStorage";
import { scheduleDataType } from "../objectmodel/Model";

export interface ContextStatusInterface {
  visiblity: 1 | 0 | -1;
  message: string;
}
export interface ContextInterface {
  readonly data: scheduleDataType;
  readonly status: ContextStatusInterface;
  readonly modalVisiblity: boolean;
  updateData(day: ValidDaysType, meal: ValidMealType, items: string[]): void;
  updateStatus(visiblity: 1 | 0 | -1, message?: string): void;
  updateModal(show: boolean): void;
}

// Initialize Context State
function useContextStateHook(): ContextInterface {
  const [data, setData] = useState<scheduleDataType>(
    (): scheduleDataType => getLocalData()
  );
  const [status, setStatus] = useState<ContextStatusInterface>(() => ({
    visiblity: -1,
    message: "",
  }));
  const [modalVisiblity, setModalVisiblity] = useState<boolean>(() => false);

  // Using useRef hook to make function reference same
  const updateStatusRef = useRef<ContextInterface["updateStatus"]>(function (
    visiblity,
    message = ""
  ) {
    if ([0, -1, 1].indexOf(visiblity) !== -1)
      // visiblity should be one of [1,-1,0] value
      setStatus({ visiblity, message });
    else setStatus({ visiblity: -1, message: "" });
  });

  const updateDataRef = useRef<ContextInterface["updateData"]>(
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
  );
  const updateModalRef = useRef<ContextInterface["updateModal"]>(
    function updateModal(show) {
      if (show) {
        setModalVisiblity((prev) => true);
      } else {
        setModalVisiblity((prev) => false);
      }
    }
  );

  return {
    data,
    status,
    modalVisiblity,
    updateModal: updateModalRef.current,
    updateStatus: updateStatusRef.current,
    updateData: updateDataRef.current,
  };
}
export default useContextStateHook;
