import {call, put, takeEvery} from "redux-saga/effects";
import {addRole, deleteUser, getAllUsers, getUserByLogin, loginUser, registerUser} from "../../api/user.api";
import {RegisterResponseDto} from "../../dto/register-response.dto";
import {ActionType} from "../../types/action.type";
import {setSessionRoleAC} from "../currentUserReducer";
import {deleteUserAC, getAllUserAC} from "../usersReducer";
import {UserDto} from "../../dto/user.dto";



function* register(action: ActionType){
    try {
        const response:RegisterResponseDto = yield call(registerUser, action.payload);
        localStorage.setItem('token', response.access_token);
        action.payload.navigate('/menu')
    }
    catch (e){
        console.log(e)
    }

}


function* login(action: ActionType){
    try {
        const response:RegisterResponseDto = yield call(loginUser, action.payload);
        localStorage.setItem('token', response.access_token);
        const roles:string[] = response.roles.map((role:any)=> role.value)
        localStorage.setItem('roles', JSON.stringify(roles))
        yield put(setSessionRoleAC(roles))

        action.payload.navigate('/menu')

    }catch (e){
        console.log(e)
    }
}

function* deleteU(email: any){
    try {
        const response:UserDto = yield call(deleteUser, email);
        yield put(deleteUserAC(response.id))

    }catch (e){
        console.log(e)
    }
}

function* getAll(){
    try {
        const response:string = yield call(getAllUsers);
        yield put(getAllUserAC(response))

    }catch (e){
        console.log(e)
    }
}

function* getOneUser(login:any){
    try {
        const response:string = yield call(getUserByLogin, login);

    }catch (e){
        console.log(e)
    }
}

function* addUserRole(payload:any){
    try {
        const response:string = yield call(addRole, payload);

    }catch (e){
        console.log(e)
    }
}

export function* userSaga(){
    yield takeEvery('REGISTER_USER_REQUEST', register);
    yield takeEvery('LOGIN_USER_REQUEST', login);
    yield takeEvery('DELETE_USER_REQUEST', deleteU);
    yield takeEvery('GET_USERS_REQUEST', getAll);
    yield takeEvery('GET_ONE_USER_REQUEST', getOneUser);
    yield takeEvery('ADD_USER_ROLE_REQUEST', addUserRole);
}