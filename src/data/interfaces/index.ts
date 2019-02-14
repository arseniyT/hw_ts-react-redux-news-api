import { sortByProp } from "../types";

export interface IApiData {
    CATEGORIES: string[];
    KEY_Q: string;
    MY_KEY: string;
    URL: string;
}

export interface IState {
    isSearchForm: boolean;
    currentTab: string;
    data: IContent[];
    order: string;
    sortedBy: sortByProp;
}

export interface IContent {
    source: {
      id: string,
      name: string,
    };
    author: string;
    title: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}



