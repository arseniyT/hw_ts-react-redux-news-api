import React from "react";
import CategoryTabs from "./CategoryTabs";
import Toolbar from "./Toolbar";

const Header = () => {
    return (
        <header>
            <CategoryTabs/>
            <Toolbar/>
        </header>
    );
};

export default Header;
