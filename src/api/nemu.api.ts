import {BurgerItemDto} from "../dto/burger-item.dto";
import axios from "axios";

export async function loadBurgers():Promise<BurgerItemDto[]>{
    try {
        const token = localStorage.getItem('token')
        const response = await axios.get("http://localhost:5000/menu",{headers:{
                Authorization: `Bearer ${token}`
            }})
        return response.data
    }
    catch (e){
        console.log(e)
        return []
    }
}

export async function addBurger(payload:any){
    console.log(payload)
    try {
        const token = localStorage.getItem('token')
        const response = await axios.post("http://localhost:5000/menu/addBurger",
            payload,
            {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
        return response.data
    }
    catch (e){
        console.log(e)
    }
}

