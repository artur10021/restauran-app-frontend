import {BurgerItemDto} from "../dto/burger-item.dto";
import {ActionType} from "../types/action.type";
import {UserDto} from "../dto/user.dto";

interface Burgers {
    burgers: BurgerItemDto[];
    loading: boolean;
}

const initialState: Burgers = {
    burgers:[],
    loading: false,
}

export const menuReducer = (state = initialState, action:ActionType):Burgers =>{
    switch (action.type){
        case "LOAD_BURGERS":
            return {...state, burgers: action.payload}
        case "ADD_BURGER_TO_MENU":
            return {...state, burgers: [...state.burgers, action.payload]}
        case "DELETE_BURGER_FROM_MENU":
            console.log("action.payload.id", action.payload.id)
            return {...state, burgers: state.burgers.filter((burgers:BurgerItemDto)=>burgers.id !== action.payload.id)}
        case "IS_LOADING":
            return {...state, loading: action.payload}
        default:
            return state;
    }
}

export const loadBurgerAC = (payload: BurgerItemDto)=>({type:"LOAD_BURGERS", payload: payload});
export const DeleteBurgerAC = (payload: BurgerItemDto)=>({type:"DELETE_BURGER_FROM_MENU", payload: payload});
export const addBurgerToMenuAC = (payload: BurgerItemDto)=>({type:"ADD_BURGER_TO_MENU", payload: payload});