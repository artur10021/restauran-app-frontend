import React from 'react';
import {NavLink} from "react-router-dom";
import logoImg from  "./../images/logoRes.png"
import "./styles/header.scss"
import {useSelector} from "react-redux";

const Header:React.FC = () => {

    const roles = useSelector((state:any) => state.currentUserReducer.roles)
    console.log(roles)
    console.log(roles.includes("ADMIN"))

    return (
        <div className={'header'} >
            <img className={'logoImg'} src={logoImg} alt={"logoImg"}/>
            {
                roles.includes("ADMIN") && <button>панель администратора</button>
            }
            <nav className={'navigation'} >
                <NavLink className={'link'} to={'/basket'}>
                    <div>BASKET</div>
                </NavLink>
                <NavLink className={'link'} to={'/aboutUs'}>
                    <div>ABOUT US</div>
                </NavLink>
                <NavLink className={'link'} to={'/menu'}>
                    <div>MENU</div>
                </NavLink>
            </nav>

        </div>
    );
};

export default Header;