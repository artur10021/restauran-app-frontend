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