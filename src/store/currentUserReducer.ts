import {ActionType} from "../types/action.type";

interface currentUserInitialState{
    roles: string[],
}

let userRoles:string[] = [];
if(localStorage.getItem('roles')){
    const r:any = localStorage.getItem('roles')
    userRoles = JSON.parse(r);
}
const initialState: currentUserInitialState={
    roles: userRoles,
}
export const currentUserReducer = (state = initialState, action:ActionType):Object => {
    switch (action.type){
        case "SET_SESSION_ROLE":
            return {...state, roles: action.payload}
        default:
            return {...state};
    }
}

export const setSessionRoleAC = (payload: string[])=>({type:"SET_SESSION_ROLE", payload: payload});
