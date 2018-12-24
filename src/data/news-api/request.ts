import { newsData } from "../constants/constants";

export const loadCategory = async (category: string) => {
    const newsApiUrl: string = newsData.URL;
    const countryQuery: string = newsData.COUNTRY_Q + newsData.COUNTRY;
    const categoryQuery: string = newsData.CATEGORY_Q + category;
    const keyQuery: string = newsData.KEY_Q + newsData.MY_KEY;
    const requestUrl: string = newsApiUrl + countryQuery + categoryQuery + keyQuery;
    const result = await fetch(requestUrl).then((response) => response.json());

    return result.articles;
};
