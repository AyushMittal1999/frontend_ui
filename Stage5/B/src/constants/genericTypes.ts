import { MEALS, WEEKDAYS } from "./Constants";

export type TodayCardData = [
  [string, string, string],
  [string, string, string],
  [string, string, string],
  [string, string, string]
];
export type CardData = string[];
export type GenericObject = { [key: string]: GenericObject | any };
export type StatusVisiblity = 1 | 0 | -1;

export type ValidDaysType = typeof WEEKDAYS[number];
export type ValidMealType = typeof MEALS[number];
