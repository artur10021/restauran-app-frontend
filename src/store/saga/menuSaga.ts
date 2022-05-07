import {BurgerItemDto} from "../../dto/burger-item.dto";
import {call, put, takeEvery} from "redux-saga/effects"
import {addBurgerToMenuAC, loadBurgerAC} from "../menuReducer";
import {addBurger, loadBurgers} from "../../api/nemu.api";
import {ActionType} from "../../types/action.type";


function* loadBurger(){
    const data:BurgerItemDto = yield call(loadBurgers);
    yield put(loadBurgerAC(data));
}

function* addBurgerToMenu(action:ActionType){
    console.log(action.payload)
    const formData= new FormData();
    formData.set('name', action.payload.name)
    formData.set('price', action.payload.price)
    formData.set('ingredients', action.payload.ingredients)
    formData.set('image', action.payload.image, )



    const data:BurgerItemDto = yield call(addBurger, formData);
    yield put(addBurgerToMenuAC(data));
}

export function* menuSaga(){
    yield takeEvery('LOAD_BURGERS_REQUEST', loadBurger);
    yield takeEvery('ADD_BURGER_TO_MENU_REQUEST', addBurgerToMenu);
}