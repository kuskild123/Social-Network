import {getData, loginA, loginDelA} from "../../components/DAL/api";
import {stopSubmit} from 'redux-form'

const SetUserData = 'SET-USER-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

let AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SetUserData:
            return {
                ...state,
                ...action.user
            }
        default:
            return state;
    }
}

const SetUser = (id, email, login, isAuth) => {
    return {
        type: 'SET-USER-DATA', user: {id, email, login, isAuth}
    }
}
const GetUser = () => async (dispatch) => {
    const response = await getData()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(SetUser(id, email, login, true))
    }
}

const LoginT = (email, password, rememberMe) => async (dispatch) => {

    let response = await loginA(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(GetUser())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit("login", {_error: message}));
    }
}
const LogoutT = () => {
    return async (dispatch) => {
        let response = await loginDelA()
        if (response.data.resultCode === 0) {
            dispatch(SetUser(null, null, null, false))
        }

    }
}


export {AuthReducer, SetUser, GetUser, LoginT, LogoutT}