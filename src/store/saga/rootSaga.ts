import {spawn} from "redux-saga/effects";
import {menuSaga} from "./menuSaga";
import {userSaga} from "./userSaga";
import {basketSaga} from "./basketSaga";


export default function* rootSaga () {
    yield spawn(menuSaga);
    yield spawn(userSaga);
    yield spawn(basketSaga);
}