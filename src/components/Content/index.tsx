import React, { Component } from "react";
import { connect } from "react-redux";
import { IContent, IState } from "../../data/interfaces";
import { sortByProp } from "../../data/types";
import Preloader from "../Preloader";

interface IContentProps {
    data: IContent[];
    currentTab: string;
    sortedBy: sortByProp;
    order: string;
}

class Content extends Component<IContentProps> {
    public render() {
        const news = this.props.data;

        if (!news) {
            return (
                <Preloader/>
            );
        } else if (!news.length) {
            return (
              <div className="not-found">
                <span>No matches for your request...</span>
              </div>
            );
        }
        return (
            <main className="content">
                {
                    news.map((item: IContent) => {
                        return (
                            <article key={item.title}
                                     className="news-item"
                                     style={{backgroundImage: `url(${item.urlToImage})`}}>
                                <p className="news-date">{new Date(item.publishedAt).toDateString()}</p>
                                <h2>{item.title}</h2>
                                <p className="news-author">author: {item.author}</p>
                                <p className="news-source">source:
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        {item.source.name}
                                    </a>
                                </p>
                            </article>
                        );
                    })
                }
            </main>
        );
    }
}

export default connect(
    (state: IState) => ({
      currentTab: state.currentTab,
      data: state.data,
      order: state.order,
      sortedBy: state.sortedBy,
    }),
    {},
  )(Content);
