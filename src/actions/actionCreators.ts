import { Dispatch } from "redux";
import { IContent, IState } from "../data/interfaces";
import { loadCategory } from "../data/news-api/request";
import { sortByProp } from "../data/types";
import * as action from "./actionTypes";

export const setTab = (currentTab: string) => (dispatch: Dispatch) => {
  dispatch({ type: action.SET_TAB, payload: currentTab });
};

export const loadData = (currentTab: string) => async (dispatch: Dispatch) => {
  const data = await loadCategory(currentTab);
  dispatch({ type: action.LOAD_DATA, payload: data.sort(compareBy("title")) });
  return data;
};

export const sortAZ = (value: sortByProp) => (dispatch: Dispatch, getState: () => IState) => {
  dispatch({ type: action.SORT_AZ, payload: "AZ" });
  dispatch({ type: action.SORT_DATA, payload: getState().data.sort(compareBy(value)) });
};

export const sortZA = () => (dispatch: Dispatch, getState: () => IState) => {
  dispatch({ type: action.SORT_ZA, payload: "ZA" });
  dispatch({ type: action.SORT_DATA, payload: getState().data.reverse() });
};

export const sortBy = (value: sortByProp) => (dispatch: Dispatch, getState: () => IState) => {
  dispatch({ type: action.SORT_AZ, payload: "AZ" });
  dispatch({ type: action.SORT_BY, payload: value });
  dispatch({ type: action.SORT_DATA, payload: getState().data.sort(compareBy(value)) });
};

const compareBy = (value: sortByProp) => (a: IContent, b: IContent) => {
    return (a[value] || "z").localeCompare(b[value] || "z");
};
