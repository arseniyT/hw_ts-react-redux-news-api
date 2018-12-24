import React, {ReactNode} from "react";
import { newsData } from "../../data/constants/constants";

interface ITabsProps {
    currentTab: string;
    setTab: (currentTab: string) => () => void;
}

const CategoryTabs: React.SFC<ITabsProps> = ({ currentTab, setTab }) => {
    const {CATEGORIES} = newsData;

    return <div className="tabs">
        {
            CATEGORIES.map((category): ReactNode => {
                const checkSelected = currentTab === category ? "selected" : "";

                return (
                    <div key={category} className={`tab ${checkSelected}`} onClick={setTab(category)}>
                        {category}
                    </div>
                );
            })
        }
    </div>;
};

export default CategoryTabs;
