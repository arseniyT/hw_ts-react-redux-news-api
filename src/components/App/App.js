import React, {Component} from 'react';
import Preloader from '../Preloader/Preloader';
import { newsData, loaderMsg } from '../../data/constants/constants';
import {loadCategory} from '../../data/news-api/request';
import CategoryTabs from '../CategoryTabs/CategoryTabs';
import Content from '../Content/Content';

export default class App extends Component {

    state = {
        currentTab: null,
        isLoading: true,
        isSpinner: false,
        loaderMsg: loaderMsg.greeting,
        data: {},

    };

    componentDidMount() {
        const firstTab = newsData.CATEGORIES[0];

        this.setTab(firstTab)();
    }

    setTab = (currentTab) => () => {
        this.setState({isLoading: true});

        loadCategory(currentTab)
            .then(data => {
                this.setState({
                    currentTab: currentTab,
                    isLoading: false,
                    isSpinner: true,
                    loaderMsg: loaderMsg.spinner,
                    data: data
                });
            })
            .catch(() => {
                this.setState({
                    isLoading: true,
                    isSpinner: false,
                    loaderMsg: loaderMsg.error,
                })
            })
    };

    render() {
        const {currentTab, isLoading, isSpinner, loaderMsg, data } = this.state;

        if (isLoading) {
            return <Preloader isSpinner={isSpinner} msg={loaderMsg}/>
        } else {
            return (
                <React.Fragment>
                    <CategoryTabs currentTab={currentTab} setTab={this.setTab} />
                    <Content data={data} />
                </React.Fragment>
            )
        }
    }
}