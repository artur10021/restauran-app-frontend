import React, {useEffect, useState} from 'react';
import "./register.page.scss"
import axios from "axios";
import {registerUser} from "../api/user.api";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";

const RegisterPage: React.FC = () => {

    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const register = async (e: any) => {
        e.preventDefault();
        dispatch({
            type: "REGISTER_USER_REQUEST",
            payload: {
                email: loginInput,
                password: passwordInput,
                navigate: navigate,
            }
        })
    }

    const moveToLoginPage = () => {
        navigate('/login');
    }

    return (
        <div className={"auth-container"}>
            <form className={"auth-form"}>
                registration
                <input
                    className={"auth-input"}
                    value={loginInput}
                    onChange={event => setLoginInput(event.target.value)}
                    type={"text"}
                    placeholder={"login"}
                />
                <input
                    className={"auth-input"}
                    value={passwordInput}
                    onChange={event => setPasswordInput(event.target.value)}
                    type={"password"}
                    placeholder={"password"}
                />
                <button className={"auth-button"} onClick={register}>registration</button>
                <div onClick={moveToLoginPage}>I already have an account</div>
            </form>
        </div>
    );
};

export default RegisterPage;