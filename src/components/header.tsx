import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import logoImg from  "./../images/logoRes.png"
import "./styles/header.scss"
import {useSelector} from "react-redux";

const Header:React.FC = () => {

    const roles = useSelector((state:any) => state.currentUserReducer.roles);

    const logOut = () => {
        localStorage.clear();
        window.location.href = '/login'
    }

    return (
        <div className={'header'} >
            <img className={'logoImg'} src={logoImg} alt={"logoImg"}/>
            <nav className={'navigation'} >
                {
                    Array.isArray(roles) && roles.includes('ADMIN') &&
                    <NavLink className={'link'} to={"/administration"}>
                        <div>ADMINISTRATION</div>
                    </NavLink>
                }

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

            <div className={'log-out'} onClick={logOut}>LOG OUT</div>

        </div>
    );
};

export default Header;