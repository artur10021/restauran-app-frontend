import {ActionType} from "../types/action.type";
import {UserDto} from "../dto/user.dto";

interface usersInitialState{
    users: [],
}

const initialState: usersInitialState={
    users: [],
}

export const usersReducer = (state = initialState, action:ActionType):Object => {
    switch (action.type){
        case "GET_ALL_USERS":
            return {...state, users: action.payload}
        case "DELETE_USER":
            return {...state, users: state.users.filter((user:UserDto)=>user.id !== action.payload)}
        default:
            return {...state};
    }
}

export const deleteUserAC = (payload: any)=>({type:"DELETE_USER", payload: payload});
export const getAllUserAC = (payload: any)=>({type:"GET_ALL_USERS", payload: payload});


