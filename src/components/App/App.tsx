import React, {Component, ReactNode} from "react";
import {loaderMsg, newsData} from "../../data/constants/constants";
import {loadCategory} from "../../data/news-api/request";
import CategoryTabs from "../CategoryTabs/CategoryTabs";
import Content from "../Content/Content";
import Preloader from "../Preloader/Preloader";

export interface INewsData {
    source: {
        name: string,
    };
    author: string;
    title: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

interface INewsAppState {
    currentTab: string;
    data: INewsData[];
    isLoading: boolean;
    isSpinner: boolean;
    loaderMsg: string;
}

export default class App extends Component<{}, INewsAppState> {

    public state = {
        currentTab: "",
        data: [],
        isLoading: true,
        isSpinner: false,
        loaderMsg: loaderMsg.greeting,

    };

    public componentDidMount(): void {
        const firstTab = newsData.CATEGORIES[0];

        this.setTab(firstTab)();
    }

    public setTab = (currentTab: string) => () => {
        this.setState({isLoading: true});

        loadCategory(currentTab)
            .then((data) => {
                this.setState({
                    currentTab,
                    data,
                    isLoading: false,
                    isSpinner: true,
                    loaderMsg: loaderMsg.spinner,
                });
            })
            .catch(() => {
                this.setState({
                    isLoading: true,
                    isSpinner: false,
                    loaderMsg: loaderMsg.error,
                });
            });
    }

    public render(): ReactNode {
        const {currentTab, data, isLoading, isSpinner, loaderMsg } = this.state;

        if (isLoading) {
            return <Preloader isSpinner={isSpinner} msg={loaderMsg}/>;
        } else {
            return (
                <React.Fragment>
                    <CategoryTabs currentTab={currentTab} setTab={this.setTab} />
                    <Content data={data} />
                </React.Fragment>
            );
        }
    }
}
