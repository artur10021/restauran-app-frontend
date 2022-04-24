import {BurgerItemDto} from "../dto/burger-item.dto";
import {ActionType} from "../types/action.type";
import {AddedToBasketBurgerDto} from "../dto/addedToBasketBurger.dto";

interface Burgers {
    addedBurgers: AddedToBasketBurgerDto[];
    loading: boolean;
}

let basket:any = localStorage.getItem("basket")
if(basket){
    basket = JSON.parse(basket).addedBurgers
    console.log(basket)
}
else{
    basket = []
}
const initialState: Burgers = {
    addedBurgers: basket,
    loading: false,
}

export const basketReducer = (state = initialState, action:ActionType):Burgers =>{
    switch (action.type){
        case "ADD_BURGERS_TO_BASKET":
            if(state.addedBurgers.length){
                for (let i = 0; i < state.addedBurgers.length; i++) {
                    if (state.addedBurgers[i].burgerId == action.payload.burgerId){
                        state.addedBurgers[i].count = Number(state.addedBurgers[i].count) + Number(action.payload.count)
                        localStorage.setItem("basket", JSON.stringify({...state}))
                        return {...state}
                    }
                    else if(i == state.addedBurgers.length - 1){
                        localStorage.setItem("basket", JSON.stringify({...state, addedBurgers: [...state.addedBurgers ,action.payload]}))
                        return {...state, addedBurgers: [...state.addedBurgers ,action.payload]}
                    }
                }
                localStorage.setItem("basket", JSON.stringify({...state}))
                return {...state}
            }
            else {
                localStorage.setItem("basket", JSON.stringify({...state, addedBurgers: [...state.addedBurgers ,action.payload]}))
                return {...state, addedBurgers: [...state.addedBurgers ,action.payload]}
            }
        case "REMOVE_ITEM_FROM_BASKET":
            const burgers = state.addedBurgers.filter((burger:any)=>burger.burgerId !== action.payload)
            if(burgers.length ){
                localStorage.setItem("basket", JSON.stringify({...state, addedBurgers: burgers}))
            }
            else {
                localStorage.removeItem("basket")
            }
            return {...state, addedBurgers: burgers}
        default:
            return state;
    }
}

export const addBurgersToBasketAC = (payload: BurgerItemDto)=>({type:"ADD_BURGERS_TO_BASKET", payload: payload});
export const removeItemFromBasketAC = (payload: AddedToBasketBurgerDto)=>({type:"REMOVE_ITEM_FROM_BASKET", payload: payload});
