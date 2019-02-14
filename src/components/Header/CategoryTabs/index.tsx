import React, { Component } from "react";
import { connect } from "react-redux";
import { loadData, setTab } from "../../../actions/actionCreators";
import { newsData } from "../../../data/constants";
import { IState } from "../../../data/interfaces";

interface ITabsProps {
    currentTab: string;
    setTab: (currentTab: string) => void;
    loadData: (currentTab: string) => void;
}

class CategoryTabs extends Component<ITabsProps> {
    public componentDidMount() {
        this.props.setTab(this.props.currentTab);
        this.props.loadData(this.props.currentTab);
    }

    public switchTabHandler = (category: string) => () => {
        this.props.setTab(category);
        this.props.loadData(category);
    }

    public render() {
        return (
        <div className="tabs">
            {
                newsData.CATEGORIES.map((category) => {
                    const checkSelected = this.props.currentTab === category ? "selected" : "";

                    return (
                        <div key={category}
                            className={`tab ${checkSelected}`}
                            onClick={this.switchTabHandler(category)}>
                            {category}
                        </div>
                    );
                })
            }
        </div>
        );
    }
}

export default connect(
    (state: IState) => {
        return ({
            currentTab: state.currentTab,
            data: state.data,
        });
    },
    { loadData, setTab },
)(CategoryTabs);
