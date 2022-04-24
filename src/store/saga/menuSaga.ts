import {BurgerItemDto} from "../../dto/burger-item.dto";
import {call, put, takeEvery} from "redux-saga/effects"
import {addBurgerAC} from "../menuReducer";
import {loadBurgers} from "../../api/nemu.api";


function* loadBurgerRequest(){
    const data:BurgerItemDto = yield call(loadBurgers);
    yield put(addBurgerAC(data));
}

export function* menuSaga(){
    yield takeEvery('LOAD_BURGERS_REQUEST', loadBurgerRequest);
}