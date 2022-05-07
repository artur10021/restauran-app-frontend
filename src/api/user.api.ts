import axios from "axios";
import {RegisterDto} from "../dto/register.dto";

export const registerUser= async (data: RegisterDto) => {
    try {
        const response = await axios.post("http://localhost:5000/auth/registration", data)
        return response.data
    }
    catch (err){
        console.log(err);
    }
}

export const loginUser= async (data: RegisterDto) => {
    try {
        const response = await axios.post("http://localhost:5000/auth/login", data)
        return response.data
    }
    catch (err){
        console.log(err);
    }
}

export const deleteUser = async (email:any) => {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.delete("http://localhost:5000/users/"+ email.payload.email,{headers:{
                Authorization: `Bearer ${token}`
            }},)
        return response.data
    }
    catch (err){
        console.log(err);
    }
}

export const getAllUsers = async () => {
    try {
        const token = localStorage.getItem('token')
        const response:any = await axios.get("http://localhost:5000/users",{headers:{
                Authorization: `Bearer ${token}`
            }},)
        return response.data
    }
    catch (err){
        console.log(err);
    }
}

export const getUserByLogin = async (login:string) => {
    try {
        const token = localStorage.getItem('token')
        const response:any = await axios.get("http://localhost:5000/users" + login,{headers:{
                Authorization: `Bearer ${token}`
            }},)
        return response.data
    }
    catch (err){
        console.log(err);
    }
}

export const addRole = async (payload:any) => {
    try {
        const token = localStorage.getItem('token')
        console.log( payload)
        const response:any = await axios.post("http://localhost:5000/users/addRole",
            {userId: payload.payload.userId, value:payload.payload.value},
            {
            headers:{
                Authorization: `Bearer ${token}`
            }
            })
        return response.data
    }
    catch (err){
        console.log(err);
    }
}

