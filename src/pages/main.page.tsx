import React from 'react';
import ListItems from "../components/list-items";
import Header from "../components/header";
import {Route, Routes} from "react-router-dom";
import Basket from "../components/basket";
import AdministrationPage from "./administration.page";
import AboutAs from "../components/aboutAs";
import "./styles/main.page.scss"


const MainPage: React.FC = () => {

    return (
        <div className={'main-page'}>
            <Header/>
            <Routes>
                <Route path="menu" element={<ListItems/>}/>
                <Route path="basket" element={<Basket/>}/>
                <Route path="administration" element={<AdministrationPage/>}/>
                <Route path="aboutUs" element={<AboutAs/>}/>
            </Routes>

        </div>
    );
};

export default MainPage;