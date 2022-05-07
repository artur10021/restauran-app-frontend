import {combineReducers} from "redux";
import {menuReducer} from "./menuReducer";
import {basketReducer} from "./basketReduser";
import {currentUserReducer} from "./currentUserReducer";
import {usersReducer} from "./usersReducer";



export const rootReducer = combineReducers({
    menuReducer: menuReducer,
    basketReducer: basketReducer,
    currentUserReducer:currentUserReducer,
    usersReducer: usersReducer
})