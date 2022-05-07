import { put, takeEvery} from "redux-saga/effects"
import {addBurgersToBasketAC, removeItemFromBasketAC} from "../basketReduser";
import {ActionType} from "../../types/action.type";

function* removeItemFromBasketRequest(action:ActionType){
    yield put(removeItemFromBasketAC(action.payload))
}

function* addBurgerToBasketRequest(action:ActionType){
    yield put(addBurgersToBasketAC(action.payload))
}

export function* basketSaga(){
    yield takeEvery('ADD_BURGER_TO_BASKET_REQUEST', addBurgerToBasketRequest);
    yield takeEvery('REMOVE_ITEM_FROM_BASKET_REQUEST', removeItemFromBasketRequest);
}