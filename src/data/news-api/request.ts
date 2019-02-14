import { newsData } from "../constants";

export const loadCategory = async (category: string) => {
    const newsApiUrl: string = newsData.URL;
    const keyQuery: string = newsData.KEY_Q + newsData.MY_KEY;
    const requestUrl: string = newsApiUrl + category + keyQuery;
    const result = await fetch(requestUrl).then((response) => response.json());

    return result.articles;
};
