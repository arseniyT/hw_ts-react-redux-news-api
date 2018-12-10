import React from 'react';

const Content = ({ data }) => {
    if (data) {
        return (
            <main className="content">
                {
                    data.map(item => {
                        const timestamp = new Date(item.publishedAt);
                        const day = timestamp.getDate();
                        const month = timestamp.getMonth();
                        const year = timestamp.getFullYear();

                        if (item.publishedAt !== null &&
                            item.urlToImage !== null &&
                            item.title !== null &&
                            item.author !== null &&
                            item.author !== '' &&
                            item.url !== null &&
                            item.source.name !== null) {

                            return (
                                <article key={item.title}
                                         className="news-item"
                                         style={{backgroundImage: `url(${item.urlToImage})`}}>

                                    <p className="news-date">{day}/{month}/{year}</p>
                                    <h2>{item.title}</h2>
                                    <p className="news-author">author: {item.author}</p>
                                    <p className="news-source">source:
                                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                                            {item.source.name}
                                        </a>
                                    </p>

                                </article>
                            )
                        } else {
                            return null;
                        }
                    })
                }
            </main>
        )
    }
};

export default Content;