import React, {ReactNode} from "react";
import {INewsData} from "../App/App";

interface IContentProps {
    data: INewsData[];
}

const Content: React.SFC<IContentProps> = ({data}) => {
    return (
        <main className="content">
            {
                data.map((item: INewsData): ReactNode => {
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
};

export default Content;
