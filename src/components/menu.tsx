import React from 'react';
import ListItems from "./list-items";
import Header from "./header";
import BgImg from "./bgImg";

const Menu: React.FC = () => {
    return (
        <div>
            <Header/>
            <BgImg/>
            <ListItems/>
        </div>
    );
};

export default Menu;