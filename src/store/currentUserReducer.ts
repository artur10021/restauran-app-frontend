import {ActionType} from "../types/action.type";

interface currentUserInitialState{
    roles: string[],
}

const initialState: currentUserInitialState={
    roles: ["rrrrr"],
}

export const currentUserReducer = (state = initialState, action:ActionType) => {
    switch (action.type){
        case "SET_SESSION_ROLE":
            console.log(action.payload)
            return {...state, roles: action.payload}
        default:
            return state;
    }
}

export const setSessionRoleAC = (payload: string[])=>({type:"SET_SESSION_ROLE", payload: payload});