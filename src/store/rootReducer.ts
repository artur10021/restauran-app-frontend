import {combineReducers} from "redux";
import {menuReducer} from "./menuReducer";
import {basketReducer} from "./basketReduser";
import {currentUserReducer} from "./currentUserReducer";


export const rootReducer = combineReducers({
    menuReducer,
    basketReducer,
    currentUserReducer})