import React, {useState} from 'react';
import "./register.page.scss"
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";

const LoginPage: React.FC = () => {

    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const navigator = useNavigate();
    const dispatch = useDispatch()

    const login = async (e: any) => {
        e.preventDefault();
         dispatch({
            type: "LOGIN_USER_REQUEST",
            payload: {
                email: loginInput,
                password: passwordInput,
            }
        })
        navigator("/menu")

    }

    const moveToRegisterPage = () =>{
        navigator('/registration');
    }

    return (
        <div className={"auth-container"}>
            <form className={"auth-form"}>
                login
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
                <button className={"auth-button"} onClick={login}>login</button>
                <div onClick={moveToRegisterPage}>I don't have an account yet</div>
            </form>
        </div>
    );
};

export default LoginPage;