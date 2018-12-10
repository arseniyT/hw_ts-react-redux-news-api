import React from 'react';
import { newsData } from '../../data/constants/constants';

const CategoryTabs = ({ currentTab, setTab }) => {
    const {CATEGORIES} = newsData;

    return <div className="tabs">
        {
            CATEGORIES.map(category => {
                let checkSelected = currentTab === category ? 'selected' : '';

                return (
                    <div key={category} className={`tab ${checkSelected}`} onClick={setTab(category)}>
                        {category}
                    </div>
                )
            })
        }
    </div>
};

export default CategoryTabs;