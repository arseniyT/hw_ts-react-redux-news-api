import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";
import { connect } from "react-redux";
import {
    loadData,
    setTab,
    sortAZ,
    sortBy,
    sortZA,
} from "../../../actions/actionCreators";
import { IContent, IState } from "../../../data/interfaces";
import { sortByProp } from "../../../data/types";

interface IProps {
  data: IContent[];
  sortedBy: sortByProp;
  loadData: (currentTab: string) => void;
  sortAZ: (value: sortByProp) => void;
  sortBy: (value: sortByProp) => void;
  sortZA: (value: sortByProp) => void;
  setTab: (currentTab: string) => void;
  order: string;
}

class Toolbar extends Component<IProps> {

  public searchIt = (value: string) => {
    if (value !== "") {
      this.props.setTab(value);
      this.props.loadData(value);
    }
  }

  public inputOnChangeHandler = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.searchIt(target.value);
  }

  public sortByAlphabetHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.currentTarget.className === "AZ") {
      this.props.sortAZ(this.props.sortedBy);
    } else {
      this.props.sortZA(this.props.sortedBy);
    }
  }

  public sortByTitleHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.sortBy("title");
  }

  public sortByAuthorHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.sortBy("author");
  }

  public render() {
    const { sortedBy, order } = this.props;
    const selectedClassName = "selected";

    return (
      <form>
        <div className="tools">
          <div className="searcher">
            <DebounceInput type="text"
                   placeholder="type here"
                   title="type text to search"
                   debounceTimeout={ 500 }
                   onChange={ this.inputOnChangeHandler } />
          </div>
          <div className="sorter">
            <button onClick={ this.sortByTitleHandler }
                    className={ sortedBy === "title" ? selectedClassName : "" }
                    title="sort by Title">
              Title
            </button>
            <button onClick={ this.sortByAuthorHandler }
                    className={ sortedBy === "author" ? selectedClassName : "" }
                    title="sort by Author">
              Author
            </button>
            <div className="order">
              (
              <button className={ order === "AZ" ? selectedClassName + " AZ" : "AZ" }
                      title="sort by A..Z"
                      onClick={ this.sortByAlphabetHandler }>
                A..Z
              </button>
              :
              <button className={ order === "ZA" ? selectedClassName + " ZA" : "ZA" }
                      title="sort by Z..A"
                      onClick={ this.sortByAlphabetHandler }>
                Z..A
              </button>
              )
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  (state: IState) => ({
    data: state.data,
    order: state.order,
    sortedBy: state.sortedBy,
  }),
  {
    loadData,
    setTab,
    sortAZ,
    sortBy,
    sortZA,
  },
)(Toolbar);
