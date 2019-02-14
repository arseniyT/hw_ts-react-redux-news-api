import { combineReducers } from "redux";
import * as act from "../actions/actionTypes";
import { newsData } from "../data/constants";
import { IContent } from "../data/interfaces";
import { sortByProp } from "../data/types";

interface IAct {
  type: string;
  payload: any;
}

const currentTab = (state: string = newsData.CATEGORIES[0], action: IAct) => {
  if (action.type === act.SET_TAB) {
    return action.payload;
  } else {
    return state;
  }
};

const data = (state: IContent[] | null = null, action: IAct) => {
  if (action.type === act.LOAD_DATA) {
    return action.payload || [];
  }

  if (action.type === act.SORT_DATA) {
    return action.payload;
  }

  return state;
};

const sortedBy = (state: sortByProp = "title", action: IAct) => {
  if (action.type === act.SORT_BY) {
    return action.payload;
  }

  return state;
};

const order = (state: string = "AZ", action: IAct) => {
  if (action.type === act.SORT_AZ) {
    return action.payload;
  }

  if (action.type === act.SORT_ZA) {
    return action.payload;
  }

  return state;
};

export const appReducer = combineReducers({
  currentTab,
  data,
  order,
  sortedBy,
});

export default appReducer;
