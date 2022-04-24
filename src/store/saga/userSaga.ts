import {call, put, takeEvery} from "redux-saga/effects";
import {loginUser, registerUser} from "../../api/user.api";
import {RegisterResponseDto} from "../../dto/register-response.dto";
import {ActionType} from "../../types/action.type";
import {setSessionRoleAC} from "../currentUserReducer";

function* register(action: ActionType){
    const response:RegisterResponseDto = yield call(registerUser, action.payload);
    localStorage.setItem('token', response.access_token);
    window.location.href = "/menu"
}


function* login(action: ActionType){
    try {
        const response:RegisterResponseDto = yield call(loginUser, action.payload);
        localStorage.setItem('token', response.access_token);
        const roles:string[] = response.roles.map((role:any)=> role.value)
        console.log(roles)
        yield put(setSessionRoleAC(roles))

    }catch (e){
        console.log(e)
    }
}

export function* userSaga(){
    yield takeEvery('REGISTER_USER_REQUEST', register);
    yield takeEvery('LOGIN_USER_REQUEST', login);


}