interface InewsData {
    CATEGORIES: string[];
    CATEGORY_Q: string;
    COUNTRY: string;
    COUNTRY_Q: string;
    KEY_Q: string;
    MY_KEY: string;
    URL: string;
}

interface ILoaderMsgs {
    error: string;
    greeting: string;
    spinner: string;
}

export const newsData: InewsData = {
    CATEGORIES: ["technology", "science", "entertainment", "health"],
    CATEGORY_Q: "&category=",
    COUNTRY: "us",
    COUNTRY_Q: "country=",
    KEY_Q: "&apiKey=",
    MY_KEY: "45ccda2e9ee14d229bab50fe6b1808b5",
    URL: "https://newsapi.org/v2/top-headlines?",
};

export const loaderMsg: ILoaderMsgs = {
    error: "Houston, we have a problem... Please try later",
    greeting: "welcome...",
    spinner: "8)",
};
