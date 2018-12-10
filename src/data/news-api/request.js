import { newsData } from '../constants/constants';

export const loadCategory = async (category) => {
    const newsApiUrl = newsData.URL;
    const countryQuery = newsData.COUNTRY_Q + newsData.COUNTRY;
    const categoryQuery = newsData.CATEGORY_Q + category;
    const keyQuery = newsData.KEY_Q + newsData.MY_KEY;
    const requestUrl = newsApiUrl + countryQuery + categoryQuery + keyQuery;
    const result = await fetch(requestUrl).then(response => response.json());

    return result.articles;
};