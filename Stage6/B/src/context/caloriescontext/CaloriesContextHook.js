import { useRef, useState } from "react";
import {
  getCalories,
  setCalories,
  weeklyCalories,
} from "../../objectmodel/caloriesLocalStorage/localStorage";

export default function useCaloriesContextHook() {
  const [todayCalorie, setTodayCalorie] = useState(() => getCalories());
  const [weeklyCalorie, setWeeklyCalorie] = useState(() => weeklyCalories());

  const updateCalorie = useRef(function updateCalorie(newVal) {
    if (setCalories(newVal)) {
      setWeeklyCalorie((prev) => weeklyCalories());
      setTodayCalorie((prev) => getCalories());
    }
  });

  return {
    todayCalorie,
    weeklyCalorie,
    updateCalorie: updateCalorie.current,
  };
}
