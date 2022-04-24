import { put, takeEvery} from "redux-saga/effects"
import {addBurgersToBasketAC, removeItemFromBasketAC} from "../basketReduser";
import {ActionType} from "../../types/action.type";

function* removeItemFromBasketRequest(action:ActionType){
    yield put(removeItemFromBasketAC(action.payload))
}

function* addBurgerRequest(action:ActionType){
    yield put(addBurgersToBasketAC(action.payload))
}

export function* basketSaga(){
    yield takeEvery('ADD_BURGER_REQUEST', addBurgerRequest);
    yield takeEvery('REMOVE_ITEM_FROM_BASKET_REQUEST', removeItemFromBasketRequest);
}